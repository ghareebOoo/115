"use client"
import Image from 'next/image'
import React, { useEffect, useMemo, useRef} from 'react'
import image from "../../public/assets/about/img.png"
import shape from "../../public/assets/about/shape-1.svg"
import RotateAnimation from './RotateAnimation'
import {motion} from "framer-motion"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

type props = {
  letters: string[]
  delay: number
}


export const AnimateText = ({ letters, delay }: props) => {
  const refWord = useRef<HTMLSpanElement[]>([]);
  const refHead = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.from(refWord.current, {
      scrollTrigger: {
        trigger: refHead.current,
        toggleActions: "restart none restart none",
      },
      opacity: 0,
      duration: 2,
      stagger: 0.3,
      delay: delay,
    });

    return () => {
      if (animation) animation.kill();
    };
  }, [letters, delay]);

  
  refWord.current = [];

  return (
    <h2
      ref={refHead}
      className="text-xl text-primary font-medium flex items-center"
    >
      {letters?.map((item, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) refWord.current[index] = el;
          }}
          className="inline-block"
        >
          {item}
        </span>
      ))}
    </h2>
  );
};

export default function About() {
  const text = "My Name is Noah"
  const one = useMemo(() => text.slice(0, 2).split(""), []);
  const two = useMemo(() => text.slice(2, 7).split(""), []);
  const three = useMemo(() => text.slice(7, 10).split(""), []);
  const four = useMemo(() => text.slice(10).split(""), []);

  return (
    <div className='p-8 w-full' id="about">
      <div className='w-full flex gap-5 justify-between items-center'>
        <div className='max-w-[30%] relative hidden xl:flex'>
          <div className='w-40 h-40 bg-accent absolute left-0 -top-5 -z-10'></div>
          <div className='ml-5 rounded-tl-[8px] rounded-tr-[110px] w-full bg-[#e5f8f6] h-[500px] flex items-end justify-center'>
            <Image className='' src={image} alt='image' width={300} height={300}/>
          </div>
          <motion.div className='absolute top-[50%] -right-30 flex justify-center items-center'>
            <RotateAnimation direction="left" duration={10} content={ <Image src={shape} width={180} height={180} alt='image' /> } />
            <div className='absolute text-center'>
              <span className='text-white text-xl font-bold'>10+</span>
              <h2 className='text-base font-medium text-white'>Years ofExperience</h2>
            </div>
          </motion.div>
        </div>
        <div className='w-full xl:max-w-[65%] m-auto flex flex-col justify-center items-center text-center xl:text-left'>
          <div>
            <div className='flex items-center gap-1 justify-center xl:justify-start'>
              <AnimateText letters={one} delay={0}/>
              <AnimateText letters={two} delay={1}/>
              <AnimateText letters={three} delay={2}/>
              <AnimateText letters={four} delay={3}/>
            </div>
            <h3 className='text-lg mt-2'>FrontEnd Developer & Desinger</h3>
            <p className='max-w-[600px] mx-auto xl:mx-0 mt-8'>I create visullay stunning and functional websites using modern frontend technologies and design principles. Explore my work to see how combine creativity with technicla skill to deliver exceptional digital experiences.</p>
          </div>
          <div className='mt-5 w-full flex flex-col md:flex-row items-center justify-center gap-5'>
            <div className='flex flex-col items-center gap-1'>
              <h4 className='font-bold text-xl text-primary'>Age</h4>
              <p>30 years</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h4 className='font-bold text-xl text-primary'>Born in</h4> 
              <p>New Yourk, USA</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h4 className='font-bold text-xl text-primary'>Phone</h4> 
              <p>+123-456-789</p> 
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h4 className='font-bold text-xl text-primary'>Phone</h4> 
              <p>+123-456-789</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h4 className='font-bold text-xl text-primary'>Email</h4> 
              <p>email@email.com</p> 
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}
