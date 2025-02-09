import Image from "next/image";
import Navbar from '@/app/componentes/navbar'
import Hero from '@/app/componentes/hero'
import CallToAction from '@/app/componentes/call-to-action'
import Content from '@/app/componentes/content'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <CallToAction/>
        <Content/>
    </div>
  );
}
