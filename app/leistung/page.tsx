

import React from 'react'
import Navbar from '@/app/componentes/navbar'
import Footer from '@/app/componentes/footer'
import Content from '@/app/leistung/content'
import PseudoDiv from '@/app/componentes/PseudoDiv'
import Image_ from '@/app/leistung/image'
import Leistung_ from '@/app/leistung/leistung'

function Leistung() {
  const clientMailAddress = "client@mail.de"
  const clientTelNumber = "017512341234"
  return (
    <div className="min-h-screen">
        <Navbar tel={clientTelNumber}/>
        <PseudoDiv h="h-[7rem]"/>
        <Content/>
        <Image_/>
        <Leistung_/>
        <PseudoDiv h="h-[4rem]"/>
        <Footer tel={clientTelNumber}/>
    </div>
  )
}
export default Leistung