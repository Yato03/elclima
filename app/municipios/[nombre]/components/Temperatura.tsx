import {type Temperatura as TemperaturaType} from "@/types"
import {type EstadoCielo as EstadoCieloType} from "@/types"
import {type Precipitacion} from "@/types"


import Image from "next/image"
import sunnyImage from "@/public/sunny.png"
import cloudyImage from "@/public/cloudy.png"
import rainyImage from "@/public/rainy.png"

interface Props{
    temperaturaData: TemperaturaType
    estadoCielo: EstadoCieloType []
    precipitacion: Precipitacion []
    key: string

}

export const Temperatura = ({ temperaturaData, estadoCielo, precipitacion, key }: Props) => {

    const estadoCieloData = estadoCielo.find((estadoCielo) => estadoCielo.periodo === temperaturaData.periodo)

    const precipitacionData = precipitacion.find((precipitacion) => precipitacion.periodo === temperaturaData.periodo)

    let estadoCieloImg = estadoCieloData?.descripcion === "Despejado" ? sunnyImage : estadoCieloData?.descripcion === "Lluvia" ? rainyImage : cloudyImage

    
    return(
        <div className=" w-20 mx-auto bg-white rounded-xl shadow-md" key={key}>
        <div className="md:flex justify-center items-center p-5 flex-col">
            <div className="uppercase tracking-wide text-m text-indigo-500 font-semibold">{temperaturaData.periodo}:00</div>
            <Image className="w-12 mt-4" src={estadoCieloImg} alt="estadoCielo" />
            <div className="text-gray-600 mt-5 text-m">{temperaturaData.value}ºC</div>
        </div>

        </div>

    )
}