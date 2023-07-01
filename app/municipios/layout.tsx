import { SearchEngine } from "@/app/components/SearchEngine";
import { getAllMunicipios } from "@/api/Municipios";

export default async function MunicipioLayout({children} : {children: React.ReactNode}){

    const municipios = await getAllMunicipios()

    return(
        <div className="flex flex-col items-center gap-7">
            <SearchEngine municipios={municipios}/>
            {children}
        </div>
    )
}