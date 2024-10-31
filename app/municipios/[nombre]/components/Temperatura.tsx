import { type Temperatura as TemperaturaType, type EstadoCielo as EstadoCieloType, type Precipitacion } from '@/types'

import Image from 'next/image'
import sunnyImage from '@/public/sunny.png'
import cloudyImage from '@/public/cloudy.png'
import rainyImage from '@/public/rainy.png'
import React from 'react'

interface Props {
  temperaturaData: TemperaturaType
  estadoCielo: EstadoCieloType []
  precipitacion: Precipitacion | undefined
  key: string

}

export const Temperatura = ({ temperaturaData, estadoCielo, precipitacion, key }: Props): React.JSX.Element => {
  const estadoCieloData = estadoCielo.find((estadoCielo) => estadoCielo.periodo === temperaturaData.periodo)

  // const precipitacionData = precipitacion.find((precipitacion) => precipitacion.periodo === temperaturaData.periodo)

  let estadoCieloImg = estadoCieloData?.descripcion === 'Despejado' ? sunnyImage : estadoCieloData?.descripcion === 'Lluvia' ? rainyImage : cloudyImage

  estadoCieloImg = Number(precipitacion?.value) !== 0 ? rainyImage : estadoCieloImg

  return (
        <div className="inline-block w-20 bg-white rounded-xl shadow-md mx-2" key={key}>
        <div className="md:flex justify-center items-center p-5 flex-col">
            <div className="uppercase tracking-wide text-m text-indigo-500 font-semibold">{temperaturaData.periodo}:00</div>
            <Image className="w-12 mt-4" src={estadoCieloImg} alt="estadoCielo" />
            <div className="text-gray-600 mt-5 text-m">{temperaturaData.value}ºC</div>
            <div className="text-gray-600 mt-5 text-m">{precipitacion?.value}mm</div>
        </div>

        </div>

  )
}
