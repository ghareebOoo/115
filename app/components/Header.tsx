"use client"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { Link as ScrollLink } from "react-scroll"
import { TypeAnimation } from "react-type-animation"
import personImage from "../../public/assets/hero/dev.png"
import arrowImage from "../../public/assets/hero/arrow.svg"
import shapeOne from "../../public/assets/hero/shape-1.svg"
import shapeTwo from "../../public/assets/hero/shape-2.svg"
import shapeThree from "../../public/assets/hero/shape-3.svg"

import Image from "next/image"
import RotateAnimation from "./RotateAnimation"
import CountUp from "./CountUp"
import { useMemo } from "react"
export default function Header() {

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



    const dataCount = useMemo(()=>
    [
    {
        num: 10,
        ope: "+",
        text: "Yrs. of Experience"
    },
    {
        num: 100,
        ope: "+",
        text: "Websites Built"
    },
    {
        num: 95,
        ope: "%",
        text: "Clients Statisfied"
    },
    ]
    ,[])
  return (
    <>
        <div className="w-full" id="home">
            <div className="flex flex-col xl:flex-row items-center">
                <div className="w-full xl:w-[50%] bg-accent xl:bg-white p-8">
                    <h2 className="text-primary text-xl tracking-[5px] text-center xl:text-left">Noah Jameson</h2>
                </div>
                <div className="bg-accent w-full xl:w-[50%] p-8 gap-8 flex justify-center items-center">
                <div className="hidden xl:flex justify-center items-center gap-5">
                    {links.map((link , index)=> {
                        return <ScrollLink className="cursor-pointer text-[18px]" activeClass="active" duration={1000} spy smooth to={link.name} key={index}>{link.label}</ScrollLink>
                    })}
                </div>
                <div className="flex justify-center items-center gap-5">
                    <div className="cursor-pointer w-10 h-10 rounded-full bg-primary flex justify-center items-center">
                        <FaInstagram  className="w-5 h-5 text-white"/>
                    </div>
                    <div className="cursor-pointer w-10 h-10 rounded-full bg-primary flex justify-center items-center">
                        <FaFacebook  className="w-5 h-5 text-white"/>
                    </div>
                    <div className="cursor-pointer w-10 h-10 rounded-full bg-primary flex justify-center items-center">
                        <FaTwitter  className="w-5 h-5 text-white"/>
                    </div>
                    <div className="cursor-pointer w-10 h-10 rounded-full bg-primary flex justify-center items-center">
                        <FaLinkedinIn className="w-5 h-5 text-white"/>
                    </div>
            </div>
        </div>
    </div>
        </div>
        <div className="bg-accent xl:bg-white w-full">
            <div className="flex items-center relative w-full justify-center xl:justify-between">
                <div className="w-full xl:w-[50%] p-8 flex flex-col items-center xl:items-start">
                    <div className="max-w-[340px] xl:max-w-none w-full text-center xl:text-left">
                        <h2 className="h1"><span className="text-white xl:text-accent">I Build And</span> Design Powerful 
                        <TypeAnimation
                            sequence={[
                                'Apps',2000,
                                'Websites',2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={false}
                            className="ml-2"
                        />
                    </h2>
                    <p className="my-5">Delivering powerful, custom websites that blend aesthetics with performance.</p>
                    <button className="cursor-pointer text-accent xl:text-white text-[18px] py-3 px-6 font-bold rounded-xl transition-all duration-500 bg-white xl:bg-accent/50 xl:hover:bg-accentHover">Contact me</button>
                    </div>
                    <div  className='mt-8'>
                       <div className='flex items-center gap-5'>
                        {dataCount.map((item , index)=>{
                        return <CountUp  key={index} nums={item.num} ope={item.ope} text={item.text}/>
                    })}
                    </div>
                    </div>
                </div>
                <div className="hidden xl:flex bg-accent w-[50%] p-8 justify-center h-[600px] relative">
                    <div className="absolute bottom-0">
                        <Image src={personImage} width={500} height={500} alt="image"/>
                    </div>
                    <div className="absolute left-5">
                        <Image src={arrowImage} width={200} height={200} alt="image" />
                    </div>
                    <div className="absolute bottom-5 left-5">
                    <RotateAnimation direction="left" duration={3} content={  <Image src={shapeOne} width={50} height={50} alt="image" />}/>             
                    </div>
                    <div className="absolute right-20">
                    <RotateAnimation direction="right" duration={3} content={  <Image src={shapeTwo} width={50} height={50} alt="image" />}/>      
                    </div>
                    <div className="absolute right-20 top-1/2">
                    <RotateAnimation direction="left" duration={3} content={ <Image src={shapeThree} width={50} height={50} alt="image" />}/>      
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
