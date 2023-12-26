"use client"
import AnimeList from '@/components/AnimeList'
import Pagination from '@/components/utilities/Pagination'
import HeaderMenu from '@/components/utilities/HeaderMenu'
import React, { useEffect, useState } from 'react'
import { getAnimeResponse } from '../../libs/api-libs'

const Page = () => {
  const [page, setPage]= useState(1)
  const [topAnime, setTopAnime]= useState([])
  const fetchData = async() =>{

    

    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(populerAnime)
  }
  useEffect(()=>{
    fetchData()
  },[page])
  return (
    <>
    <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
    <AnimeList api={topAnime} className={`grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4`}/>
    <Pagination page={page} lastPage = {topAnime.pagination?.last_visible_page} setPage={setPage}/>
    </>
  )
}

export default Page