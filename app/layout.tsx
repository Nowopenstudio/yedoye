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
//   const query = await getData(`{
//     'data':*[_type=='settings'][0]{links,"topLeft":topLeft.asset->url,"topRight":topRight.asset->url,"bot":bottom.asset->url}
//  }`)
//  const {data} = query.data

  return (
    <html lang="en">
  
        <body className="bg-[--black]">
        <Navbar/>
          {children}
          </body>
    
    </html>
  );
}
