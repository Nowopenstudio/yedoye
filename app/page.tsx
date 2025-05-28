import { PortableText } from "next-sanity";
import { getData } from "./util/sanity";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MuxVideoBG } from "./util/muxPlayer";


export default async function Home() {
  const query = await getData(`{
    'data':*[_type=='home'][0]{cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}},

    }`)
 const {data} = query.data  
 console.log(data)
  return (

  
  <React.Fragment>
    
          <div className="homeCover w-[100vw] h-[100dvh] relative z-[0]">
              {data.cover.vid?(
               <div className="h-full w-full bgMux noControl z-0"> <MuxVideoBG playbackId={data.cover.vid} title={`Home Video`} ratio={data.cover.ratio}/></div>
                ):(                    <Image alt="image" height={0}  width={0} sizes="100vw" src={data.cover.image} className={`z-[0] fadeOn w-full h-full object-cover `}/>
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


