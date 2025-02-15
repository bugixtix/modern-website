

import React from 'react'
import Navbar from '@/app/componentes/navbar'
import Footer from '@/app/componentes/footer'
import Content from '@/app/leistung/content'
import PseudoDiv from '@/app/componentes/PseudoDiv'
import Image_ from '@/app/leistung/image'
import Leistung_ from '@/app/leistung/leistung'

function Leistung() {

  return (
    <div className="min-h-screen">
        {/* <Navbar/>
        <PseudoDiv h="h-[7rem]"/>
        <Content/>
        <Image_/> */}
        <Leistung_/>
        <Footer/>
    </div>
  )
}
export default Leistung