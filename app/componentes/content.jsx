'use client'
import React from 'react'
import AnimatedDiv from '@/app/componentes/animated-div'
import Image from 'next/image'
import { TextGenerateEffect } from './ui/text-generate-effect'
import {motion } from 'framer-motion'
import content_image from '@/public/modern_apartment.png'

function CoolButton({text}) {
  return (
    <motion.button
      className="relative overflow-hidden px-4 py-3 text-sm font-semibold text-white rounded-sm"
      style={{
        background: "linear-gradient(145deg, #2ecc71, #27ae60)",
        borderImage: "linear-gradient(145deg, #a8ff78, #78ffd6) 1",
        boxShadow: "0px 4px 10px rgba(39, 174, 96, 0.5)",
      }}
      whileHover={{ scale: 1.05, boxShadow: "0px 6px 15px rgba(39, 174, 96, 0.8)" }}
      whileTap={{ scale: 0.95, boxShadow: "0px 2px 5px rgba(39, 174, 96, 0.5)" }}
    >
      {text||"Click me"}
    </motion.button>
  );
}

function Content() {
  const first_description = "Finden Sie Ihr perfektes Zuhause – mühelos, schnell und zuverlässig."
  const second_description = "Mieten leicht gemacht: Entdecken Sie exklusive Häuser und Wohnungen in Top-Lagen."
  const main_text = ["Willkommen auf Modern Leben! Wir verbinden Mieter und Vermieter – schnell, sicher und unkompliziert. Sie suchen eine Wohnung oder ein Haus zur Miete? Entdecken Sie eine große Auswahl an modernen und gemütlichen Immobilien in den besten Lagen.","Egal, ob Sie ein modernes Apartment in der Stadt oder ein gemütliches Haus im Grünen suchen, wir bieten Ihnen eine einfache und sichere Möglichkeit, Ihr neues Zuhause zu finden.","Unsere Plattform bietet Ihnen eine transparente und einfache Möglichkeit, Ihr neues Zuhause zu finden – mit detaillierten Beschreibungen, hochwertigen Bildern und direktem Kontakt zu Vermietern." ,"Starten Sie jetzt Ihre Suche oder inserieren Sie Ihre Immobilie – einfach, digital und zuverlässig!"]
  const button_text = "Kontakt Aufnehmen!"
     const Jsx = () =>{
      return (
      <div className='flex flex-col w-[96%] sm:w-[90%] sm:flex-row justify-center  gap-[2rem]'>
        <div className='flex flex-col justify-start content-start h-[800px] min-h[300px] max-h-[1200px] min-w-[300px] max-w-[800px] w-[100%] sm:w-[46%]'>
          <TextGenerateEffect className='text-green-600 font-bold text-xs leading-tight' words={first_description}/>
          <TextGenerateEffect className='font-semibold text-2xl leading-snug text-gray-800' words={second_description}/>
          {main_text.map((i, index)=>(<p key={index} className='font-light leading-snug py-2 text-green-800'>{i}</p>))}
          <CoolButton text={button_text}/>
        </div>
        <div className='w-[100%] sm:w-[46%] min-w-[300px] max-w-[800px] relative min-h-[300px] max-h-[1000px] h-[700px]'>
          <div className='absolute w-[100%] h-[100%] bg-green-800 -top-[40px] -right-[40px] -z-10'>
          </div>
          <Image alt='content image'className=' object-cover h-[100%] w-[100%] min-w-[300px] max-h-screen' src={content_image}/>
        </div>
        {/* <AnimatedDiv>

          </AnimatedDiv> */}
      </div>
      )}
  return (
    <div className="relative min-h-screen flex flex-col items-center gap-20 py-20">
    <AnimatedDiv className='h-[100%] bg-transparent w-[100%] flex flex-col justify-center items-center' childern={<Jsx/>}/>
  </div>
  )
}

export default Content