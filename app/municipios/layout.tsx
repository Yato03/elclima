import { SearchEngine } from "@/app/components/SearchEngine";
import { Municipio } from "@/types";
import { getAllMunicipios } from "@/api/Municipios";

export default async function MunicipioLayout({children} : {children: React.ReactNode}){

    const m = await getAllMunicipios()

    return(
        <div className="flex flex-col items-center gap-7">
            <SearchEngine municipios={m}/>
            {children}
        </div>
    )
}