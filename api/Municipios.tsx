import { type Clima, type ClimaWrapper,type Municipio, type OldApiAnswer } from "@/types";

const baseUrl = 'https://opendata.aemet.es/opendata/api'

const getAllMunicipios = async () : Promise<Municipio[]> =>  {
    const res = await fetch(`${baseUrl}/maestro/municipios/?api_key=${process.env.API_KEY}`,
    {
        cache: 'no-cache',
    })
    const data = await res.json()
    return data
}

const getMunicipioByName = async (nombre: string) : Promise<Municipio> => {
    const municipios = await getAllMunicipios()
    const municipio = municipios.find((municipio: Municipio) => municipio.nombre.toLowerCase() === nombre.toLowerCase())

    if (!municipio) {
        throw new Error('No se ha encontrado el municipio')
    }

    return municipio
}

export const getClimaMunicipio = async (nombre: string) : Promise<Clima> => {
    const municipio = await getMunicipioByName(nombre)
    
    const res = await fetch(`${baseUrl}/prediccion/especifica/municipio/horaria/${municipio.id_old}?api_key=${process.env.API_KEY}`,
    {
        cache: 'no-cache',
    })
    const data : OldApiAnswer = await res.json()

    const res2 = await fetch(data.datos, {
        cache: 'no-cache',
    })

    const data2 : ClimaWrapper= await res2.json()

    return data2[0]
}