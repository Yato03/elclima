import { SearchEngine } from "@/app/components/SearchEngine";

export default function MunicipioLayout({children} : {children: React.ReactNode}){
    return(
        <div className="flex flex-col items-center gap-7">
            <SearchEngine/>
            {children}
        </div>
    )
}