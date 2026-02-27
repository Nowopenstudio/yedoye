'use client'

import { animate, useMotionValue, motion, useAnimation } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Arrow, Logo} from "../svg/icons";
import { Reveal } from "../util/reveal";
import useResize from "../util/useResize";


export default function LinkScroll({data,color,time}:any) {
  const [ref, {width}] = useMeasure();
  const [pause, setPause] = useState(false);
 const {winX} = useResize();
let controls:any;
  const xTranslation = useMotionValue(0)
  useEffect(()=>{
    const finalPos = -width/3 ;
    
    
 controls = animate(xTranslation, [-width+(width/3), finalPos],{
      ease:'linear', duration:time, repeat:Infinity, repeatType:'loop', repeatDelay:0
    })
    
      return controls.stop;
    }, [xTranslation, width])

    const pauseAnimation = () => {
      controls.pause();
    }

    const resumeAnimation = () => {
      controls.play();
    }
  
  return (
   
    
      <motion.div  className="flex left-0 items-center top-[0] z-[1] gap-[--sm] w-max" onMouseEnter={pauseAnimation} onMouseLeave={resumeAnimation} ref={ref} style={{x:xTranslation,color:`var(--${color})`}}>
          
        {data.map((item:any,i:number)=>{
            return(
              <a key={`${item.label}-${i}`} href={item.link} className="flex flex-shrink-0 items-center uppercase gap-[--sm] w-max singleLink"><h1>{item.label}</h1><Arrow className="w-[100px] md:w-[120px] h-auto" fill={`var(--${color})`}/></a>
            )
        })}
          {data.map((item:any,i:number)=>{
            return(
              <a key={`${item.label}-${i}`} href={item.link} className="flex flex-shrink-0 items-center uppercase gap-[--sm] w-max singleLink"><h1>{item.label}</h1><Arrow className="w-[100px] md:w-[120px] h-auto" fill={`var(--${color})`}/></a>
            )
        })}
       {data.map((item:any,i:number)=>{
            return(
              <a key={`${item.label}-${i}`} href={item.link} className="flex flex-shrink-0 items-center uppercase gap-[--sm] w-max singleLink"><h1>{item.label}</h1><Arrow className="w-[100px] md:w-[120px] h-auto" fill={`var(--${color})`}/></a>
            )
        })}
         {data.map((item:any,i:number)=>{
            return(
              <a key={`${item.label}-${i}`} href={item.link} className="flex flex-shrink-0 items-center uppercase gap-[--sm] w-max singleLink"><h1>{item.label}</h1><Arrow className="w-[100px] md:w-[120px] h-auto" fill={`var(--${color})`}/></a>
            )
        })}
         {data.map((item:any,i:number)=>{
            return(
              <a key={`${item.label}-${i}`} href={item.link} className="flex flex-shrink-0 items-center uppercase gap-[--sm] w-max singleLink"><h1>{item.label}</h1><Arrow className="w-[100px] md:w-[120px] h-auto" fill={`var(--${color})`}/></a>
            )
        })}
         
         {data.map((item:any,i:number)=>{
            return(
              <a key={`${item.label}-${i}`} href={item.link} className="flex flex-shrink-0 items-center uppercase gap-[--sm] w-max singleLink"><h1>{item.label}</h1><Arrow className="w-[100px] md:w-[120px] h-auto" fill={`var(--${color})`}/></a>
            )
        })}
         
         
         
        
        
    
    
        
                            
                             
           
         
      
       </motion.div>
  


);
}
