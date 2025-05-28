'use client'

import { animate, useMotionValue, motion } from "framer-motion";


import useMeasure from "react-use-measure";
import { useEffect, useRef, useState } from "react";
import { Arrow, Logo} from "../svg/icons";
import { getDateLong } from "../util/sanity";
import Link from "next/link";
import ReadScroll from "./readScroll";
import React from "react";
import Single from "./single";
import useResize from "../util/useResize";



export default function Scroller({data}:any) {
   const ref = useRef<HTMLInputElement>(null)
    const { winX, winY } = useResize();

  

  
  return (
   
    
  <React.Fragment>
     <div className=" w-[100vw] relative pt-[--med] overflow-x-hidden" style={{height:`${ref.current?(ref.current!.offsetWidth):winX}px`}}>
        <div className="fixed h-full w-full pt-[--med] pb-[80px] top-0">
          <div className=" flex bg-[--black] text-[--purple] h-full" ref={ref}>
             {data.map((item:any,i:number)=>{
               return(
               <Single key={`recording-${item.slug}`} data={item} count={i}/>
               )
             })}
          </div>
        </div>
 
     </div>
   
 
 
 
           
 
 
 
   </React.Fragment>


);
}
