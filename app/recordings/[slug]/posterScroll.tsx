'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";


export default function PosterScroll({data,time}:any) {
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
          

                <div  className="h-[90vh] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn h-full w-auto`}/>
                </div>
                <div  className="h-[90vh] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn h-full w-auto`}/>
                </div>
                <div  className="h-[90vh] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn h-full w-auto`}/>
                </div>
                <div  className="h-[90vh] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn h-full w-auto`}/>
                </div>
                <div  className="h-[90vh] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn h-full w-auto`}/>
                </div>
                <div  className="h-[90vh] flex-shrink-0">
                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data}  className={`border border-[--purple]
 fadeOn h-full w-auto`}/>
                </div>
                
        
         
            
         
      
       </motion.div>
  


);
}
