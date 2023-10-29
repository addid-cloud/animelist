import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async({params}) =>{
    const {keyword} = params
    const decodeKeyWord = decodeURI(keyword)
  // const response  = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyWord}`)
  // const searchAnime  = await response.json()
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyWord}`)
  return(
    <>
    <section>
      <Header title={`pencarian untuk ${decodeKeyWord}...`} />
      <AnimeList api={searchAnime}/>
    </section>
    </>
  )
}

export default Page;