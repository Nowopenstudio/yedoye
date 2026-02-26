'use client'

import { animate, useMotionValue, motion } from "framer-motion";


import useMeasure from "react-use-measure";
import { useEffect, useRef, useState } from "react";
import { Arrow, Logo} from "../svg/icons";
import { getDateLong } from "../util/sanity";
import { useLenis } from "lenis/react";
import Link from "next/link";
import ReadScroll from "./readScroll";
import React from "react";
import Single from "./single";
import useResize from "../util/useResize";
import SmoothScrolling from "../util/SmoothScrolling";
import ScrollUp from "../util/misc";




export default function Scroller({data}:any) {
   const ref = useRef<HTMLInputElement>(null)
   const { winX, winY,mobile } = useResize();
   const [fullPage, setPage] = useState(0);
   const [info, setInfo] = useState(true);
   const [prog, setProg] = useState(0);
   const [scrollX, setScroll] = useState(0);
   const lenis = useLenis(({ progress, scroll }) => {
     setProg(progress)
     setScroll(scroll)
     console.log(progress)
     if((progress > .1) && (progress < .9)){
       setInfo(false)
     }else{setInfo(true)}
    })
 
    
    useEffect(() => {
     
    setPage(ref.current!.offsetWidth)
 
   }, [ref, winX, winY]);

  

  
  return (
    <SmoothScrolling>
    <div className={`h-auto w-[100vw] overflow-hidden top-0 left-0 relative`} style={{height:mobile?'auto':fullPage}}>
      <div className="contentHolder relative md:fixed top-0 h-auto md:h-[100dvh] left-0 block md:inline-flex  min-w-[100vw] md:min-w-min pt-[--med] pb-[58px] md:pb-[88px] lg:pb-[48px] xl:pb-[80px]" ref={ref} style={{transform:`translateX(-${(prog&&scrollX>0)?(prog)*(100-(winX/fullPage*100)):0}%)`}}>

        {data.map((item:any,i:number)=>{
               return(
               <Single key={`recording-${item.slug}`} data={item} count={i}/>
               )
             })}
      </div>
    </div>
    <ScrollUp />
    </SmoothScrolling>



   
 
 
 
           
 
 



);
}
