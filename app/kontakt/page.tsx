'use client'

import React from 'react'
import Navbar from '@/app/componentes/navbar'
import PseudoDiv from '@/app/componentes/PseudoDiv'
import Footer from '@/app/componentes/footer'
import ImageWithTitle from '@/app/kontakt/image'
import Contact_ from '@/app/kontakt/contact'

function Kontakt() {
  const clientMailAddress = "client@mail.de"
  const clientTelNumber = "017512341234"
  return (
    <div>
        <Navbar tel={clientTelNumber}/>
        <PseudoDiv h="h-[4rem]"/>
        <ImageWithTitle/>
        <Contact_/>
        <Footer tel={clientTelNumber}/>        
    </div>
  )
}

export default Kontakt