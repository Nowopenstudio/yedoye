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
import RecordScroll from "./recordScroll";
import PosterScroll from "./posterScroll";
import Credits from "./credits";
import StripeContainer from "../../components/stripe";
import ScrollUp from "@/app/util/misc";


export default function Recordings({data}:any) {
 const ref = useRef(null)
    const {winY} = useResize()
    const [donation, setDonation] = useState(data.donation?data.donation.donate:false)
    const [clear, setClear] = useState(false)
    const [form, setForm] = useState(false)
    const {scrollYProgress} = useScroll(
        {target:ref}
    );


    const toggleDonation = () => {
      setForm(true)
    }
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
   
    
     <React.Fragment>
        <div ref={ref} className={`w-[100vw] min-h-[100svh]  bg-[--purple] text-[--black] mt-[40px] relative grid grid-cols-12 pb-[200px] ${form?'hidden':'block'} pointer-events-auto`}>
        {data.cover?(
              data.cover.image?(
               <div className="overflow-hidden col-span-full relative h-auto mb-[--med]"> <PosterScroll data={data.cover.image} time={12}/></div>
              ):('')
            ):('')}
            <div className="col-span-full px-[--sm] xl:px-0 md:col-span-10 xl:col-span-6 xl:col-start-4 2xl:col-start-1 2xl:col-span-4 uppercase mb-[--sm] 2xl:mb-0 2xl:px-[--sm] ">
            <p className="mb-[--xs] md:w-2/3 footnote" ><strong>{data.title}</strong></p>
              <p className="whitespace-pre-wrap footnote">{data.info.location?`${data.info.location}`:''}</p>
              <p className="footnote">{`${data.info.date?`${data.info.date}`:''}`}</p>
              
            </div>
            <div className="col-span-full px-[--sm] xl:px-0 xl:col-span-6 xl:col-start-4 2xl:col-start-5 pb-[--sm] md:pb-[--med]">
            <div className='w-full  mb-[--sm] md:mb-[--med]'><Credits credits={data.credits}/></div>
                      <div className="w-full richText"><PortableText value={data.copy}/></div>
                      
                    </div>
            {data.content?(
              data.content.map((item:any,i:number)=>{
                return(
                <React.Fragment key={`${i}-text`}>
                   {item.content=="text"?(
                    <div className="col-span-full px-[--sm] xl:px-0 xl:col-span-6 xl:col-start-4 2xl:col-start-5 richText">
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
            })
            ):('')}
          </div>
            
            {donation && !clear?(
            <React.Fragment>
                <div onClick={toggleDonation} className="pointer-events-auto fixed cursor-pointer bottom-[58px] md:bottom-[88px] lg:bottom-[48px] xl:bottom-[80px] bg-[--black] w-[100vw]  overflow-hidden h-[50px] lg:h-[80px] z-[100] flex items-center"><RecordScroll  data={data.info} time={Math.floor(Math.random() * 6)+9}/></div>
  
            </React.Fragment>
            ):(
              <a href={data.info.url} target="_blank"><div className="pointer-events-auto fixed bottom-[58px] md:bottom-[88px] lg:bottom-[48px] xl:bottom-[80px] bg-[--black] w-[100vw]  overflow-hidden h-[50px] lg:h-[80px] z-[100] flex items-center"><RecordScroll  data={data.info} time={Math.floor(Math.random() * 6)+9}/></div></a>
            )}

            {form?(
              <a href={data.info.url} target="_blank"><div className="fixed left-0 top-0 bg-[--white] w-[100vw]  overflow-hidden h-[50px] lg:h-[80px] z-[200] flex items-center cursor-pointer pointer-events-auto"><RecordScroll  data={{cta:`Skip donations and be a hater`}} time={Math.floor(Math.random() * 6)+12}/></div></a>
            ):('')}
          

          <div className={` pointer-events-auto top-0 left-0 w-[100vw] min-h-[100vh] bg-[--purple] z-[100] ${form?'block pointer-events-auto':'hidden pointer-events-none'} grid grid-cols-12 items-start overflow-y-auto overflow-x-hidden`}>
            <div className="pointer-events-auto col-span-full px-[--sm] md:col-span-6 md:col-start-4 flex items-center justify-center text-[--black] pb-[--xl]">
              <StripeContainer data={data}/>
            </div>
          </div>

          <ScrollUp />
     </React.Fragment>
  


);
}
