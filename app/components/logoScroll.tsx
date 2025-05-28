'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Logo} from "../svg/icons";
import { Reveal } from "../util/reveal";
import useResize from "../util/useResize";


export default function LogoScroll() {
  const [ref, {width}] = useMeasure();
  const xTranslation = useMotionValue(0)
  useEffect(()=>{
      const finalPos = -width / 2 ;
    
    
      const controls = animate(xTranslation, [0, finalPos],{
        ease:'linear', duration:20, repeat:Infinity, repeatType:'loop', repeatDelay:0
      })
    
      return controls.stop;
    }, [xTranslation, width])
  
  return (
   
    
      <motion.div  className="absolute flex gap-[-40px] left-0 items-center top-[0] z-[1]" ref={ref} style={{x:xTranslation}}>
          
           <div className="relative infoLogo overflow-hidden"><Logo alt="image" height={0}  width={0} sizes="100vw" fill={`var(--purple)`}  className="h-[150px] w-auto object-cover"/></div>
           <div className="relative infoLogo overflow-hidden "><Logo alt="image" height={0}  width={0} sizes="100vw" fill={`var(--purple)`}  className="h-[150px] w-auto object-cover"/></div>
           <div className="relative infoLogo overflow-hidden "><Logo alt="image" height={0}  width={0} sizes="100vw" fill={`var(--purple)`}  className="h-[150px] w-auto object-cover"/></div>
           <div className="relative infoLogo overflow-hidden "><Logo alt="image" height={0}  width={0} sizes="100vw" fill={`var(--purple)`}  className="h-[150px] w-auto object-cover"/></div>
           <div className="relative infoLogo overflow-hidden "><Logo alt="image" height={0}  width={0} sizes="100vw" fill={`var(--purple)`}  className="h-[150px] w-auto object-cover"/></div>
           <div className="relative infoLogo overflow-hidden "><Logo alt="image" height={0}  width={0} sizes="100vw" fill={`var(--purple)`}  className="h-[150px] w-auto object-cover"/></div>
           <div className="relative infoLogo overflow-hidden "><Logo alt="image" height={0}  width={0} sizes="100vw" fill={`var(--purple)`}  className="h-[150px] w-auto object-cover"/></div>
           <div className="relative infoLogo overflow-hidden "><Logo alt="image" height={0}  width={0} sizes="100vw" fill={`var(--purple)`}  className="h-[150px] w-auto object-cover"/></div>

           
                            
                             
           
         
      
       </motion.div>
  


);
}
