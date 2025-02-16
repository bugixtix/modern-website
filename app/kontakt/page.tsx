'use client'

import React from 'react'
import Navbar from '@/app/componentes/navbar'
import PseudoDiv from '@/app/componentes/PseudoDiv'
import Footer from '@/app/componentes/footer'
import ImageWithTitle from '@/app/kontakt/image'
import Contact_ from '@/app/kontakt/contact'

function Kontakt() {
  return (
    <div>
        <Navbar/>
        <PseudoDiv h="h-[4rem]"/>
        <ImageWithTitle/>
        <Contact_/>
        <Footer/>        
    </div>
  )
}

export default Kontakt