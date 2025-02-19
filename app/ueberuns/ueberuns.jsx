'use client'
import React from 'react'

function Content() {

    const ownerInfo =    {
        name:"Haj-Ahmad, Housam",
        companyName:"Modern Leben (Einzelunternehmen)",
        location:"Hauptstraße 45",
        address:"10115 Berlin, DE",
        tel:"+49 30 12345678",
        email:"info@webagentur-berlin.de"}
    const imprintText = "Impressum"
    const contactText = "Kontakt"
    const pictureCopyrightText = "Bildrechte"
    const pictureSource = "www.freepik.com"
    const websiteDesignerText = "Webseite Designer"
    const websiteDesigner = "Bunte Welt"
    const websiteDesignerSlogan = "Design trifft Funktion – Willkommen in der Bunten Welt."
  return (
    <div className='w-[100%] flex flex-col justify-center items-center py-4 px-4 sm:py-8'>
        <div className='w-[100%] sm:w-[80%] flex flex-col gap-4'>

        <div>
            <p className='font-bold text-3xl/snug sm:text-5xl/snug tracking-wide'>{imprintText}</p>
            <p className='text-sm/snug sm:text-base/snug'>{ownerInfo.name}</p>
            <p className='text-sm/snug sm:text-base/snug'>{ownerInfo.companyName}</p>
            <p className='text-sm/snug sm:text-base/snug'>{ownerInfo.location}</p>
            <p className='text-sm/snug sm:text-base/snug'>{ownerInfo.address}</p>
        </div>
        <div className='flex flex-col'>
            <p className='font-bold text-2xl/snug sm:text-4xl/snug tracking-wide'>{contactText}</p>
            <a className='text-sm/snug sm:text-base/snug hover:underline text-blue-600' href=''>{ownerInfo.tel}</a>
            <a className='text-sm/snug sm:text-base/snug hover:underline text-blue-600' href=''>{ownerInfo.email}</a>
        </div>
        <div>
            <p className='font-semibold text-base/snug tracking-wide'>{pictureCopyrightText}</p>
            <a className='hover:underline text-blue-600' href={pictureSource}>{pictureSource}</a>
        </div>
        <div className='flex flex-col'>
            <p className='font-semibold text-base/snug tracking-wide'>{websiteDesignerText}</p>
            <a className='hover:underline text-blue-600' href=''>{websiteDesigner}</a>
            <a className='hover:underline text-blue-600' href=''>{websiteDesignerSlogan}</a>
        </div>

        </div>
    </div>
  )
}

export default Content