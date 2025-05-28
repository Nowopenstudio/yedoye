'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Arrow, Logo} from "../svg/icons";
import { Reveal } from "../util/reveal";
import useResize from "../util/useResize";


export default function LinkScroll({data,color,time}:any) {
  const [ref, {width}] = useMeasure();
  const xTranslation = useMotionValue(0)
  useEffect(()=>{
      const finalPos = -width / 2 ;
    
    
      const controls = animate(xTranslation, [finalPos, 0],{
        ease:'linear', duration:time, repeat:Infinity, repeatType:'loop', repeatDelay:0
      })
    
      return controls.stop;
    }, [xTranslation, width])
  
  return (
   
    
      <motion.div  className="flex left-0 items-center top-[0] z-[1]" ref={ref} style={{x:xTranslation,color:`var(--${color})`}}>
          
        {data.map((item:any,i:number)=>{
            return(
              <a key={`${item.label}-${i}`} href={item.link} className="flex flex-shrink-0 items-center uppercase pr-[--sm] gap-[--sm]"><h1>{item.label}</h1><Arrow fill={`var(--${color})`}/></a>
            )
        })}
          {data.map((item:any,i:number)=>{
            return(
              <a key={`${item.label}-${i}`} href={item.link} className="flex flex-shrink-0 items-center uppercase pr-[--sm] gap-[--sm]"><h1>{item.label}</h1><Arrow fill={`var(--${color})`}/></a>
            )
        })}
          {data.map((item:any,i:number)=>{
            return(
              <a key={`${item.label}-${i}`} href={item.link} className="flex flex-shrink-0 items-center uppercase pr-[--sm] gap-[--sm]"><h1>{item.label}</h1><Arrow fill={`var(--${color})`}/></a>
            )
        })}
                            
                             
           
         
      
       </motion.div>
  


);
}
