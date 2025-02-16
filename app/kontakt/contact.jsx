'use client'
import React from 'react'
import PseudoDiv from '@/app/componentes/PseudoDiv'
import AnimatedDiv from '@/app/componentes/animated-div'
import { TextGenerateEffect } from '@/app/componentes/ui/text-generate-effect'
import { ColourfulText } from '@/app/componentes/ui/colourful-text';
import { CoolButton } from '@/app/componentes/button'
import { IoLocationSharp as Location } from "react-icons/io5";
import { TfiEmail as Email } from "react-icons/tfi";
import { IoCallSharp as Call } from 'react-icons/io5';
function Contact_() {
    
    const title = ""
  return (
    <div className="relative w-[100%] mt-8 mb-16 flex flex-col items-center py-1 sm:py-2">
        <AnimatedDiv className='h-[100%] bg-transparent w-[100%] flex flex-col justify-center items-center' childern={<ContactBody title={title} /> } triggerOnce={true} />
    </div>
  )
}
function ContactBody(){
    const colors = [
        "#1e2939",
        "#101828",
        "#030712"
      ];
    const title = "Qualität trifft Leidenschaft";
    const description = ["Erleben Sie die perfekte Gemeinsamkeit aus Qualität und Leidenschaft bei Modern Leben.", "Kontaktieren Sie uns jetzt und entdecken Sie, wie wir Ihre Träume wahr werden lassen!"]
    return(
        <div>
            {/* <div >
                <ColourfulText colors={colors} className='font-bold text-lg sm:text-2xl' text={title}/>
                {description.map((item, index)=>(<p key={index} className='pt-2'>{item}</p>))}
            </div> */}
            <div className='flex flex-row gap-4 items-baseline'>
                <ContactForm/>
                <ContactInfo/>
            </div>
        </div>
    )
}

function ContactForm(){
    return(
        <div className='flex flex-col items-start justify-start gap-4 py-4'>
            
            <div className='flex flex-row items-start justify-start gap-4 w-[100%]'>
                <input placeholder={'Vorname *'} type='text' className='px-4 py-2 outline-none shadow-[0px_4px_10px_rgba(39,174,96,0.5)] focus-within:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] hover:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] transition-all ease-linear duration-300' />
                <input placeholder={'Nachname *'} type='text' className='flex-1 px-4 py-2 outline-none shadow-[0px_4px_10px_rgba(39,174,96,0.5)] focus-within:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] hover:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] transition-all ease-linear duration-300'/>
            </div>
            <input placeholder={'Email Adresse *'} type='email' className=' px-4 py-2 w-[100%] outline-none shadow-[0px_4px_10px_rgba(39,174,96,0.5)] focus-within:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] hover:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] transition-all ease-linear duration-300' />
            <textarea placeholder='Kommentar *' className='px-4 py-2 w-[100%] outline-none shadow-[0px_4px_10px_rgba(39,174,96,0.5)] focus-within:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] hover:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] transition-all ease-linear duration-300'></textarea>
            <div className='flex flex-row justify-between items-baseline content-between w-[100%]'>
                <CoolButton className={'px-4 py-2 font-bold text-white'} text={'Senden'}/>
                <p><span className='text-green-400 text-lg'>*</span> Gibt ein Pflichtfeld an</p>
            </div>
        </div>
    )
}
function ContactInfo(){
    const API_KEY = "AIzaSyB_MmP7fzbsc8TJSMIkOSSkc3xAWw9XB7o"
    const query ="europa"
    const title = "Unsere Adresse"
    const locationText = "Hauptstraße 45, 10115 Berlin, Deutschland"
    const callText = "info@webagentur-berlin.de"
    const emailText = "+49 30 12345678"
    return(
        <div>
            <div className='flex flex-col justify-start items-start gap-2 w-[400px]'>
                <p>{title}</p>
                <div className='flex flex-row gap-2'>
                    <Location/>
                    <p>{locationText}</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <Call/>
                    <p>{callText}</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <Email/>
                    <p>{emailText}</p>
                </div>
                
            </div>
            <div className=''>
            <iframe
                name="map--frame"
                className="w-[100%]"
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${query}`}>
                </iframe>
            </div>
        </div>
    )
}
export default Contact_