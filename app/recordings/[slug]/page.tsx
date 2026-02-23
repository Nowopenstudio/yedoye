import { PortableText } from "next-sanity";
import { getData, getDate } from "../../util/sanity";
import React from "react";
import ShowScroll from "./progressBar";
import GalleryScroll from "./galleryScroll";
import Idea from "./recordings";
import Recordings from "./recordings";




export default async function Home({params}:any) {
   const {slug} = await params
  const query = await getData(`{
    'data':*[_type=='recordings' && slug.current=="${slug}"][0]{title,copy, "slug":slug.current,cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},content[]{content,text,"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},info,credits,donation}
 }`)

 const {data} = query.data  
  return (

  
 <Recordings data={data}/>

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


