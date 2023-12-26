import React from 'react'
import Carousel from './Carousel'
import { getNestedAnimeRespon,getAnimeResponse, reproduce } from '@/libs/api-libs'
import News from '../utilities/News'
import Header from '../AnimeList/Header'

let rekom = await getNestedAnimeRespon("recommendations/anime", "entry")
  rekom = reproduce(rekom,12)
  let upcomingAnime = await getAnimeResponse("seasons/upcoming", "");
  

const CarouselAnimeList = () => {
  return (
        <div className='relative'>
    <div className='flex flex-row'>
      <div className='flex flex-col'>
        <Header title={"rekomendasi"}/>
    <Carousel api={rekom}/>
        <Header title={"Anime Upcoming"}/>
    <Carousel api={upcomingAnime}/>
      </div>
    <News/>
        </div>
    </div>
  )
}

export default CarouselAnimeList