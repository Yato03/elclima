'use client'

import Link from 'next/link'
import { useState } from 'react'

export const SearchEngine = () => {
    const [search, setSearch] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div className='mt-10 w-96 flex justify-center flex-row'>
        <input 
          className='border border-gray-400 rounded-md p-2 w-full text-black' 
          type="text" 
          placeholder='Escribe una localidad'
          onChange={handleInput}
          value={search}
        />
        <Link
          href={`/municipios/${search}`}
          className='bg-blue-500 text-white rounded-md p-2 ml-2 hover:shadow-xl hover:bg-blue-600'
        >
          Buscar
        </Link>
      </div>
  )
}