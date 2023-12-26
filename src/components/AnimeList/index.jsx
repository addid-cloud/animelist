import Image from "next/image"
import Link from "next/link"
const AnimeList = ({api, className})=>{
    return(
        <div className={` ${className}`}>
            {api.data?.map((anime, index)=>{
                return(
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-texthover transition-all" key={index}>
                    <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-96 object-cover"/>
                    <h3 className="font-bold sm:text-xl text-base p-4 ">{anime.title}</h3>
                </Link>
                )
            })}

        </div>
    )
}

export default AnimeList