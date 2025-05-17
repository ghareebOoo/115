import Image from 'next/image'
import React from 'react'
import {FiArrowRight} from "react-icons/fi"
import { StaticImageData } from 'next/image'
type props = {
    category: string
    img: StaticImageData
    title:  string
}

export default function WorksData({category , img , title}:props) {
  return (
<>
    <div className='relative'>
        <div className=''>
            <Image src={img} width={500} height={500} alt='image' className='rounded-2xl'/>
        </div>
        <h2 className='absolute top-5 left-5 text-white bg-primary font-bold text-base px-5 py-2 rounded-xl'>{category}</h2>
    </div>
    <div className='flex items-center justify-between mt-5'>
        <h3 className='text-primary font-black text-base'>{title}</h3>
        <div className='cursor-pointer w-10 h-10 rounded-full bg-accent text-white flex justify-center items-center rotate-[-45deg] hover:rotate-0 transition-all duration-500'>
            <FiArrowRight className='text-2xl'/>
        </div>
    </div>
</>
  )
}
