
import { getData, getDate, getDateLong } from "../util/sanity";
import React from "react";
import { MuxVideoBG } from "../util/muxPlayer";
import Image from "next/image";
import Link from "next/link";
import Single from "./single";
import Scroller from "./scroller";


export default async function Home() {
  const query = await getData(`{
    'data':*[_type=='recordings']| order(orderRank){cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},title, "slug":slug.current, info }
    }`)

 const {data} = query.data  
  return (

  
  <Scroller data={data}/>

  );
}


export async function generateMetadata() {
  const query = await getData(`{
    'data':*[_type=='info'][0]{meta{title,description,keywords,"image":image.asset->url}}
 }`)
 const {data} = query.data  
  return {
    title: `Recordings - ${data.meta.title}`,
    keywords: `${data.meta.keywords}`,
    description:`${data.meta.description}`,
    openGraph: {
      images: `${data.meta.image}?auto=format&amp;w=1200`,
      url:`/recordings`,
      type:'website',
    },
    twitter:{
      site:`@yedoye_`,
      card: "summary_large_image"
    },
    alternates: {
        canonical: '/recordings',
      }
  };
}
