import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeRespon, reproduce } from "../libs/api-libs";
import CarouselAnimeList from "@/components/CarouselAnimeList";

const Page = async() =>{
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  


  return(
    <>
    <section>
      <CarouselAnimeList/>
    </section>
    <section>
      <Header title="paling populer" linkTitle="lihat semuanya..." linkHref="/populer"/>
      <AnimeList api={topAnime} className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4"/>
    </section>
    </>
  )
}

export default Page;