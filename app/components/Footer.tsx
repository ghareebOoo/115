import React from 'react'

export default function Footer() {
  return (
    <div className='w-full p-8 bg-primary'>
        <div className='w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5'>
            <h2 className="text-white text-xl tracking-[5px] text-center xl:text-left">Noah Jameson</h2>
            <p className='text-xl font-medium text-white text-center lg:text-right'>Copyright © 2025. All rights reserved.</p>
        </div>
    </div>
  )
}
