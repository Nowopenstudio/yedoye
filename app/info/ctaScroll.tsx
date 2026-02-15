'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Arrow, Logo} from "../svg/icons";
import { Reveal } from "../util/reveal";
import useResize from "../util/useResize";


export default function CTAScroll({data,cta,bg,color,time}:any) {
  const [ref, {width}] = useMeasure();
  const xTranslation = useMotionValue(0)
  useEffect(()=>{
    const finalPos = -width+(width/3*2)  ;
    
    
    const controls = animate(xTranslation, [-width+(width/3), finalPos],{
      ease:'linear', duration:time, repeat:Infinity, repeatType:'loop', repeatDelay:0
    })
    
    
      return controls.stop;
    }, [xTranslation, width])
  
  return (
   
    
      <motion.div  className="absolute flex left-0 items-center top-[0] z-[1 gap-[--sm]" ref={ref} style={{x:xTranslation,color:`var(--${color})`}}>
          
        {cta.map((item:any,i:number)=>{
            return(
              <div key={`${cta[0]}-${i}`} className="flex flex-shrink-0 items-center uppercase gap-[--sm]"><h1>{item}</h1><Arrow fill={`var(--${color})`}/></div>
            )
        })}
            {cta.map((item:any,i:number)=>{
            return(
              <div key={`${cta[0]}-${i}`} className="flex flex-shrink-0 items-center uppercase gap-[--sm]"><h1>{item}</h1><Arrow fill={`var(--${color})`}/></div>
            )
        })}
               {cta.map((item:any,i:number)=>{
            return(
              <div key={`${cta[0]}-${i}`} className="flex flex-shrink-0 items-center uppercase gap-[--sm]"><h1>{item}</h1><Arrow fill={`var(--${color})`}/></div>
            )
        })}
        {cta.map((item:any,i:number)=>{
            return(
              <div key={`${cta[0]}-${i}`} className="flex flex-shrink-0 items-center uppercase gap-[--sm]"><h1>{item}</h1><Arrow fill={`var(--${color})`}/></div>
            )
        })}
            {cta.map((item:any,i:number)=>{
            return(
              <div key={`${cta[0]}-${i}`} className="flex flex-shrink-0 items-center uppercase gap-[--sm]"><h1>{item}</h1><Arrow fill={`var(--${color})`}/></div>
            )
        })}
               {cta.map((item:any,i:number)=>{
            return(
              <div key={`${cta[0]}-${i}`} className="flex flex-shrink-0 items-center uppercase gap-[--sm]"><h1>{item}</h1><Arrow fill={`var(--${color})`}/></div>
            )
        })}

        
        

        
          

                            
                             
           
         
      
       </motion.div>
  


);
}
