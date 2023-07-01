import { type Clima, type ClimaWrapper, type Municipio, type OldApiAnswer } from '@/types'

const baseUrl = 'https://opendata.aemet.es/opendata/api'

export const getAllMunicipios = async (): Promise<Municipio[]> => {
  try {
    const url = `${baseUrl}/maestro/municipios/?api_key=${process.env.API_KEY}`
    const res = await fetch(url,
      {
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json; charset=utf-8', 'Accept-Charset': 'utf-8'
        }
      }
    )
    const data = await res.arrayBuffer()
    const decoder = new TextDecoder('windows-1252')
    const text = decoder.decode(data)
    const data2: Municipio[] = JSON.parse(text)
    return data2
  } catch (err) {
    console.log(err)
    throw new Error('No se han podido obtener los municipios')
  }
}

export const getMunicipioByName = async (nombre: string): Promise<Municipio> => {
  const municipios = await getAllMunicipios()

  if (!municipios) {
    throw new Error('No se han podido obtener los municipios')
  }

  const municipio = municipios.find((municipio: Municipio) => municipio.nombre.toLowerCase() === nombre.toLowerCase())

  if (municipio == null) {
    throw new Error('No se ha encontrado el municipio')
  }

  return municipio
}

export const getClimaMunicipio = async (nombre: string): Promise<Clima> => {
  const municipio = await getMunicipioByName(nombre)

  const id = municipio.id.replace('id', '')

  try {
    console.log('hola')
    const res = await fetch(`${baseUrl}/prediccion/especifica/municipio/horaria/${id}/?api_key=${process.env.API_KEY}`,
      {
        cache: 'no-cache'
      })
    const data: OldApiAnswer = await res.json()
    console.log(data)

    if (!data) {
      throw new Error('No se ha podido contactar con la api del clima')
    }

    const res2 = await fetch(data.datos, {
      cache: 'no-cache'
    })

    const data2: ClimaWrapper = await res2.json()

    return data2[0]
  } catch (err) {
    console.log(err)
    throw new Error('No se ha podido obtener el clima')
  }
}
