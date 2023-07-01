import { getClimaMunicipio } from "@/api/Municipios"
import { Clima as ClimaType } from "@/types"
import { Clima } from "./components/Clima"

export default async function Municipio({params} : {params: {nombre: string}}){

    const nombre = params.nombre

    const clima : ClimaType = await getClimaMunicipio(nombre)

    return(
        <div>
            <h1 className="ml-20">{nombre.toUpperCase()} &bull; <small>{clima.provincia.toUpperCase()}</small></h1>
            <div className="p-20 pt-7">
                <Clima climaData={clima}/>
            </div>
        </div>
    )
}