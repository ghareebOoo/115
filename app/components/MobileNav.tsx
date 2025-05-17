"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import {FiMapPin , FiPhoneCall , FiMail} from "react-icons/fi"
import {FaFacebook , FaTwitter , FaLinkedin} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"
import gsap from 'gsap'
import { Link as ScrollLink } from "react-scroll"
import Link from 'next/link'
export default function MobileNav() {
        
        
    const links = useMemo(()=> [
        {    
            id: 1,
            label: "Home",
            name: "home"
        },
        {    
            id: 2,
            label: "About",
            name: "about"
        },
        {    
            id: 3,
            label: "Journey",
            name: "journey"
        },
        {    
            id: 4,
            label: "Work",
            name: "work"
        },
        {    
            id: 5,
            label: "Contact",
            name: "contact"
        },
    ] ,[])


    const socials = useMemo(()=> 
    [
    {
        icon: <RiInstagramFill />,
        path: "",
    },
    {
        icon: <FaFacebook />,
        path: "",
    },
    {
        icon: <FaTwitter />,
        path: "",
    },
    {
        icon: <FaLinkedin />,
        path: "",
    },
    ]
    ,[])


    const [show, setShow] = useState(false)
    const [mob, setMob] = useState(false)

    const refMenu = useRef<HTMLDivElement | null>(null)
    const refDiv = useRef<HTMLDivElement | null>(null)
    const refSocial = useRef<HTMLDivElement[] | null>([])
    const refLink = useRef<HTMLDivElement[] | null>([])

    useEffect(() => {
        let animation: gsap.core.Tween |  undefined
       if(show){
            animation = gsap.from(refMenu.current , {
            opacity: 0,
            duration: 1,
            y: 100
        })

         return () =>{ if(animation) animation.kill()}
       }
       
    }, [show])

    
    useEffect(() => {
        let animation: gsap.core.Tween |  undefined
       if(mob ){
            animation = gsap.from(refDiv.current, {
            opacity: 0,
            duration: 1,
            y: 100
        })

         return () =>{ if(animation) animation.kill()}
       }
       
    }, [mob])


    useEffect(()=>{
        let animation: gsap.core.Tween |  undefined
          if(show && mob ){
            animation = gsap.from(refSocial.current, {
            opacity: 0,
            duration: 1,
            y: 100,
            stagger: 0.3
        })

         return () =>{ if(animation) animation.kill()}
       }
       
    },[show , mob])

useEffect(() => {
  let animation: gsap.core.Tween | undefined;

  if (show && mob) {
    animation = gsap.from(refLink.current, {
      opacity: 0,
      duration: 1,
      x: -100,
      stagger: 0.3,
    })
  }

  return () => {
    if (animation) animation.kill();
  };
}, [show, mob])


  

    const handelMob = () => {
        setMob(prev => !prev)
    }

    useEffect(() => {
        const handleShow = () => {
            if (window.scrollY > 200) {
                setShow(true)
            } else {
                setShow(false)
            }
        }

        window.addEventListener("scroll", handleShow)

        return () => window.removeEventListener("scroll", handleShow)
    }, [])

    return (
        <div className='flex xl:hidden'>
            {show && (
                <div
                    ref={refMenu}
                    onClick={handelMob}
                    className='mt-36 fixed z-50 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white bg-primary cursor-pointer'
                >
                    <CgMenuGridR className='w-10 h-10' />
                </div>
            )}
            {show && mob && (
                <div ref={refDiv} className='flex fixed z-40 rounded-xl top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[95%] h-[400px] bg-white shadow-2xl'>
                    <div className='h-full flex flex-col justify-center w-fit'>
                        <div className='h-auto flex flex-col justify-center items-center w-[280px] md:w-auto gap-5 ml-0 md:ml-10 border-r-0 pr-0 md:border-r-2 md:pr-4'>
                        {links.map((link , index)=>{
                            return <div key={index} ref={(el)=>{ if(el && refLink.current) refLink.current[index] = el }}>
                                <ScrollLink className="cursor-pointer text-[18px]" to={link.name} duration={200} spy smooth activeClass='active'>{link.label}</ScrollLink>
                            </div>
                            
                        })}
                        </div>
                    </div>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
                        <div className='hidden md:flex w-[75%] items-center justify-between gap-5'>
                            <div className='flex flex-col gap-2'>
                                <FiMapPin className='text-accent w-10 h-10'/>
                                <h2 className='font-semibold text-primary text-lg'>Location</h2>
                                <p className='text-gray-600 font-normal text-base'>New York, USA</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <FiPhoneCall className='text-accent w-10 h-10'/>
                                 <h2 className='font-semibold text-primary text-lg'>Phone</h2>
                                 <p className='text-gray-600 font-normal text-base'>+123 456 789</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <FiMail className='text-accent w-10 h-10'/>
                                 <h2 className='font-semibold text-primary text-lg'>Enail</h2>
                                 <p className='text-gray-600 font-normal text-base'>youremail@gmail.com</p>
                            </div>
                        </div>
                        <div className='hidden md:flex w-[75%] items-center justify-center gap-5'>
                            {socials.map((item , index)=>{
                                return <div key={index} ref={(el)=>{ if(el && refSocial.current) refSocial.current[index] = el }}>
                                     <Link className='text-3xl' href={item.path} key={index}>{item.icon}</Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
