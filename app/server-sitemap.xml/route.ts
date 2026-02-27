import { getServerSideSitemap } from 'next-sitemap'
import { getData } from '../util/sanity'


export async function GET(request: Request) {
 const query = await getData(`{
    'ideas':*[_type=='ideas'] |  order(publish desc){"slug":slug.current},
    'recordings':*[_type=='recordings'] |  order(publish desc){"slug":slug.current},
    'shows':*[_type=='shows'] |  order(publish desc){"slug":slug.current},

    }`)
 const {ideas,recordings,shows} = query.data 
 const sitemap:any[] = [] 
 const first= ideas.map((item:any,i:number)=>{
   
    sitemap.push({
      loc: `https://www.yedoye.live/ideas/${item.slug}`,
      lastmod: new Date().toISOString(),
    })
 })
 const second= recordings.map((item:any,i:number)=>{
    sitemap.push({
      loc: `https://www.yedoye.live/recordings/${item.slug}`,
      lastmod: new Date().toISOString(),
    })
 })
 const third= shows.map((item:any,i:number)=>{
   sitemap.push({
      loc: `https://www.yedoye.live/shows/${item.slug}`,
      lastmod: new Date().toISOString(),
    })
 })
 

  return getServerSideSitemap(sitemap)
}