"use client"
import { Detective } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = ()=>{
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event)=>{
        const masukan = event.key === "Enter" || event.type === "click";
        const keyword = searchRef.current.value;
        if(!keyword|| keyword.trim()=="") return
        if(masukan){
                event.preventDefault();
                router.push(`/search/${keyword}`)
            }
        
    }

    return(
        <div className="relative">
                <input  placeholder="cari animeh..." type="text" className="w-full p-2 rounded text-color-dark" ref={searchRef} onKeyDown={handleSearch}/>
                <button className="absolute top-2 end-1 text-color-dark" onClick={handleSearch} >
                <Detective size={24} />
                </button>
        </div>
    )
}
export default InputSearch