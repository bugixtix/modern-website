'use client'
import Navbar from '@/app/componentes/navbar'
import Footer from '@/app/componentes/footer'
import PseudoDiv from '@/app/componentes/PseudoDiv'
import Content from '@/app/datenschutz/datenschutz'
import React from 'react'
function Page() {
    const clientMailAddress = "client@mail.de"
    const clientTelNumber = "017512341234"
  return (
    <div>
    <Navbar tel={clientTelNumber} />
    <PseudoDiv h="h-[7rem]"/>
    <Content/>
    <Footer tel={clientTelNumber} />
    </div>
  )
}

export default Page