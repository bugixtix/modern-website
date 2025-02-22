'use client'
import Image from "next/image";
import Navbar from '@/app/componentes/navbar'
import Hero from '@/app/componentes/hero'
import CallToAction from '@/app/componentes/call-to-action'
import Content from '@/app/componentes/content'
import Footer from '@/app/componentes/footer'
import PseudoDiv from '@/app/componentes/PseudoDiv'
import CookiesBanner from '@/app/componentes/cookies-banner'
import {useState} from 'react'
export default function Home() {
  const clientMailAddress = "client@mail.de"
  const clientTelNumber = "017512341234"
  const [submitCookies, setSubmitCookies] = useState(false)
  return (
    <div>
        <Navbar tel={clientTelNumber}/>
        <Hero/>
        <CallToAction 
          mail={clientMailAddress}
          tel={clientTelNumber}
          />
        <Content/>
        <PseudoDiv h="h-[4rem]"/>
        <Footer tel={clientTelNumber}/>
        {!submitCookies && <CookiesBanner setSubmitCookies={setSubmitCookies}/>}
    </div>
  );
}
