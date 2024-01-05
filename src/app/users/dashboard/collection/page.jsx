import Header from '@/components/Dashboard/Header'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import Image from 'next/image'
import Link from 'next/link'
import { getAnimeResponse } from '@/libs/api-libs'
import React from 'react'

const page = async() => {
  const user = await authUserSession()
  const collection = await prisma.collection.findMany({
    where:{user_email:user.email}
  })
  return (
    <div className='mt-4'>
        <Header title={"Koleksi Anime"}/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:m-2 '>
          {collection.map(async(collect, index)=>{
    const anime = await getAnimeResponse(`anime/${collect.anime_id}`)
            return(
              <Link href={`/anime/${collect.anime_id}`} key={index} className='border-2 border-color-accent relative'>
                <Image src={anime.data.images.webp.image_url} width={210} height={300} className='w-full'/>
                <div className='w-full h-16 absolute bottom-0 bg-color-accent flex items-center justify-center text-color-primary'>
                    <h3 className='text-xl text-center '>{anime.data.title}</h3>
                </div>
              </Link>
              )
            })}
        </div>
    </div>
  )
}

export default page