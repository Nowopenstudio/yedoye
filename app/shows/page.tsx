
import { getData, getDate } from "../util/sanity";
import React from "react";
import LinkScroll from "./linkScroll";
import { MuxVideoBG } from "../util/muxPlayer";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const query = await getData(`{
    'data':*[_type=='shows']| order(orderRank){cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},  bg{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},title, "slug":slug.current, info },
    'home':*[_type=='home'][0]{cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}}
    }`)

 const {data,home} = query.data  
  return (

  
  <React.Fragment>
    <div className="min-h-[100svh] w-[100vw] relative">
       <div className="w-[100vw] bottom-[80px] absolute showHold">
          {data.map((item:any,i:number)=>{
            return(
              <div key={`show-${i}`} className="singleShow w-full grid grid-cols-12 uppercase items-center">
                <Link href={`/shows/${item.slug}`} className="date col-span-3 py-[--xs] px-[--sm] text-center"><h3>{`${getDate(item.info.date)} @ ${item.info.timeStart}`}</h3></Link>
                <Link href={`/shows/${item.slug}`} className="title col-span-6 py-[--xs] px-[--sm] text-center"><h3>{item.title}</h3></Link>
                <div className="cta col-span-3 py-[--xs] overflow-hidden"><LinkScroll data={item.info} time={Math.floor(Math.random() * 6)+3}/></div>
  
              </div>
            )
          })}
       </div>

    </div>
     <div className="homeCover w-[100vw] h-[100dvh] absolute z-[-1] top-0 left-0">
                  {home.cover.vid?(
                   <div className="h-full w-full bgMux noControl z-0"> <MuxVideoBG playbackId={home.cover.vid} title={`Home Video`} ratio={home.cover.ratio}/></div>
                    ):(                    <Image alt="image" height={0}  width={0} sizes="100vw" src={home.cover.image} className={`z-[0] fadeOn w-full h-full object-cover `}/>
                    )}
    </div>
         



          



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


