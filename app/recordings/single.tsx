'use client'

import { animate, useMotionValue, motion } from "framer-motion";


import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Arrow, Logo} from "../svg/icons";
import { getDateLong } from "../util/sanity";
import Link from "next/link";
import ReadScroll from "./readScroll";
import Image from "next/image";
import React from "react";
import { MuxVideo } from "../util/muxPlayer";



export default function Single({data,count}:any) {
  const [active,setActive] = useState(false)
  
  const over=()=>{
    setActive(true);
  }
   const out=()=>{
    setActive(false);
  }
  
  return (
   
    
     <Link href={`/recordings/${data.slug}`} onMouseOver={()=>over()} onMouseOut={()=>out()} className={`w-[100vw] md:w-[50vw] lg:w-[33.33333333333333vw] pr-[--sm] flex-shrink-0 h-full overflow-hidden relative recordingSingle border-2 border-[--purple]`}>
                          {data.cover.image?(
                            <div className="absolute top-0 left-0 w-full h-full z-[0]">
                              <Image alt="image" height={0}  width={0} sizes="100vw" src={data.cover.image}  className={`fadeOn w-full h-full object-cover`}/>
                            </div>
                          ):('')}
                       {active?(
                       <React.Fragment>
                       {data.cover.image?(
                            <div className="absolute top-0 left-0 w-full h-full z-[1]">
                             <div className="h-full w-full bgMux noControl z-0"> <MuxVideo playbackId={data.cover.vid} title={`Home Video`} ratio={data.cover.ratio} play={true}/></div>
                            </div>
                          ):('')}
                          
                       </React.Fragment>
                       ):('')}
                       <div className="bg-[--black] text-[--purple] w-full bottom-0 left-0 absolute z-10 overflow-hidden cta ">
                            <div className="bg-[--purple] w-full py-[--xs] text-[--black] text-center">
                              <ReadScroll data={{'cta':`${data.info.date?`${data.info.date}  - `:''}${data.info.location?`${data.info.location} - `:''}${data.title}`,"url":`/recording/${data.slug}`}} time={14}/></div>
                            <ReadScroll data={{"cta":"View","url":`/recording/${data.slug}`}} time={4}/>
                            
                          </div>
      
     </Link>
  


);
}
