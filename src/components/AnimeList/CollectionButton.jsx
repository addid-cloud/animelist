"use client"
import React, { useState } from 'react'


const CollectionButton = ({anime_id, user_email}) => {
    const [isCreated, setIsCreated] = useState(false)
    const handleCollection=async(epen)=>{
        event.preventDefault()
        const data = {anime_id, user_email}
        const response = await fetch("/api/v1/collection", {
            method:"POST",
            body:JSON.stringify(data)
        })
        const collection = await response.json()
        if(collection.status ==200){
            setIsCreated(true)
        }
        return
    }
  return (
    <div>
        {isCreated ? 
            <p className='text-color-primary bg-green-500 w-fit p-2 my-2 hover:-translate-y-2 transition-all ease-in-out hover:shadow-green-50 hover:shadow rounded '>✔ Berhasil ditahmbahkan ke koleksi</p>
            :
        <button onClick={()=>{handleCollection()}} 
        className="bg-color-accent text-color-primary p-2 px-4 rounded hover:bg-color-texthover transition-all">
                Add To Collection
            </button>
            }
    </div>
  )
}

export default CollectionButton