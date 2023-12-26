"use client"
import React, { useState } from "react"
import { XCircle } from "@phosphor-icons/react"
import YouTube from "react-youtube"
const VideoPlayer = ({YouTubeId})=>{
    const [isOpen, setIsOpen]= useState(true)

    const handleCloseButton= ()=>{
        setIsOpen((prevState)=> !prevState)
    }

    const option= {
        width:"450",
        heihht:"250"
    }
    const Player =()=>{
        return(<div className="fixed bottom-2 right-2 ">
            <button 
            onClick={handleCloseButton}
            className="text-color-primary float-right">  
            <XCircle size={32} />{}
            </button>
            <YouTube 
            videoId={YouTubeId}
            onReady={(event) => {event.target.pauseVideo()}}
            opts={option}
            onError={()=>alert("video rosak")}
            />
        </div>)

    }
    const VideeoPlayer = ()=>{

        return(
            <>
            <button className="fixed bottom-2 right-2 w-32 bg-color-secondary text-color-accent transition-all hover:bg-color-accent hover:text-color-primary rounded" onClick={handleCloseButton}>
                open trailer
            </button>
            </>
        )
    }
    return isOpen ? <Player/> : <VideeoPlayer/>
}
export default VideoPlayer