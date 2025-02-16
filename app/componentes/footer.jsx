'use client'
import React from 'react'

import AnimatedDiv from '@/app/componentes/animated-div'
// main icon for logo
import { HiOutlineHomeModern as House} from "react-icons/hi2";

function Footer() {
  return (
    <div className="relative flex flex-col items-center gap-20 pt-4 lg:pt-1">
    <AnimatedDiv className='p-0 h-[100%] bg-transparent w-[100%] flex flex-col justify-center items-center' childern={<FooterContent/>}/>
  </div>
  )
}

function FooterContent(){
    const logoText = "Modern Website"
    const footerOptions = [
        {
            text:"HOME",
            title:"Home",
            id:"Home",
            href:"#Home",
            class:"options-home navbar-options",
            // icon:<Home/>
        },{
            text:"LEISTUNG",
            title:"Leistung",
            id:"Service",
            href:"#Service",
            class:"options-service navbar-options",
            // icon:<Service/>,
        },{
            text:"KONTAKT",
            title:"Kontakt",
            id:"Contact",
            href:"#Contact",
            class:"options-contact navbar-options",
            // icon:<Contact/>
        },{
            text:"JETZT ANRUFEN",
            title:"Jetzt_Anrufen",
            id:"Call",
            href:"#Call",
            class:"options-call navbar-options",
            // icon:<Call/>
        },
    ] 
    return(
        <div className='bg-green-400 text-green-800 w-[100%] flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-20 py-4 '>
            <div className='flex flex-col justify-center items-center'>
                <House className='text-green-800 text-5xl'/>
                <p className='text-green-800 text-sm'>{logoText}</p>
            </div>
            <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
                {footerOptions.map((i,index)=>(<a key={index} href={i.href} className='text-xs hover:text-green-950 transition-all ease duration-700' >{i.text}</a>))}
            </div>
        </div>
    )
}
export default Footer