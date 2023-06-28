'use client'

import Link from 'next/link'
import { useState } from 'react'
import { type Municipio } from '@/types'
import { Combobox } from '@headlessui/react'

interface Props {
  municipios: Municipio[]
}

export const SearchEngine = ({ municipios }:Props)  => {

  const [search, setSearch] = useState('')
  const [municipio, setMunicipio] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase())
  }

  const filteredMunicipios = municipios?.filter((municipio) => {
    return municipio.nombre.toLowerCase().startsWith(search)
  })

  const firstMunicipios = filteredMunicipios ? [...filteredMunicipios.slice(0, 10)] : [];

  return (
    <div className='mt-10 w-96 flex justify-center flex-row'>
      
        <Combobox value={municipio} onChange={setMunicipio}>
          <div className='flex flex-col'>
          <Combobox.Input 
            onChange={handleInput} 
            className='border border-gray-400 rounded-md p-2 w-full text-black'
            placeholder='Escribe una localidad' 
          />
          <Combobox.Options>
            {firstMunicipios?.map((m) => (
              <Combobox.Option key={m.id} value={m.nombre}>
                {m.nombre}
              </Combobox.Option>
            ))}
          </Combobox.Options>
          </div>
        </Combobox>
        <div className='flex items-start'>
        <Link
              href={`/municipios/${search}`}
              className='bg-blue-500 text-white rounded-md p-2 ml-2 hover:shadow-xl hover:bg-blue-600'
            >
              Buscar
        </Link>
        </div>
    </div>
  )
}