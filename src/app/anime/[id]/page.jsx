import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/utilities/VideoPlayer"
import { Sparkle } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

const Page = async({params: {id}})=>{
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)
    const trelercok = anime.data.trailer.youtube_id
    return(
        <>
        <div className="pt-4 px-4">
            <h3 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year} ({anime.data.season})</h3>
        </div>
        <div className="pt-4 px-4 flex gap-2 text-color-primary text-sm">
            <div className="w-36 flex sm:flex-row flex-col items-center justify-center border rounded border-color-accent gap-x-3">
            <h3>peringkat </h3>
            <p> {anime.data.rank}</p>
            </div>
            <div className="w-36 flex sm:flex-row flex-col items-center justify-center border rounded border-color-accent gap-x-3">
            <h3>episodes </h3>
            <p> {anime.data.episodes}</p>
            </div>
            <div className="w-36 flex sm:flex-row flex-col items-center justify-center border rounded border-color-accent gap-x-3 text-center">
            <h3>status </h3>
            <p> {anime.data.status}</p>
            </div>
        </div>
        <div className="pt-4 px-4 flex gap-2 text-color-primary items-center">
            <h3>sekor : </h3>
            
            <p className="flex flex-row items-center"><Sparkle size={12} className="m-0 p-0 text-color-accent"/>{anime.data.score}</p>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2  text-color-primary">
            <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full object-cover max-h-96"/>
            <div>
            <h3 className="border-b-2 text-2xl m-2">synopsis</h3>
            <p className="text-color-primary text-xl  indent-4 ">{anime.data.synopsis}</p>
            </div>
        </div>

<div>
        <VideoPlayer YouTubeId={anime.data.trailer.youtube_id}/>
</div>

        </>
    )
}

export default Page