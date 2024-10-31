import { type Temperatura as TemperaturaType, type EstadoCielo as EstadoCieloType, type Precipitacion } from '@/types'

import { Temperatura } from './Temperatura'

import React from 'react'

interface Props {
  temperaturasData: TemperaturaType []
  estadoCielo: EstadoCieloType []
  precipitacion: Precipitacion [] | undefined
  mañana: boolean
}

export const ListOfTemperaturas = ({ temperaturasData, estadoCielo, precipitacion, mañana }: Props): React.JSX.Element => {
  const horaActual = new Date().getHours()

  const filteredTemperaturasData = mañana ? temperaturasData : temperaturasData.filter((temperatura) => parseInt(temperatura.periodo) >= horaActual)

  return (
        <div className="flex flex-row gap-4 overflow-x-scroll whitespace-nowrap p-4 max-w-xs sm:max-w-2xl">
            {filteredTemperaturasData.map((temperatura) => {
              const actualPrecipitacion = precipitacion?.find((precipitacion) => precipitacion.periodo === temperatura.periodo)
              return (
                <Temperatura key={crypto.randomUUID.toString()} temperaturaData={temperatura} estadoCielo={estadoCielo} precipitacion={actualPrecipitacion}/>)
            }
            )}
        </div>
  )
}
