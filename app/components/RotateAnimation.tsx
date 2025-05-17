import React, { ReactNode } from 'react'

import {motion} from "framer-motion"

type props = {
  direction:string
  duration:number
  content:string | ReactNode
}

export default function RotateAnimation({direction , duration , content}:props) {

    const variants = {
        initial:{
            rotate: 0
        },
        animate: {
            rotate : direction == "right" ? 360 : direction == "left" ? -360 : 0 ,
            transition: {
                duration: duration,
                repeat: Infinity,
                ease: "linear"
              }
        }
    }
  
  return (
    <motion.div variants={variants} initial="initial" animate="animate">{content}</motion.div>
  )
}
