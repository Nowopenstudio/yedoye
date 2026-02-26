'use client'

import { animate, useMotionValue, motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useRef, useState } from "react";
import { Arrow, Logo} from "../../svg/icons";
import { Reveal } from "../../util/reveal";
import useResize from "../../util/useResize";
import GalleryScroll from "./galleryScroll";
import { getDateLong } from "@/app/util/sanity";
import { PortableText } from "next-sanity";
import React from "react";
import ScrollUp from "@/app/util/misc";


export default function Idea({data}:any) {
 const ref = useRef(null)
    const {winY} = useResize()
    const {scrollYProgress} = useScroll(
        {target:ref}
    );


  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
   
    
     <React.Fragment>
        <div ref={ref} className="w-[100vw] min-h-[100svh]  bg-[--purple] text-[--black] mt-[40px] relative grid grid-cols-12 pb-[200px] pointer-events-auto">
     
            {data.cover?(
              data.cover.image?(
               <div className="overflow-hidden col-span-full relative h-auto mb-[--med]"> <GalleryScroll data={data.cover.image} time={12}/></div>
              ):('')
            ):('')}
            <div className="col-span-full px-[--sm] xl:px-0 md:col-span-10 xl:col-span-6 xl:col-start-4 2xl:col-start-1 2xl:col-span-4 uppercase mb-[--sm] 2xl:mb-0 2xl:px-[--sm] ">
            <p className="mb-[--xs] md:w-2/3" ><strong>{data.title}</strong></p>
              <p className="footnote">{getDateLong(data._createdAt)}</p>
              
              </div>
            {data.content.map((item:any,i:number)=>{
                return(
                <React.Fragment key={`${i}-text`}>
                   {item.content=="text"?(
                    <div className="col-span-full px-[--sm] xl:px-0 xl:col-span-6 xl:col-start-4 2xl:col-start-5 richText">
                      <PortableText value={item.text}/>
                    </div>
                   ):('')}
                {item.content=="image"?(
                    <div key={`${i}-image`} className="col-span-12 overflow-hidden">
                      <div className="overflow-hidden col-span-full relative h-auto mb-[--med]"> <GalleryScroll data={item.image} time={12}/></div>
  
                    </div>
                   ):('')}
                </React.Fragment>
                )
            })}
          </div>
  
          <div className="fixed z-[100] w-[100vw] bg-[--black]  bottom-[58px] md:bottom-[88px] lg:bottom-[48px] xl:bottom-[80px] left-0">
            <div className="w-full px-[--sm] text-[--purple] uppercase"><h1 className='w-full truncate'>{data.title}</h1></div>
            <motion.div className="absolute h-full top-0 left-0 z-10 bg-[--white] pl-[--sm] overflow-hidden uppercase text-[--purple]" style={{width}}><h1 className="w-[100vw]">{data.title}</h1></motion.div>
          </div>
          <ScrollUp />
     </React.Fragment>
  


);
}
