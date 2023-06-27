import { getClimaMunicipio } from "@/api/Municipios"
import { Clima } from "@/types"

export default async function Municipio({params} : {params: {nombre: string}}){

    const nombre = params.nombre

    const clima : Clima = await getClimaMunicipio(nombre)

    return(
        <div>
            <h1>{clima.provincia}</h1>
        </div>
    )
}