"use client"
import React, { useMemo } from 'react'
import imageOne from "../../public/assets/services/icon-1.svg"
import imageTwo from "../../public/assets/services/icon-2.svg"
import imageThree from "../../public/assets/services/icon-3.svg"
import imageFour from "../../public/assets/services/icon-4.svg"
import Image from 'next/image'

export default function Services() {
    const dataServices = useMemo(()=>
    [
    {
        image: imageOne,
        head: "UI UX Design",
        para: "Designing compelling engaging user experiences."
    },
    {
        image: imageTwo,
        head: "Web Development",
        para: "Developing robuts, scalable websites for all devices."
    },
    {
        image: imageThree,
        head: "E-commerce Solutions",
        para: "Building secure, user-friendly online stores to drive sales."
    },
    {
        image: imageFour,
        head: "Care & Support",
        para: "Providing updates, security and support for performance."
    },
],[])
  return (
    <div className='p-8 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 relative z-30'>
     
            {dataServices.map((item , index)=>{
                return <div key={index} className='shadow-2xl flex flex-col gap-2 rounded-xl p-5'>
                    <Image src={item.image} alt='image' width={50} height={50} />
                    <h2 className='text-xl font-bold text-primary'>{item.head}</h2>
                    <p className='text-base font-medium'>{item.para}</p>
                </div>
            })}
    </div>
  )
}
