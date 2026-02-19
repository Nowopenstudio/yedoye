import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { getData } from "./util/sanity";




export const metadata: Metadata = {
  title: "Yedoye",
  description: "First run",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const query = await getData(`{
    'data':*[_type=='home'][0]{cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}},

    }`)
 const {data} = query.data  

  return (
    <html lang="en">
  
        <body className="bg-[--black]">
        <Navbar data={data}/>
          {children}
          </body>
    
    </html>
  );
}
