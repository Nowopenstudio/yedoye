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


export default function Idea({data}:any) {
 const ref = useRef(null)
    const {winY} = useResize()
    const {scrollYProgress} = useScroll(
        {target:ref}
    );


  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
   
    
     <React.Fragment>
        <div ref={ref} className="w-[100vw] min-h-[100svh]  bg-[--purple] text-[--black] mt-[40px] relative grid grid-cols-12 pb-[200px]">
     
            {data.content.map((item:any,i:number)=>{
                return(
                <React.Fragment key={`${i}-text`}>
                   {item.content=="text"?(
                    <div className="col-span-full px-[--sm] xl:px-0 md:col-span-10 xl:col-span-6 xl:col-start-4  richText">
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
  
          <div className="fixed z-[100] w-[100vw] bg-[--black] bottom-[80px] left-0">
            <div className="w-full px-[--sm] text-[--purple] uppercase"><h1>{data.title}</h1></div>
            <motion.div className="absolute h-full top-0 left-0 z-10 bg-[--white] pl-[--sm] overflow-hidden uppercase text-[--purple]" style={{width}}><h1 className="w-[100vw]">{data.title}</h1></motion.div>
          </div>
  
     </React.Fragment>
  


);
}
