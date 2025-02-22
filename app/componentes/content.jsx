'use client'
import React from 'react'
import AnimatedDiv from '@/app/componentes/animated-div'
import Image from 'next/image'
import { TextGenerateEffect } from './ui/text-generate-effect'
import content_image from '@/public/modern_apartment.png'
import {CoolButton} from '@/app/componentes/button'
import { useRouter } from 'next/navigation'


function Content() {
  const router = useRouter()
  const first_description = "Finden Sie Ihr perfektes Zuhause – mühelos, schnell und zuverlässig."
  const second_description = "Mieten leicht gemacht: Entdecken Sie exklusive Häuser und Wohnungen in Top-Lagen."
  const main_text = ["Willkommen auf Modern Leben! Wir verbinden Mieter und Vermieter – schnell, sicher und unkompliziert. Sie suchen eine Wohnung oder ein Haus zur Miete? Entdecken Sie eine große Auswahl an modernen und gemütlichen Immobilien in den besten Lagen.","Egal, ob Sie ein modernes Apartment in der Stadt oder ein gemütliches Haus im Grünen suchen, wir bieten Ihnen eine einfache und sichere Möglichkeit, Ihr neues Zuhause zu finden.","Starten Sie jetzt Ihre Suche oder inserieren Sie Ihre Immobilie – einfach, digital und zuverlässig!"]
  const button_text = "Kontakt Aufnehmen!"

  const goToContactPage = (e) =>{
    router.push('/kontakt')
  }
     const ContentBody = () =>{
      return (
      <div className='flex h-[100%] flex-col w-[100%] p-2 sm:p-4 md:flex-row justify-center md:gap-2 lg:gap-6 gap-4'>
        <div className='flex flex-col content-stretch items-stretch justify-between lg:p-0 md:h-[730px] min-h[300px] w-[100%] md:w-[50%] lg:w-[600px]'>
          <div>
            <TextGenerateEffect className='text-green-600 font-bold text-xs leading-tight' words={first_description}/>
            <TextGenerateEffect className='font-semibold text-2xl md:text-lg lg:text-2xl leading-snug text-gray-800' words={second_description}/>
          </div>
          <div className='flex flex-col justify-evenly items-stretch content-center'>
            {main_text.map((i, index)=>(<p key={index} className='font-light sm:text-sm text-sm lg:text-lg/relaxed xl:text-[24px]/relaxed leading-relaxed py-2 text-green-800'>{i}</p>))}
          </div>
          <CoolButton className='relative overflow-hidden px-4 py-2 text-sm font-semibold text-white rounded-sm' text={button_text} handler={goToContactPage}/>
        </div>
        <div className=' flex flex-col justify-stretch items-stretch w-[100%] md:w-auto relative h-[500px] md:h-[730px]'>
          <div className='absolute w-[100%] h-[100%] bg-green-800 -bottom-[10px] -right-[10px] md:-right-[20px] md:-top-[20px] -z-10'>
          </div>
          <Image alt='content image'className=' object-cover h-[100%] w-[100%] min-w-[280px] max-h-screen' src={content_image}/>
        </div>
      </div>
      )}
  return (
  <div className="relative mt-8 mb-16 h-auto md:h-screen flex flex-col items-center gap-20 sm:py-2">
    <AnimatedDiv className='h-[100%] bg-transparent w-[100%] flex flex-col justify-center items-center' childern={<ContentBody/>} triggerOnce={true}/>
  </div>
  )
}

export default Content