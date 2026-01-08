"use client"

import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import { useLenis, ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import useResize from '../util/useResize';
import Image from 'next/image';
import LogoScroll from './logoScroll';


export default function Navbar({data}:any){
    const page = usePathname();
    const {winX, winY, mobile} = useResize()
    const [active, setActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [end, setEnd] = useState(false)
  
console.log(page)

    return(
     <ReactLenis root>
     

      <div className={`pointer-events-none w-[100vw] h-[100dvh] flex justify-between fixed top-0  px-[--xs] lg:px-[--sm] uppercase text-[--purple]  overflow-hidden`} style={{zIndex: `${(page =="/" || page == "/shows")?"100":"10"}`}}>
          <LogoScroll />
          </div>
        
          <div className={`w-full flex justify-between fixed bottom-0 px-[--xs] lg:px-[--sm]  uppercase text-[--purple] z-[100] ${page !=="/"?"bgActive":""} ${page.includes("show")?"invertBG":""}`} >
            <Link href={`/ideas`}><div className={`py-[--xs] lg:py-0 navBut ${page.includes('ideas')?"active":""}`}>ideas</div></Link>
            <Link href={`/shows`}><div className={`navBut py-[--xs] lg:py-0 ${page.includes('shows')?"active":""}`}>shows</div></Link>
            <Link href={`/recordings`}><div className={`navBut py-[--xs] lg:py-0 ${page.includes('recordings')?"active":""}`}>recordings</div></Link>
            <Link href={`/info`}><div className={`navBut py-[--xs] lg:py-0 ${page.includes('info')?"active":""}`}>info</div></Link>
          </div>
      </ReactLenis>
        
    
    );
}