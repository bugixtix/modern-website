import Image from "next/image";
import Navbar from '@/app/componentes/navbar'
import Hero from '@/app/componentes/hero'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
    </div>
  );
}
