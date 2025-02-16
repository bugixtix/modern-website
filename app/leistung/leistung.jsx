'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedDiv from '@/app/componentes/animated-div'
import { TextGenerateEffect } from '../componentes/ui/text-generate-effect'

import apartment from '@/public/service01.jpg'
import service01 from '@/public/apartment.jpg'
import service02 from '@/public/service02.jpg'
import service03 from '@/public/service03.jpg'
import service04 from '@/public/service04.jpg'
import service05 from '@/public/service05.jpg'
import service06 from '@/public/service06.jpg'
import service07 from '@/public/service07.jpg'
import service08 from '@/public/service08.jpg'



function Leistung_() {
  return (
    <div className="relative mt-8 mb-16 flex flex-col items-center py-1 sm:py-2">
        <AnimatedDiv className='h-[100%] bg-transparent w-[100%] flex flex-col justify-center items-center' childern={<LeistungBody/>} triggerOnce={true} />
    </div>
  )
}
function LeistungBody() {

    const services = 
[
  {
    title: "Immobiliensuche",
    description: "Durchsuche eine große Auswahl an Mietwohnungen und Häusern mit erweiterten Filtern nach Preis, Standort und Ausstattung.",
    img:service01
  },
  {
    title: "Virtuelle Besichtigungen",
    description: "Erkunde Mietobjekte bequem von zu Hause mit 360°-Ansichten und hochauflösenden Bildern für eine realistische Vorschau.",
    img:service02
  },
  {
    "title": "Mietanfragen",
    description: "Kontaktiere Vermieter direkt über die Plattform, stelle Fragen und vereinbare Besichtigungstermine ohne Umwege.",
    img:service03
  },
  {
    title: "Preisvergleich",
    description: "Vergleiche Mietpreise ähnlicher Immobilien in deiner gewünschten Region, um das beste Angebot zu finden.",
    img:service04
  },
  {
    title: "Bewertungen",
    description: "Lese authentische Bewertungen anderer Mieter, um mehr über die Immobilie, Nachbarschaft und Vermieter zu erfahren.",
    img:service05
  },
  {
    title: "Favoriten speichern",
    description: "Speichere interessante Mietobjekte in deiner Favoritenliste, um sie später schnell wiederzufinden und zu vergleichen.",
    img:service06
  },
  {
    title: "Benachrichtigungen",
    description: "Erhalte automatische Updates über neue Immobilienangebote, Preisänderungen oder Antworten auf deine Mietanfragen.",
    img:service07
  },
  {
    title: "Mietvertragshilfe",
    description: "Nutze unsere Vorlagen und Ratgeber für rechtssichere Mietverträge, um alle wichtigen Klauseln und Rechte zu beachten.",
    img:service08
  }
];
    const title="Unsere Leistungen"
    const description="Entdecken Sie jetzt die vielfältigen Möglichkeiten der Raumgestaltung bei Flaming Malerbetrieb. Kontaktieren Sie uns noch heute für ein unverbindliches Angebot und freuen Sie sich auf ein neues Wohngefühl!"
    return(
        <div className='flex flex-col justify-center items-center gap-8 '>
            <div className='max-w-[600px] flex flex-wrap gap-4 flex-col justify-center items-center'>
                <TextGenerateEffect className='text-center font-bold text-black text-3xl sm:text-5xl' words={title}/>
                <TextGenerateEffect className=' text-center max-w-[100%] px-6 sm:px-0 sm:max-w-[100%]' words={description} />
            </div>

            <div className='flex flex-wrap justify-center items-center gap-8 w-[100%] sm:w-[90%]'>
                {services.map((item, index)=>(<LeistungCard key={index} service={item} />))}
            </div>
        </div>
    )
    
}
function LeistungCard({service}){

    const {img, title, description} = service
    return(
        <div className='w-[280px] sm:w-[340px] shadow-[0px_4px_10px_rgba(39,174,96,0.5)] transition-all duration-700 ease-linear hover:scale-105 group'>
            <div className='w-[100%]'>
                <Image className='w-[100%]' alt='image' src={img || service02}/>
            </div>
            <div className='border p-4 flex flex-col gap-2 group-hover:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] transition-all duration-700 ease'>
                <p className='font-bold text-black text-[25px]/relaxed tracking-normal'>{title||'Titel'}</p>
                <p className='font-light text-green-950'>{description || 'Beschreibung kommt hier'}</p>
                <p className='font-medium text-green-400 underline-offset-4 underline cursor-pointer'>Kontakt aufnehmen</p>
            </div>
        </div>
    )
}
export default Leistung_