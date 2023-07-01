import {type Temperatura as TemperaturaType} from "@/types"
import {type EstadoCielo as EstadoCieloType} from "@/types"
import {type Precipitacion} from "@/types"


import { Temperatura } from "./Temperatura"

interface Props{
    temperaturasData: TemperaturaType []
    estadoCielo: EstadoCieloType []
    precipitacion: Precipitacion []
}

export const ListOfTemperaturas = ({ temperaturasData, estadoCielo, precipitacion } : Props) => {
    const horaActual = new Date().getHours()
    const filteredTemperaturasData = temperaturasData.filter((temperatura) => parseInt(temperatura.periodo) >= horaActual)

    return (
        <div className="flex flex-row gap-2 flex-wrap justify-start">
            {filteredTemperaturasData.map((temperatura) => (
                <Temperatura key={crypto.randomUUID.toString()} temperaturaData={temperatura} estadoCielo={estadoCielo} precipitacion={precipitacion}/>
            ))}
        </div>
    )

}