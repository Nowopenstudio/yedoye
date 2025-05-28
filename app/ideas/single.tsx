'use client'

import { animate, useMotionValue, motion } from "framer-motion";


import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Arrow, Logo} from "../svg/icons";
import { getDateLong } from "../util/sanity";
import Link from "next/link";
import ReadScroll from "./readScroll";



export default function Single({data,count}:any) {
  const [active,setActive] = useState(false)
  
  const over=()=>{
    setActive(true);
  }
   const out=()=>{
    setActive(false);
  }
  
  return (
   
    
     <Link href={`/ideas/${data.slug}`} onMouseOver={()=>over()} onMouseOut={()=>out()}className={`singleIdea col-span-1 h-[33vw] border border-[--purple] p-[--sm] uppercase relative`}>
                       <h1 className="mb-[--sm]">{data.title}</h1>
                       <p className="footnote">{getDateLong(data._createdAt)}</p>
                       {active?(
                        <div className="bg-[--white] text-[--purple] w-full bottom-0 left-0 absolute z-10 py-[--xs] overflow-hidden">
                          <ReadScroll data={{"cta":"Read","url":`/ideas/${data.slug}`}} time={4}/>
                        </div>
                       ):('')}
      
     </Link>
  


);
}
