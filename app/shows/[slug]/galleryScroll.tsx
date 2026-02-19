'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";


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
          

                <div  className="w-[100vw] xl:w-[50vw] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn w-full h-auto`}/>
                </div>
                <div  className="w-[100vw] xl:w-[50vw] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn w-full h-auto`}/>
                </div>
                <div  className="w-[100vw] xl:w-[50vw] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn w-full h-auto`}/>
                </div>
                <div  className="w-[100vw] xl:w-[50vw] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn w-full h-auto`}/>
                </div>
                <div  className="w-[100vw] xl:w-[50vw] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn w-full h-auto`}/>
                </div>
                <div  className="w-[100vw] xl:w-[50vw] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn w-full h-auto`}/>
                </div>
        
         
            
         
      
       </motion.div>
  


);
}
