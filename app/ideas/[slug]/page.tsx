import { PortableText } from "next-sanity";
import { getData, getDate } from "../../util/sanity";
import React from "react";
import ShowScroll from "./progressBar";
import GalleryScroll from "./galleryScroll";
import Idea from "./idea";




export default async function Home({params}:any) {
   const {slug} = await params
  const query = await getData(`{
    'data':*[_type=='ideas' && slug.current=="${slug}"][0]{_createdAt,cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},title, "slug":slug.current,content[]{content,embed,text,"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}}
 }`)

 const {data} = query.data  
  return (

  
 <Idea data={data}/>

  );
}


export async function generateMetadata({ params }: any) {
  const { slug } = await params
  const query = await getData(`{
    'data':*[_type=='ideas' && slug.current=="${slug}"][0]{title,cover{"image":image.asset->url}}
    ,'home':*[_type=='info'][0]{meta{title,description,keywords,"image":image.asset->url}}
 }`)
 const {data,home} = query.data  
 if(data){
  return {
    title: `${data.title}`,
    description:home.meta.description,
    keywords:home.meta.keywords,
    openGraph: {
      images: data.cover&&data.cover.image?`${data.cover.image}?auto=format&amp;w=1200`:`${home.meta.image}?auto=format&amp;w=1200`,
      url:`/ideas/${slug}`,
      type:'website',
    },
    twitter:{
      card: "summary_large_image",
      site:`@yedoye_`,
      
    },
       alternates: {
        canonical: `/ideas/${slug}`,
      }
    };
  }

}



