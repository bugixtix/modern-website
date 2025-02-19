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
            <div className='p-4'>
                <ColourfulText colors={colors} className='font-bold text-lg sm:text-2xl' text={title}/>
                {description.map((item, index)=>(<p key={index} className='pt-2'>{item}</p>))}
            </div>
            <div className='flex flex-col lg:flex-row gap-0 items-stretch w-[100%]'>
                <ContactForm/>
                <ContactInfo/>
            </div>
        </div>
    )
}

function ContactForm(){
    const mainText = "Senden Sie uns eine Nachricht"

    const formSubmitted = (e) =>{
        e.preventDefault()
        console.log('submitted from form')
    }
    return(
        <form className='flex flex-col items-stretch justify-start gap-6 p-4 bg-gray-100 sm:text-sm text-xs' onSubmit={formSubmitted}>
            <p>{mainText}</p>
            <div className='flex flex-row items-start justify-start gap-4 w-[100%]'>
                <input placeholder={'Vorname *'} type='text' className='w-[50%] px-4 py-2 outline-none shadow-[0px_4px_10px_rgba(39,174,96,0.5)] focus-within:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] hover:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] transition-all ease-linear duration-300 ' required/>
                <input placeholder={'Nachname *'} type='text' className='w-[50%] flex-1 px-4 py-2 outline-none shadow-[0px_4px_10px_rgba(39,174,96,0.5)] focus-within:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] hover:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] transition-all ease-linear duration-300' required/>
            </div>
            <input placeholder={'Email Adresse *'} type='email' className=' px-4 py-2 w-[100%] outline-none shadow-[0px_4px_10px_rgba(39,174,96,0.5)] focus-within:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] hover:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] transition-all ease-linear duration-300' required />
            <textarea placeholder='Kommentar *' className='px-4 py-2 w-[100%] h-[140px] outline-none shadow-[0px_4px_10px_rgba(39,174,96,0.5)] focus-within:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] hover:shadow-[0px_6px_15px_rgba(39,174,96,0.8)] transition-all ease-linear duration-300' required></textarea>
            <div className='flex flex-row justify-between items-baseline content-between w-[100%]'>
                <CoolButton handler={()=>console.log('submitted')} className={'px-4 py-2 font-bold text-white'} text={'Senden'}/>
                <p><span className='text-green-400 text-lg'>*</span> Gibt ein Pflichtfeld an</p>
            </div>
        </form>
    )
}
function ContactInfo(){
    const API_KEY = "AIzaSyB_MmP7fzbsc8TJSMIkOSSkc3xAWw9XB7o"
    const query ="europa"
    const title = "Besuchen Sie uns"
    const locationText = "Hauptstraße 45, "
    const addressText = "10115 Berlin, DE"
    const callText = "+49 30 12345678"
    const emailText = "info@webagentur-berlin.de"
    return(
        <div className='bg-green-400 flex flex-wrap justify-start flex-col px-4 pb-4'>
            <div className='flex flex-col justify-start items-start gap-2 w-[100%] lg:w-[400px] py-4 text-xs sm:text-sm'>
                <p>{title}</p>
                <div className='flex flex-row gap-2 items-center group cursor-pointer'>
                    <Location className='text-4xl sm:w-auto rounded-[100%] border border-black p-2'/>
                    <div className='flex flex-row flex-wrap gap-1 group-hover:text-gray-800 group-hover:underline'>
                        <p className=''>{locationText}</p>
                        <p className=''>{addressText}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center group cursor-pointer'>
                    <Call className=' text-4xl rounded-3xl border border-black p-2'/>
                    <p className='group-hover:text-gray-800 group-hover:underline'>{callText}</p>
                </div>
                <div className='flex flex-row gap-2 items-center group cursor-pointer'>
                    <Email className='text-4xl rounded-3xl border border-black py-2'/>
                    <p className='group-hover:text-gray-800 group-hover:underline'>{emailText}</p>
                </div>
                
            </div>
            <div className=''>
            <iframe
                name="map--frame"
                className="w-[100%] h-[240px]"
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${query}`}>
                </iframe>
            </div>
        </div>
    )
}
export default Contact_