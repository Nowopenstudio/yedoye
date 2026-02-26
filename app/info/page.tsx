import { PortableText } from "next-sanity";
import { getData } from "../util/sanity";
import React from "react";
import CTAScroll from "./ctaScroll";
import GalleryScroll from "../components/galleryScroll";
import LinkScroll from "./linkScroll";
import ScrollUp from "../util/misc";


export default async function Home() {
  const query = await getData(`{
    'data':*[_type=='info'][0]{name,titles, location, bio, links,cv, media[]{"image":image.asset->url, "vid":vid.asset->playbackId, "ratio":vid.asset->data.aspect_ratio}}
    }`)

 const {data} = query.data  
  return (

  
  <React.Fragment>
    
         <div className="w-[100vw] grid grid-cols-12 text-[--black] bg-purple pt-[--start] items-start  flex-end mt-[40px] pointer-events-auto">
              <a href={`mailto:${data.links[0].link}`}><div className="relative bg-[--black] w-[100vw] overflow-hidden h-[80px] flex items-center"><CTAScroll  color={'purple'} time={12} cta={['Book Yedoye', 'contact Yedoye']}/></div></a>
          </div>
          <div className="fixed bottom-[58px] md:bottom-[88px] lg:bottom-[48px] xl:bottom-[80px]  z-[100] w-[100vw] overflow-hidden h-[80px] left-0 bg-black flex items-center  pointer-events-auto">
            <LinkScroll  color={'purple'} time={18} data={data.links}/>
          </div>
          <div className="scrollImages bg-[--black] w-[100vw] overflow-hidden pointer-events-auto">
              <GalleryScroll data={data.media} time={10}/>
          </div>

          {/* bio */}
          <div className="info-bio w-full grid grid-cols-12 px-0 md:px-[--sm] gap-[--sm] bg-[--purple] text-[--black] py-[--sm] md:py-[--med] pointer-events-auto">
            <div className="col-span-full px-[--sm] xl:px-0 md:col-span-10 xl:col-span-6 xl:col-start-4 2xl:col-start-1 2xl:col-span-4">
              <h2 className="uppercase">{data.name}</h2>
              <p  className="uppercase footnote">{data.titles}<br/>{data.location}</p>
            </div>
            <div className="richText Bio col-span-full px-[--sm] xl:px-0 xl:col-span-8 xl:col-start-4 2xl:col-start-5">
              <PortableText value={data.bio}/>
            </div>
          </div>

          {/* credits */}
          <div className="info-bio w-full grid grid-cols-12 px-[--sm] gap-[--sm] bg-[--purple] text-[--black] pt-[--sm] md:pt-[--lrg] pb-[--lrg]">
             <div className="col-span-4 mb-[--med] md:mb-0"><p  className="uppercase footnote">Credits</p></div>
             <div className="col-span-full px-[0] md:px-[--sm] xl:px-0 xl:col-span-8 xl:col-start-4 2xl:col-start-5">
                {data.cv.map((item:any,i:number)=>{
                  return(
                    <div key={`cv-${item.title}-${i}`} className="w-full mb-[--med] md:mb-[--lrg]">
                      <p  className="uppercase footnote w-full">{item.title}</p>
                      <div className="cat-hold w-full">
                          {item.items.map((single:any,s:number)=>{
                            return(
                              <div className="uppercase w-full flex justify-between py-[--xs] md:py-[--sm] border-b border-[--black]  flex-wrap" key={`${s}-list-${item.title}`}>
                                <div className="flex justify-between w-full">
                                  <h3 >{single.title}</h3><h3>{single.medium}</h3>
                                </div>
                                <div className="footnote w-full flex-shrink-0"><p className="footnote">{single.year}{single.sub?`, ${single.sub}`:''}</p></div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                    
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


