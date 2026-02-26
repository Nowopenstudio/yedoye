
import { getData, getDate, getDateLong } from "../util/sanity";
import React from "react";
import { MuxVideoBG } from "../util/muxPlayer";
import Image from "next/image";
import Link from "next/link";
import Single from "./single";
import ScrollUp from "../util/misc";


export default async function Home() {
  const query = await getData(`{
    'data':*[_type=='ideas']| order(orderRank){_createdAt, cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},  bg{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},title, "slug":slug.current, info }
    }`)

 const {data} = query.data  
  return (

  
  <React.Fragment>
    <div className="min-h-[100svh] w-[100vw] relative pt-[--med]">
      {/* substack */}
       <div className="w-[100vw] grid  grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 text-purple bg-[--black] text-[--purple]  pb-[58px] md:pb-[88px] lg:pb-[48px] xl:pb-[80px]  pointer-events-auto">
          {data.map((item:any,i:number)=>{
            return(
            <Single key={`idea-${item.slug}`}data={item} count={i}/>
            )
          })}
       </div>

    </div>
  



          

    <ScrollUp />

  </React.Fragment>

  );
}


// export async function generateMetadata() {
//   const query = await getData(`{
//     'data':*[_type=='home'][0]{meta{title,description,keywords,"image":image.asset->url}}
//  }`)
//  const {data} = query.data  
//   return {
//     title: `${data.meta.title}`,
//     keywords: `${data.meta.keywords}`,
//     description:`${data.meta.description}`,
//     openGraph: {
//       images: data.meta.image
//     }
//   };
// }


