'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedDiv from '@/app/componentes/animated-div'
import apartment from '@/public/apartment.jpg'

function Leistung_() {
  return (
    <div className="relative mt-8 mb-16 md:h-screen flex flex-col items-center sm:py-2">
        <AnimatedDiv className='h-[100%] bg-transparent w-[100%] flex flex-col justify-center items-center' childern={<LeistungBody/>} />
    </div>
  )
}
function LeistungBody() {
    const title="Unsere Leistungen"
    const description="Entdecken Sie jetzt die vielfältigen Möglichkeiten der Raumgestaltung bei Flaming Malerbetrieb. Kontaktieren Sie uns noch heute für ein unverbindliches Angebot und freuen Sie sich auf ein neues Wohngefühl!"
    return(
        <div className='flex flex-col justify-center items-center gap-8'>
            <div className='max-w-[600px] flex flex-wrap gap-4 flex-col justify-center items-center'>
                <p className=' text-center font-bold text-black text-3xl sm:text-5xl'>{title}</p>
                <p className='text-center '>{description}</p>
            </div>

            <div className='flex flex-wrap'>
                <LeistungCard/>
            </div>
        </div>
    )
    
}
function LeistungCard({img, title, description}){

    return(
        <div>
            <div className=''>
                <Image className='w-[300px]' alt='image' src={img || apartment}/>
            </div>
            <div className=''>
                <p>{title||'Titel'}</p>
                <p>{description || 'Beschreibung kommt hier'}</p>
                <p>Kontakt aufnehmen</p>
            </div>
        </div>
    )
}
export default Leistung_