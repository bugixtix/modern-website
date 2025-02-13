'use client'

import React from 'react' 
import { TextGenerateEffect } from './ui/text-generate-effect'

function Hero() {
    const heroTitle = "Finde dein perfektes Zuhause – einfach & stressfrei!"
    const heroDescription = "Entdecke moderne Mietwohnungen mit höchstem Komfort und flexiblen Konditionen. Dein neues Zuhause wartet!"
  return (
    <div className='Hero'>
        <div className='heroBody'>
            <div className='hero--content'>
                <TextGenerateEffect duration={2} filter={false} words={heroTitle} className='text-2xl leading-tight text-left sm:text-4xl sm:text-left lg:text-4xl lg:leading-snug sm:leading-snug text-green-200 font-extrabold'/>
                <TextGenerateEffect duration={4} filter={false} words={heroDescription} className='text-lg leading-tight text-left sm:text-left sm:text-xl sm:leading-snug lg:text-2xl text-green-50 italic '/>
            </div>
        </div>  
    </div>
  )
}

export default Hero