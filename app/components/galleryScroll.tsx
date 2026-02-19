'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Arrow, Logo} from "../svg/icons";
import { Reveal } from "../util/reveal";
import useResize from "../util/useResize";


export default function GalleryScroll({data,time}:any) {
  const [ref, {width}] = useMeasure();
  const xTranslation = useMotionValue(0)
  useEffect(()=>{
      const finalPos = -width / 2 ;
    
    
      const controls = animate(xTranslation, [0, finalPos],{
        ease:'linear', duration:time, repeat:Infinity, repeatType:'loop', repeatDelay:0
      })
    
      return controls.stop;
    }, [xTranslation, width])
  
  return (
   
    
      <motion.div  className="relative flex z-[1] w-max" ref={ref} style={{x:xTranslation}}>
          

            {data.map((item:any,i:number)=>{
              return(
                <div key={`${i}-infoGallery`} className="w-[50vw] lg:w-[25vw] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={item.image}  className={`border border-[--purple]
 fadeOn w-full h-auto`}/>
                </div>
              )
            })}
             {data.map((item:any,i:number)=>{
              return(
                <div key={`${i+data.length}-infoGallery`} className="w-[50vw] lg:w-[25vw]  flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={item.image}  className={`border border-[--purple]
border border-[--purple] fadeOn w-full h-auto`}/>
                </div>
              )
            })}
                            
                             
           
         
      
       </motion.div>
  


);
}
