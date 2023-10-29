import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeRespon } from "../libs/api-libs";

const Page = async() =>{
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let rekom = await getNestedAnimeRespon("recommendations/anime", "entry")
  rekom = {data: rekom.sort(()=>0.5 - Math.random()).slice(0,4)}
  console.log(rekom)

  return(
    <>
    <section>
      <Header title="Rekomendasi"/>
      <AnimeList api={rekom}/>
    </section>
    <section>
      <Header title="paling populer" linkTitle="lihat semuanya..." linkHref="/populer"/>
      <AnimeList api={topAnime}/>
    </section>
    </>
  )
}

export default Page;