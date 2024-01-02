"use client"
import React from 'react'
import { ArrowCircleLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'


const Header = ({title}) => {
    const router = useRouter()
    const handlerBack =()=>{
        event.preventDefault()
        router.back()
    }
  return (
    <div className='m-2 flex flex-row items-center  gap-3'>
    <button onClick={()=>handlerBack()} className='text-white flex flex-row items-center gap-2 p-2 bg-color-accent rounded w-fit'><ArrowCircleLeft size={20}/>BACK</button>
    <h3 className='text-2xl text-color-primary'>
        {title ? title : null}
    </h3>
</div>
  )
}

export default Header