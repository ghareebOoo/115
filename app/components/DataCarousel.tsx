"use client"
import React, { useMemo, useState } from 'react'
import { AnimateText } from './About';
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation , Autoplay  } from "swiper/modules";
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';

export default function DataCarousel() {

 const slides = useMemo(() => [
  {
    img: "/assets/testimonial/img-1.png",
    name: "Emma Johnson",
    message:
      "The services was fantastic! Highly recommend it to anyone looking for top noth design.",
  },
  {
    img: "/assets/testimonial/img-2.png",
    name: "Sophia Martinezs",
    message:
      "I couldn't be happier with the results. the website is both beutiful and functional!",
  },
  {
    img: "/assets/testimonial/img-3.png",
    name: "James Smith",
    message:
      "Excellent work! the project was handled professionally from start to finish!",
  },
  {
    img: "/assets/testimonial/img-4.png",
    name: "Olivia Williams",
    message:
      "Everything was deliverd on time, and the design exceeded my exepectations.",
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Isabella Brown",
    message:
      "Amazing atention to detail. My site looks professional and user-friendly.",
  },
  {
    img: "/assets/testimonial/img-6.png",
    name: "Liam Davis",
    message:
      "The team truly understood my needs. my website is faster and looks great!",
  },
], []);

  const text = "What clients say"
  const one = useMemo(() => text.slice(0, 4).split(""), []);
  const two = useMemo(() => text.slice(4, 12).split(""), []);
  const three = useMemo(() => text.slice(12).split(""), []);


  const [activeSlide , setActiveSlide] = useState(0)

  const changeSlide = (swiper:SwiperType)=>{
    const active = swiper.realIndex
    setActiveSlide(active)
  }
  return (
    <div className='w-full p-8'>
        <div className='flex justify-center items-center gap-1'>
            <AnimateText letters={one} delay={0}/>
            <AnimateText letters={two} delay={1}/>
            <AnimateText letters={three} delay={3.5}/>
        </div>
        <div className='w-full flex mt-8 flex-col xl:flex-row justify-center items-center gap-5'>
            <div className='xl:max-w-[30%] w-full'>
                <div>
                    <ImQuotesLeft  className='text-9xl text-accent'/>
                </div>
                {slides[activeSlide] && (
                <>
                <h2 className='text-primary text-xl font-bold'>{slides[activeSlide].name}</h2>
                <p className='text-base font-medium'>{slides[activeSlide].message}</p>
                </>)}
                <div className='mt-5 flex items-center gap-5'>
                    <div className='btnLeft w-14 h-14 rounded-full bg-accent text-white flex justify-center items-center'>
                        <FiArrowLeft className='text-2xl' />
                    </div>
                    <div className='btnRight w-14 h-14 rounded-full bg-accent text-white flex justify-center items-center'>
                        <FiArrowRight className='text-2xl' />
                    </div>
                </div>
            </div>
            <div className='xl:max-w-[65%] w-full'>
                <Swiper
                modules={[Navigation , Autoplay]}
                  autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                 navigation={{
                    nextEl:".btnLeft",
                    prevEl:".btnRight",
                 }}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{ 640: { slidesPerView: 1 },768: { slidesPerView: 2 }, 
                  1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 }, }}
                  onSlideChange={changeSlide}
                  className='w-full h-[400px] xl:h-[500px]'
              >
                    {slides.map((item , index)=> {
                      return <SwiperSlide key={index} className='h-full select-none'>
                        <div className='w-full h-full flex items-end'>
                          <div className={`${activeSlide === index ? "h-full" : "h-[250px]"} flex items-end rounded-2xl overflow-hidden transition-all duration-500 relative w-full`}>
                            <Image src={item.img} alt='image'  width={500} height={200} className='w-full h-full object-cover object-center'/>
                          </div>
                        </div>
                      </SwiperSlide>
                       })}
                </Swiper>
            </div>
        </div>
    </div>
  )
}
