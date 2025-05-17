"use client"
import React, { useMemo } from 'react'
import { AnimateText } from './About';
import myImage from "../../public/assets/contact/img.png"
import Image from 'next/image';

export default function Contact() {
    const text = "Let's work together"
    const one = useMemo(() => text.slice(0, 5).split(""), []);
    const two = useMemo(() => text.slice(5, 10).split(""), []);
    const three = useMemo(() => text.slice(10).split(""), []);
  return (
    <div className='w-full p-8' id="contact">
      <div className='flex gap-5 items-center lg:items-stretch justify-center lg:justify-between flex-col lg:flex-row'>

        <div className='lg:max-w-[40%] w-full'>
          <div className='flex justify-start items-center gap-1'>
            <AnimateText letters={one} delay={0}/>
            <AnimateText letters={two} delay={1}/>
            <AnimateText letters={three} delay={2.5}/>
          </div>
          <form className='mt-5'>
            <div className='flex items-center gap-5 w-full'>
            <div className='w-full'>
              <label htmlFor='firstName'>First Name<span className="text-accent">*</span></label>
              <input id='firstName' type='text' placeholder='First Name' className='w-full h-[50px] border-2 border-gray-500 rounded-md mt-1 px-4 outline-accent'/>
            </div>
            <div className='w-full'>
              <label htmlFor='lastName'>Last Name<span className="text-accent">*</span></label>
              <input id='lastName' type='text' placeholder='First Name' className='w-full h-[50px] border-2 border-gray-500 rounded-md mt-1 px-4 outline-accent'/>
            </div>
            </div>
            <div className='mt-6'>
              <label htmlFor='enail'>Enail<span className="text-accent">*</span></label>
              <input id='enail' type='email' placeholder='YourEmail@email.com' className='w-full h-[50px] border-2 border-gray-500 rounded-md mt-1 px-4 outline-accent'/>
            </div>
            <div className='mt-6'>
              <label htmlFor='phone'>Phone<span className="text-accent">*</span></label>
              <input id='phone' type='tel' placeholder='+1 (555) 000-0000' className='w-full h-[50px] border-2 border-gray-500 rounded-md mt-1 px-4 outline-accent'/>
            </div>
            <div className='mt-6'>
              <label>Message<span className="text-accent">*</span></label>
              <textarea placeholder='Leave me a message...' className='w-full h-[200px] border-2 border-gray-500 rounded-md mt-1 p-4 outline-accent'></textarea>
            </div>
            <button className='w-full h-[50px] bg-accent text-white rounded-md mt-6'>Send a message</button>
          </form>
        </div>
        <div className='rounded-md overflow-hidden w-full lg:max-w-[50%] lg:h-[662px] flex'>
          <Image src={myImage}  width={500} height={500} alt='image' className='w-full'/>
        </div>
      </div>
    </div>
  )
}
