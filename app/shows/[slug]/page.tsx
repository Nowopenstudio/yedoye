import { PortableText } from "next-sanity";
import { getData, getDate } from "../../util/sanity";
import React from "react";
import ShowScroll from "./showScroll";
import GalleryScroll from "./galleryScroll";




export default async function Home({params}:any) {
   const {slug} = await params
  const query = await getData(`{
    'data':*[_type=='shows' && slug.current=="${slug}"][0]{cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},  bg{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},title, "slug":slug.current, info,description }
 }`)

 const {data} = query.data  
  return (

  
  <React.Fragment>
         
         <div className="w-[100vw] min-h-[100svh]  bg-[--purple] text-[--black] mt-[40px] relative">
            <div className="scrollImages  w-full overflow-hidden">
              <GalleryScroll data={data.cover.image} time={12}/>
          </div>
           {/* bio */}
          <div className="info-bio col-span-full grid grid-cols-12 px-[--sm] gap-[--sm] bg-[--purple] text-[--black] py-[--med]">
            <div className="col-span-3  uppercase ">
              <h1 className="mb-[--sm]">{getDate(data.info.date)}</h1>
              <p className="whitespace-pre-wrap">{`${data.info.timeStart}${data.info.timeStop?` - ${data.info.timeStop}`:''}`}<br/>{data.info.location}</p>
              
            </div>
            <div className="richText Bio col-span-6 richText">
              <h1 className="uppercase mb-[--sm]">{data.title}</h1>
              <PortableText value={data.description}/>
            </div>
          </div>
          
        </div>

          <a href={data.info.url} target="_blank"><div className="fixed bottom-[80px] bg-[--white] w-[100vw]  overflow-hidden h-[80px] z-[100]"><ShowScroll   data={data.info} time={Math.floor(Math.random() * 6)+3}/></div></a>
      

    


         
      

      
          




          



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


