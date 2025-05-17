"use client"
import React, {useLayoutEffect, useMemo, useRef, useState } from 'react'
import imageOne from "../../public/assets/work/thumb-1.png"
import imageTwo from "../../public/assets/work/thumb-2.png"
import imageThree from "../../public/assets/work/thumb-3.png"
import imageFour from "../../public/assets/work/thumb-4.png"
import imageFive from "../../public/assets/work/thumb-5.png"
import imageSix from "../../public/assets/work/thumb-6.png"
import imageSeven from "../../public/assets/work/thumb-7.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimateText } from './About';
import WorksData from './WorksData'
import gsap from 'gsap'



export default function Work() {

  const data = useMemo(()=> 
  [

  {
    category: "design",
    img: imageOne,
    title: "Luminex UI Kit",
  },

  {
    category: "design",
    img: imageTwo,
    title: "Nebula Dashboard",
  },

  {
    category: "frontend",
    img: imageThree,
    title: "Velox App",
  },

  {
    category: "frontend",
    img: imageFour,
    title: "Quantum Portfolio",
  },

  {
    category: "frontend",
    img: imageFive,
    title: "Synergy App UI",
  },

  {
    category: "fullstack",
    img: imageSix,
    title: "Applo Travel Platform",
  },

  {
    category: "fullstack",
    img: imageSeven,
    title: "Horizon Saas Dashboard",
  }
],[])

  const imgRef = useRef<HTMLDivElement[] | []>([])
  const divRef = useRef<HTMLDivElement |null>(null)

  const [tabValue , setTabValue] = useState("all")
  const [dataLength , setDataLength] = useState(6)

useLayoutEffect(() => {
 const timeout = setTimeout(() => {
      const animation = gsap.context(() => {
        if (imgRef.current.length > 0) {
          gsap.from(imgRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          });
        }
      });

      return () => animation.revert()
    }, 0); 

    return () => clearTimeout(timeout);
}, [tabValue, dataLength]); 

  const text = "My Latest Work"
  const one = useMemo(() => text.slice(0, 2).split(""), []);
  const two = useMemo(() => text.slice(2, 9).split(""), []);
  const three = useMemo(() => text.slice(9).split(""), []);

 
  const [show , setShow] = useState(true)

  const filterData = tabValue === "all" ? data.filter((item)=> item.category !=="all") : data.filter((item)=> item.category === tabValue)
  return (
    <div className='w-full p-8' id="work">
      <Tabs defaultValue="all" className="w-full">
        <div className='flex flex-col md:flex-row gap-16 justify-between items-center'>
          <div className='flex justify-center items-center gap-1'>
            <AnimateText letters={one} delay={0}/>
            <AnimateText letters={two} delay={0.5}/>
            <AnimateText letters={three} delay={2.5}/>
          </div>
          <TabsList className='relative z-50 bg-white flex flex-col w-full md:flex-row items-center justify-center md:border-2 md:border-accent md:w-[350px] md:py-5 md:rounded-xl'>
            <TabsTrigger className='text-base cursor-pointer' onClick={()=> setTabValue("all")} value="all">All</TabsTrigger>
            <TabsTrigger className='text-base cursor-pointer' onClick={()=> setTabValue("design")}  value="design">Design</TabsTrigger>
            <TabsTrigger className='text-base cursor-pointer' onClick={()=> setTabValue("frontend")}  value="frontend">Frontend</TabsTrigger>
            <TabsTrigger className='text-base cursor-pointer' onClick={()=> setTabValue("fullstack")} value="fullstack">Fullstack</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value={tabValue}>
        <div ref={divRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
          {(()=>{ imgRef.current = []; return filterData.slice(0, dataLength).map((item, index) =>(
            <div key={index} ref={(el)=> {if(el && imgRef.current) imgRef.current[index]=el}}>
            <WorksData {...item} />
            </div>
          ))})()}
        </div>

        </TabsContent>
        {filterData.length >= 6 &&  <div onClick={()=>{
          setDataLength((prev)=> prev+2)
          setShow(false)
        }} className={`${show ? "flex justify-center mt-12" : "hidden"} `}>
          <button className='inline-block text-white text-xl bg-accent rounded-xl px-7 py-2'>Load more</button>
        </div>}
      </Tabs>
    </div>
  )
}
