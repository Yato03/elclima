import { type Clima, type ClimaWrapper, type Municipio, type OldApiAnswer } from '@/types'

const baseUrl = 'https://opendata.aemet.es/opendata/api'

export const getAllMunicipios = async (): Promise<Municipio[]> => {
  try {
    const apiKey = process.env.API_KEY
    if (apiKey == null) {
      throw new Error('No se ha encontrado la api key')
    }
    const url = `${baseUrl}/maestro/municipios/?api_key=${apiKey}`
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
    const data2: any = JSON.parse(text)
    const url2 = data2.datos
    const res2 = await fetch(url2,
      {
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json; charset=utf-8', 'Accept-Charset': 'utf-8'
        }
      }
    )

    const data3 = await res2.arrayBuffer()
    const text3 = decoder.decode(data3)
    const data4: Municipio[] = JSON.parse(text3)

    return data4
  } catch (err) {
    console.log(err)
    throw new Error('No se han podido obtener los municipios')
  }
}

export const getMunicipioByName = async (nombre: string): Promise<Municipio> => {
  const municipios = await getAllMunicipios()

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!municipios) {
    throw new Error('No se han podido obtener los municipios')
  }

  // url decode the name
  nombre = decodeURIComponent(nombre)

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
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const res = await fetch(`${baseUrl}/prediccion/especifica/municipio/horaria/${id}/?api_key=${process.env.API_KEY}`,
      {
        cache: 'no-cache'
      })
    const data: OldApiAnswer = await res.json()
    console.log(data)

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
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
