
import React from 'react'
import AnimatedDiv from '@/app/componentes/animated-div'


function Content() {
     
  return (
    <div className="min-h-screen flex flex-col items-center gap-20 py-20">
    <div className="h-[100vh] flex items-center justify-center text-2xl font-bold">
      Scroll nach unten 👇
    </div>
    <AnimatedDiv childern={'erstes sichtbares Element'}></AnimatedDiv>
    <AnimatedDiv childern={'zweites sichtbares Element'}></AnimatedDiv>
    <AnimatedDiv childern={'drittes sichtbares Element'}></AnimatedDiv>
  </div>
  )
}

export default Content