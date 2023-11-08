import Image from "next/image"
import { useEffect } from "react"

async function getProfile(){
    //code to get profile here
}

export default function SearchBar(){
    return(
       <div className="w-full flex items-center justify-between " >
        {/* dont forget to add a search logo to the search bar */}
        <input type="text" className="w-1/2 text-xs border  border-black  h-7" placeholder="search..." ></input>
        <Image className="rounded-full bg-gray-200 " src={"/"} width={30} height={30} alt="not found" />
       </div>
    )
}