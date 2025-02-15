

'use client'

import React from 'react'

function PseudoDiv({h}) {
  return (
    <div className={`${h} w-[100%] bg-transparent -z-10 relative`}></div>
  )
}

export default PseudoDiv