import { type Clima as ClimaType, type Temperatura } from '@/types'

import { ListOfTemperaturas } from './ListOfTemperaturas'

import React from 'react'

interface Props {
  climaData: ClimaType
}

export const Clima = ({ climaData }: Props): React.JSX.Element => {
  const horaActual = new Date().getHours()
  const temperaturaData = climaData.prediccion.dia[0].temperatura.find((t: Temperatura) => t.periodo === horaActual.toString())
  const estadoCieloData = climaData.prediccion.dia[0].estadoCielo.find((t: Temperatura) => t.periodo === horaActual.toString())?.descripcion
  const horaOcaso = climaData.prediccion.dia[0].ocaso
  const horaOrto = climaData.prediccion.dia[0].orto

  return (
        <div>
            <div className="mb-4">
                <h2>Temperatura: {temperaturaData?.value} ºC</h2>
                <h3>{estadoCieloData}</h3>
                <h3>Horas de sol: {horaOrto}-{horaOcaso}</h3>
            </div>

            <ListOfTemperaturas temperaturasData={climaData.prediccion.dia[0].temperatura} estadoCielo={climaData.prediccion.dia[0].estadoCielo} precipitacion={climaData.prediccion.dia[0].precipitacion} mañana={false}/>

            <div className="mb-4 mt-8">
                <h2>Mañana</h2>
            </div>

            <ListOfTemperaturas temperaturasData={climaData.prediccion.dia[1].temperatura} estadoCielo={climaData.prediccion.dia[1].estadoCielo} precipitacion={climaData.prediccion.dia[1].precipitacion} mañana={true}/>

        </div>
  )
}
