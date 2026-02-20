'use client'


import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import ReadScroll from "./readScroll";
import Image from "next/image";
import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import { MuxVideo } from "../util/muxPlayer";



export default function Single({data,count}:any) {
  const [active,setActive] = useState(false)
  const playerRef = useRef<any>(null);
  
  const over=()=>{
    setActive(true);
    if(playerRef.current){
      playerRef.current.play();
    }
  }
   const out=()=>{
    setActive(false);
    if(playerRef.current){
      playerRef.current.pause();
    }
  }
  
  return (
   
    
     <Link href={`/recordings/${data.slug}`} onMouseOver={()=>over()} onMouseOut={()=>out()} className={`w-[100vw] md:w-[50vw] lg:w-[33.33333333333333vw] pr-[--sm] flex-shrink-0 h-full overflow-hidden relative recordingSingle border-2 border-[--purple]`}>
                          {data.cover.image?(
                            <div className="absolute top-0 left-0 w-full h-full z-[0]">
                              <Image alt="image" height={0}  width={0} sizes="100vw" src={data.cover.image}  className={`fadeOn w-full h-full object-cover`}/>
                            </div>
                          ):('')}
                       
                       {data.cover.vid?(
                            <div className={`absolute top-0 left-0 w-full h-full z-[1] ${active?'opacity-100':'opacity-0'}`}>
                             <div className="h-full w-full bgMux noControl z-0">
                             <MuxPlayer key={`${data.cover.vid}-${'videoLayer'}`} ref={playerRef} poster={`https://image.mux.com/${data.cover.vid}/thumbnail.webp?time=0`} playbackId={data.cover.vid} playsInline autoPlay={false}  style={{ aspectRatio:`${data.cover.ratio.split(':')[0]}/${data.cover.ratio.split(':')[1]}`}} loop={true} metadata={{video_title:'homeVideo'}} />
                              {/* <MuxVideo playbackId={data.cover.vid} title={`Home Video`} ratio={data.cover.ratio} play={true}/> */}
                              </div>
                            </div>
                          ):('')}
                          
                    
                       <div className="bg-[--black] text-[--purple] w-full bottom-0 left-0 absolute z-10 overflow-hidden cta ">
                            <div className="bg-[--purple] w-full py-[--xs] text-[--black] text-center">
                             <ReadScroll data={{'cta':`${data.info.date?`${data.info.date}  - `:''}${data.info.location?`${data.info.location} - `:''}${data.title}`,"url":`/recording/${data.slug}`}} time={14}/></div>
                            <ReadScroll data={{"cta":"View","url":`/recording/${data.slug}`}} time={4}/>
                          </div>
      
     </Link>
  


);
}
