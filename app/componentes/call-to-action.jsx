import React from 'react'
import { TfiEmail as Email } from "react-icons/tfi";
import { IoCallSharp as Call } from 'react-icons/io5';
import { ColourfulText } from './ui/colourful-text';

function CallToAction() {
    const colors = [
      "#1e2939",
      "#101828",
      "#030712"
    ];
  return (
    <div className={`min-h-[380px] sm:min-h-[300px] CTA relative w-[100%] flex flex-row items-center justify-center`}>
        <div className='ctaBody absolute -top-16 w-[90%] sm:w-[80%] bg-green-200 flex flex-col sm:flex-row items-center justify-center content-stretch'>
            <div className='bg-transparent p-4 sm:p-8 w-[100%] sm:w-[50%] h-[100%]'>
                <Email className='text-3xl sm:text-6xl'/>
                <p className='text-[1rem] py-4'><ColourfulText colors={colors} className='font-bold text-lg sm:text-2xl' text="Emailen Sie uns!" /> <br></br> Nimm Kontakt auf! </p>
                <a className='text-[1rem] py-2 cursor-pointer underline hover:text-green-800 transition-all ease-in duration-500'>Email uns Jetzt</a>
            </div>
            <div className='bg-green-400 p-4 sm:p-8 w-[100%] sm:w-[50%]'>
                <Call className='text-3xl sm:text-6xl'/>
                <p className='text-[1rem] py-4'><ColourfulText colors={colors} className='font-bold text-lg sm:text-2xl' text="Rufen Sie uns an!" /> <br></br> Nimm Kontakt auf! </p>
                <a className='text-[1rem] py-2 cursor-pointer underline hover:text-green-800 transition-all ease-in duration-500'>Jetzt Anrufen!</a>
            </div>
        </div>
    </div>
  )
}

export default CallToAction