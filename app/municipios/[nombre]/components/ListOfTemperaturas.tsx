import { type Temperatura as TemperaturaType, type EstadoCielo as EstadoCieloType, type Precipitacion } from '@/types'

import { Temperatura } from './Temperatura'

import React from 'react'

interface Props {
  temperaturasData: TemperaturaType []
  estadoCielo: EstadoCieloType []
  precipitacion: Precipitacion [] | undefined
}

export const ListOfTemperaturas = ({ temperaturasData, estadoCielo, precipitacion }: Props): React.JSX.Element => {
  const horaActual = new Date().getHours()
  const filteredTemperaturasData = temperaturasData.filter((temperatura) => parseInt(temperatura.periodo) >= horaActual)

  return (
        <div className="flex flex-row gap-2 flex-wrap justify-start">
            {filteredTemperaturasData.map((temperatura) => {
              const actualPrecipitacion = precipitacion?.find((precipitacion) => precipitacion.periodo === temperatura.periodo)
              return (
                <Temperatura key={crypto.randomUUID.toString()} temperaturaData={temperatura} estadoCielo={estadoCielo} precipitacion={actualPrecipitacion}/>)
            }
            )}
        </div>
  )
}
