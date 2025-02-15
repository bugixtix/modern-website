
'use client'
import React from 'react'
import { TextGenerateEffect } from '@/app/componentes/ui/text-generate-effect'
import {CoolButton}  from '@/app/componentes/button'

function Content() {

    const title = 'Wir begleiten Sie mit grünen Produkten und langjähriger Erfahrung'
    
    const mainText = [
        'Unser Team steht Ihnen gerne zur Verfügung, um Ihre Wünsche zu realisieren. Wir arbeiten effizient und gewissenhaft, damit Sie schon bald Ihr neues Zuhause genießen können. Verlassen Sie sich auf unsere langjährige Expertise und lassen Sie sich von unserem Service überzeugen.',
        '​Für umweltbewusste Kunden bieten wir nachhaltig zertifizierte Produkte an. Alle unsere ökologischen Artikel sind frei von Schadstoffen und geruchlos.',
        'Auf teure Gerüste verzichten und Geld sparen  - wir bieten auch die Arbeit per ​Seilzugangstechnik an. Kontaktieren Sie uns dazu gerne.'
    ]
  return (
    <div className='w-[100%] flex flex-col justify-center items-center my-[4rem] p-2'>
        <div className=' w-[100%] sm:w-[60%] flex flex-col justify-start items-start gap-8 '>
        <TextGenerateEffect className='w-[100%] text-3xl sm:text-5xl font-bold tracking-wide' words={title}/>
            <div className='flex flex-col gap-2 w-[80%]'>
                {mainText.map((i,index)=>(<p key={index} className=''>{i}</p>))}
            </div>
            <CoolButton className={"p-4 text-white rounded-sm"} text={"Unser Angebot (PDF)"} />
        </div>
    </div>
  )
}

export default Content