import Image from "next/image";
import Navbar from '@/app/componentes/navbar'
import Hero from '@/app/componentes/hero'
import CallToAction from '@/app/componentes/call-to-action'
import Content from '@/app/componentes/content'
import Footer from '@/app/componentes/footer'
import PseudoDiv from '@/app/componentes/PseudoDiv'


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <CallToAction/>
        <Content/>
        <PseudoDiv h="h-[7rem]"/>
        <Footer/>
    </div>
  );
}
