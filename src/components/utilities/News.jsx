    "use client";
    import React, { useEffect, useState } from 'react';
    import { getAnimeResponse, formatAnimeDate, getNestedAnimeRespon, reproduce } from '@/libs/api-libs';
import Quote from '../Quote';


    const News = () => {
        const [newsData, setNewsData] = useState([]);
    
    useEffect(() => {
        const fetchNews = async () => {
            try {
            let upcomingAnime = await getAnimeResponse("seasons/upcoming", "");
            const randomAnimeIds = reproduce(upcomingAnime.data, 10).data.map(anime => anime.mal_id);
            const newsDataArray = [];
            for (const randomAnimeId of randomAnimeIds) {
                const news = await getAnimeResponse(`anime/${randomAnimeId}/news`, 'page=1');
                newsDataArray.push(...news.data);
            }
            setNewsData(newsDataArray);
            } catch (error) {
            console.error('Error fetching news:', error);
            }
        };
        fetchNews();
        }, []);
    
        // Menampilkan hanya 10 berita pertama
        const limitedNewsData = newsData.slice(0, 10);
    
        return (
        <div className='flex flex-col bg-color-secondary m-2 p-2 rounded'>
            <Quote/>
            <h2 className='text-white self-center my-2 font-bold text-xl'>Berita Anime</h2>
            <div className='grid grid-cols-2 gap-2'>
            {limitedNewsData.map((anime, index) => (
                <div className='flex flex-row' key={index}>
                <img src={anime.images.jpg.image_url} className='max-h-32 object-cover w-1/4 ml-2'/>
                <div className='flex-col flex'>
                    <h2 className='text-white text-sm ml-2'>{anime.title}</h2>
                    <h4 className='ml-2 text-xs font-light text-slate-300'>{formatAnimeDate(anime.date)}</h4>
                </div>
                </div>
            ))}
            </div>
        </div>
        );
    };
    
    export default News;