import React from 'react'
import myIcon from "../../public/assets/journey/shape.svg"
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { ReactElement } from 'react'
type props = {
  type: string
  logoUrl?:  StaticImageData 
  position?: string
  duration: string
  description: string
  company?: string
  institution?: string
  qualification?: string
  name?: string
  icon?: ReactElement
}
export default function TabsData({type, logoUrl, position, duration, description, company,
  institution, qualification, name, icon }:props) {
  return (
    <div className='top-12 h-[350px] sticky w-full border-2 border-accent bg-accent rounded-md'>
        <div className='bg-white h-[100px]'>
            <div className='w-[90%] mx-auto flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-2 xl:gap-0 pt-5'>
                <h2 className='text-lg font-semibold text-primary flex items-center gap-2'><Image src={myIcon} width={20} height={20} alt='image' />{type === "experience" ? position : type === "education" ? qualification : duration}</h2>
                <p className='text-base'>{type === "experience" || type === "education" ? duration: ""}</p>
            </div>
        </div>
        <div className='w-full mt-8'>
           <div className='w-[90%] mx-auto flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-4 xl:gap-10'>
         <div className='text-5xl w-[200px] flex justify-center items-center'>
            {type === "skill" && icon ? ( icon) : logoUrl ? (<Image src={logoUrl} alt="Logo" width={150} height={150} />) : null}</div>
            <div className='flex flex-col gap-5 boredr-0 xl:border-l-2 border-secondary/15 xl:pl-12'>
              <h3 className='font-bold text-xl hidden xl:block'>{type === "experience" ? company : type === "education" ? institution : name}</h3>
              <p className=' text-base font-medium max-w-[550px] text-center xl:text-left'>{description}</p>
            </div>
           </div>
        </div>
    </div>
  )
}

 