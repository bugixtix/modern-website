'use client'

import React from 'react'
import AnimatedDiv from '@/app/componentes/animated-div'
import { TextGenerateEffect } from '@/app/componentes/ui/text-generate-effect'

function ImageWithTitle() {
    const title = "Kontakt aufnehmen"
  return (
    <div className="relative w-[100%] h-[80vh] mt-8 mb-16 flex flex-col items-center py-1 sm:py-2">
        <AnimatedDiv className='h-[100%] bg-transparent w-[100%] flex flex-col justify-center items-center' childern={<Image_ title={title} /> } triggerOnce={true} />
    </div>
  )
}
function Image_({title='titel'}){
    return(
        <div className=' relative w-[100%] h-[100%] flex flex-col justify-center items-center '>
            <div className='w-[100%] h-[100%] absolute bg-gray-200 blur-[1px]  bg-[url(/kontakt.jpg)] bg-blend-darken'> </div>
            <TextGenerateEffect words={title || 'Titel'} className='bg-orange-400 px-2 z-20 font-bold text-3xl sm:text-5xl text-white tracking-wider -rotate-1'/>
        </div>
    )
}
export default ImageWithTitle