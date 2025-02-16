'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedDiv from '@/app/componentes/animated-div'
import apartment from '@/public/service01.jpg'
function Image_() {
  return (
    <div className="relative mt-8 mb-16 md:h-screen flex flex-col items-center sm:py-2">
        <AnimatedDiv className='h-[100%] bg-transparent w-[100%] flex flex-col justify-center items-center' childern={<ImageContent/>} />
    </div>
  )
}
function ImageContent(){

    return(
        <div className='w-[100%] flex justify-center items-center relative'>
            <div className=' absolute left-0 -z-10 w-[60%] bg-gradient-to-r from-orange-300 via-yellow-300 to-green-400 h-[120%]'></div>
            <Image className="h-[100%] object-cover" src={apartment} alt="image" />
        </div>
    )
}
export default Image_