'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Arrow, Logo} from "../svg/icons";
import { Reveal } from "../util/reveal";
import useResize from "../util/useResize";


export default function ReadScroll({data,time}:any) {
  const [ref, {width}] = useMeasure();
  const xTranslation = useMotionValue(0)
  useEffect(()=>{
      const finalPos = -width / 2  ;
    
    
      const controls = animate(xTranslation, [finalPos, 0],{
        ease:'linear', duration:time, repeat:Infinity, repeatType:'loop', repeatDelay:0
      })
    
      return controls.stop;
    }, [xTranslation, width])
  
  return (
   
    
      <motion.div  className="flex items-center z-[1] flex-nowrap w-max" ref={ref} style={{x:xTranslation}}>
      
              <div className="flex flex-shrink-0 items-center uppercase pr-[--sm] gap-[--sm] w-max"><h2 className="flex-shrink-0">{data.cta}</h2><Arrow fill={`var(--purple)`} className="flex-shrink-0 w-[120px] h-auto" /></div>
             <div className="flex flex-shrink-0 items-center uppercase pr-[--sm] gap-[--sm] w-max"><h2 className="flex-shrink-0">{data.cta}</h2><Arrow fill={`var(--purple)`} className="flex-shrink-0 w-[120px] h-auto" /></div>
              <div className="flex flex-shrink-0 items-center uppercase pr-[--sm] gap-[--sm] w-max"><h2 className="flex-shrink-0">{data.cta}</h2><Arrow fill={`var(--purple)`} className="flex-shrink-0 w-[120px] h-auto" /></div>
              <div className="flex flex-shrink-0 items-center uppercase pr-[--sm] gap-[--sm] w-max"><h2 className="flex-shrink-0">{data.cta}</h2><Arrow fill={`var(--purple)`} className="flex-shrink-0 w-[120px] h-auto" /></div>
                <div className="flex flex-shrink-0 items-center uppercase pr-[--sm] gap-[--sm] w-max"><h2 className="flex-shrink-0">{data.cta}</h2><Arrow fill={`var(--purple)`} className="flex-shrink-0 w-[120px] h-auto" /></div>
             
   
           
         
      
       </motion.div>
  


);
}
