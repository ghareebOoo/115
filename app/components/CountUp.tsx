"use client"
import { useInView } from 'framer-motion'
import React, {useEffect, useRef, useState } from 'react'

type props = {
    nums: number
    ope:string
    text:string

}


export default function CountUp({nums  , ope ,  text}:props) {
   


   
    const divRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(divRef);
    const [num , setNums] = useState(0)
    useEffect(()=>{
        if(!isInView) return

        let start = 0
        const du = 2000
        const time = Math.max( (Math.floor(du / nums)) , 20)
        const timer = setInterval(()=>{
            start++
            setNums(start)
            if(start >= nums) clearInterval(timer)
        },time)
    },[nums , isInView])


  return (
   <>
    <div ref={divRef}>
        {isInView && <div className='flex flex-col items-center gap-2'>
            <span className='text-xl font-bold text-primary'>{num}</span>
            <span className='text-xl font-bold'>{ope}</span>
            <p className='text-base font-medium text-center'>{text}</p>
        </div>}
    </div>
   </>
  )
}
