'use client'

import React from 'react'
import Navbar from '@/app/componentes/navbar'
import Footer from '@/app/componentes/footer'
import Content from '@/app/ueberuns/ueberuns'
import PseudoDiv from '@/app/componentes/PseudoDiv'

function UeberUns() {
      const clientMailAddress = "client@mail.de"
      const clientTelNumber = "017512341234"
  return (
    <div>
        <Navbar tel={clientTelNumber} />
        <PseudoDiv h="h-[7rem]"/>
        <Content />
        <Footer tel={clientTelNumber} />
    </div>
  )
}

export default UeberUns