import Header from '@/components/Dashboard/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='mt-4'>
        <Header title={"Koleksi Anime"}/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:m-2 '>
            <Link href={"/"} className='border-2 border-color-accent relative'>
                <Image src={""} width={210} height={300} className='w-full'/>
                <div className='w-full h-16 absolute bottom-0 bg-color-accent flex items-center justify-center text-color-primary'>
                    <h3 className='text-xl text-center '>judul anime</h3>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default page