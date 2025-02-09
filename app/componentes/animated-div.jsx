'use client'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React, { Children } from 'react'

function AnimatedDiv({childern}) {
    const {ref, inView} = useInView({triggerOnce:false, threshold:0.2});
  return (
    <div>
        <motion.div
            ref={ref}
            initial={{opacity:0, y:50}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{duration:0.5}}
            className="p-6 bg-gray-800 text-white rounded-lg shadow-lg"
        >
            {childern}
        </motion.div>
    </div>
  )
}

export default AnimatedDiv