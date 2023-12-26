"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import News from '../utilities/News';

const Carousel = ({ api }) => {
const settings = {dots: true,
dotsClass: "slick-dots slick-thumb",
infinite: true,
autoplay: true,
autoplaySpeed: 2000,
speed: 500,
slidesToShow: 4,
slidesToScroll: 2,
arrows:false,
appendDots: (dots) => (
<div style={{ backgroundColor: '#eeeee' }}>
    <ul>{dots}</ul>
</div>
)
};
return (

    
    <Slider {...settings} className='w-1/2 h-1/2 my-4' style={{ width: '100%', maxWidth: '720px', height: 'auto' }}>
        {api.data?.map((anime, index)=>{
        return(
        <div>
            <Link href={`/anime/${anime.mal_id}` }
                className="cursor-pointer text-color-primary hover:text-color-texthover transition-all flex-col flex  items-center self-center"
                key={index}>
            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350}
                className=" max-h-96 object-cover text-center w-[90%] m-auto" />
            <p className="font-bold sm:text-base text-base p-4 text-center line-clamp-1">{anime.title}</p>
            </Link>
        </div>
        )
        })}
    </Slider>
)
};

export default Carousel;