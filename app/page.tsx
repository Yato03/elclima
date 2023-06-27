import { SearchEngine } from "./components/SearchEngine";

export default function Home() {

  return ( 
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className='text-3xl'>elclima.es</h1>
      <h2 className='text-xl mt-10'>Busca una localidad española para ver su clima</h2>
      <SearchEngine/>
    </main>
  )
}
