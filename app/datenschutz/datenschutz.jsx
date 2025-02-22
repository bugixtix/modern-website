'use client'
import PRIVACYpolicy from "@/app/datenschutz/datenschutz.json"

import React from 'react'

function Content() {
  return (
    <div className="flex flex-col justify-center items-center py-4 px-4 sm:py-8 w-[100%]">
        <div className="w-[100%] sm:w-[80%]">
            <p className="text-lg/tight tracking-wide sm:text-4xl/snug font-bold ">{PRIVACYpolicy.title}</p>
            <div className="flex flex-col gap-4 py-4">
            {
                PRIVACYpolicy.content.map((item,index)=>(
                    <ul key={index}>
                        <p className="sm:text-lg/snug font-normal"><span>{index+1}. </span>{item.title}</p>
                        {item.text.map((i,_)=>(<li className={`${item.text.length > 6 && _!=item.text.length-1 && _!=0 ? 'pl-1' : ''}`} key={_}>{i}</li>))}
                    </ul>
                    
                ))
            }
            </div>
            <p className="italic" >Stand {PRIVACYpolicy.entry_date}</p>
        </div>
    </div>
  )
}

export default Content