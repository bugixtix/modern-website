
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
// import {cookies} from 'next/headers'
function CookiesBanner({setSubmitCookies}) {
    const [showBanner, setShowBanner ] = useState(false)

    useEffect(()=>{
        if (!Cookies.get("cookiesAccepted")) {
            setShowBanner(true);
          }
    },[])

    const DoAcceptCookies = () =>{
        Cookies.set("cookiesAccepted", "true", { expires: 365, path: "/" });
        setShowBanner(false);
    }
    const router = useRouter()

    const mainInfo = "Diese Website verwendet nur technisch notwendige Cookies, um ihre Funktionalität sicherzustellen. Es werden keine Cookies für kommerzielle oder Tracking-Zwecke eingesetzt. Mehr Infos in unserer ."
    const secondaryInfo = "Datenschutzerklärung."
    const submitText = "Okay"
    const privacyPolicyLink = "/datenschutz"

    if(!showBanner) return null;
  return (
    <div className='fixed bottom-0 bg-gray-200 px-4 sm:px-16 py-2 opacity-60'>
        <div className='flex flex-col sm:flex-row justify-center gap-2 '>
            <p className='text-xs'>{mainInfo} <span className='text-blue-400 hover:underline cursor-pointer' onClick={()=>{router.push(privacyPolicyLink)}}>{secondaryInfo}</span></p>
            <button className='text-xs border border-green-800 px-4 transition-all duration-500 ease-linear hover:bg-green-400' onClick={DoAcceptCookies}>{submitText}</button>
        </div>
    </div>
  )
}

export default CookiesBanner