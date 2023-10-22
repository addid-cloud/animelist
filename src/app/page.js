import Link from "next/link";
import AnimeList from "@/components/AnimeList";

const Home = async() =>{

  const response  = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()
  console.log(anime)
  return(
    <div>
      <div className="p-4 flex justify-between flex-row items-center">
      <h1 className="text-xl font-semibold">Paling Populer</h1>
      <Link href="/populer" className="sm:text-lg text-sm hover:text-indigo-500 underline transition-all" >Lihat semuanya</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4">
      {anime.data.map(data =>{
        return (
        <div key={data.mal_id} className="shadow-xl">
        <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
        </div>
        )
      })}
      </div>
    </div>
  )
}

export default Home;