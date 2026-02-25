"use client"

import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import { useLenis, ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import useResize from '../util/useResize';
import Image from 'next/image';
import LogoScroll from './logoScroll';
import { MuxVideoBG } from '../util/muxPlayer';


export default function Navbar({data}:any){
    const page = usePathname();
    const {winX, winY, mobile} = useResize()
    const [active, setActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [end, setEnd] = useState(false)
  
console.log(page)

    return(
     <ReactLenis root>
     

      <div className={`w-[100vw] h-[100dvh] flex justify-between fixed top-0  px-[--xs] lg:px-[--sm] uppercase text-[--purple]  overflow-hidden z-[10] ${page == "/" || page == "/shows"?"mix-blend-difference":""}`}>
          <LogoScroll />
          </div>
        
          <div className={`w-full flex justify-between fixed bottom-0 px-[--xs] lg:px-[--sm]  uppercase text-[--purple] z-[100] ${(page !=="/")?"bgActive":"mix-blend-difference"} ${page.includes("show")?"invertBG":""}`} >
            <Link href={`/ideas`}><div className={`py-[--xs] lg:py-0 navBut ${page.includes('ideas')?"active":""}`}>ideas</div></Link>
            <Link href={`/shows`}><div className={`navBut py-[--xs] lg:py-0 ${page.includes('shows')?"active":""}`}>shows</div></Link>
            <Link href={`/recordings`}><div className={`navBut py-[--xs] lg:py-0 ${page.includes('recordings')?"active":""}`}>recordings</div></Link>
            <Link href={`/info`}><div className={`navBut py-[--xs] lg:py-0 ${page.includes('info')?"active":""}`}>info</div></Link>
          </div>

          <div className="homeCover w-[100vw] h-[100dvh] fixed z-[0] top-0 left-0 pointer-events-none ">
             {(page =="/")?(

              mobile?(
                data.coverVert.vid?(
                  <div className="h-full w-full bgMux noControl z-0"> <MuxVideoBG playbackId={data.coverVert.vid} title={`Home Video`} ratio={data.coverVert.ratio}/></div>
                   ):(                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data.coverVert.image} className={`z-[0] fadeOn w-full h-full object-cover `}/>
                   )
              ):(
                data.cover.vid?(
                  <div className="h-full w-full bgMux noControl z-0"> <MuxVideoBG playbackId={data.cover.vid} title={`Home Video`} ratio={data.cover.ratio}/></div>
                   ):(                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data.cover.image} className={`z-[0] fadeOn w-full h-full object-cover `}/>
                   )
              )
            

             ):('')}

             
            {(page == "/shows")?(

           mobile?(
            data.showVert.vid?(
              <div className="h-full w-full bgMux noControl z-0"> <MuxVideoBG playbackId={data.showVert.vid} title={`showVert Video`} ratio={data.showVert.ratio}/></div>
               ):(                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data.showVert.image} className={`z-[0] fadeOn w-full h-full object-cover `}/>
               )
           ):(
            data.shows.vid?(
              <div className="h-full w-full bgMux noControl z-0"> <MuxVideoBG playbackId={data.shows.vid} title={`Shows Video`} ratio={data.shows.ratio}/></div>
               ):(                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data.shows.image} className={`z-[0] fadeOn w-full h-full object-cover `}/>
               )
           )


             ):('')}
             
              </div>
      </ReactLenis>
        
    
    );
}