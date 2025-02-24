'use client'

import React, { useEffect, useState } from 'react'
// main icon for logo
import { HiOutlineHomeModern as House} from "react-icons/hi2";
// icons for navbar options
import { IoHome as Home } from "react-icons/io5";
import { IoInformation as Contact} from "react-icons/io5"
import { FaGears as Service } from 'react-icons/fa6';
import { IoCallSharp as Call } from 'react-icons/io5';
import { FaListUl as ShowMenu } from 'react-icons/fa6';
import { IoClose as HideMenu } from "react-icons/io5";
import { usePathname, useRouter } from 'next/navigation';



function Navbar({tel}) {
    const pathName = usePathname()
    const router = useRouter()
    const [topScrolled, setTopScrolled] = useState(false)
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
    },[])
    // states
    const [showOptionsMenu, setShowOptionsMenu] = useState(false)
    const [smallScreen, setSmallScreen] = useState(false)
    
    // function to reevaluate the state if client is using small screen (768px and less)
    function DoCheckSmallScreen(){
        if(window.innerWidth<=768 && !smallScreen) setSmallScreen(true)
            else if(window.innerWidth >768 ) setSmallScreen(false)
    }
    // function to check up if client scrolls  
    function DoHandleScroll(){
        if(window.scrollY > 0) {setTopScrolled(true);}
            else {setTopScrolled(false);}
    }
useEffect(()=>{
    setLoaded(true)
    // check if client uses small screen
    DoCheckSmallScreen()
    // eventlistener on the window once resized/scrolled, checks if client uses small screen/scrolls
    window.addEventListener('resize', DoCheckSmallScreen)
    window.addEventListener('scroll', DoHandleScroll)
        // call back to unpin the eventlistener
        return()=>{
            window.removeEventListener('resize', DoCheckSmallScreen)
            window.removeEventListener('scroll', DoHandleScroll)
        }
    },[])
    // logo text
    const logoText = "MODERN LEBEN"
    // array of navbar options 
    const navbarOptions = [
        {
            text:"HOME",
            title:"Home",
            id:"Home",
            href:"/",
            class:"options-home navbar-options",
            icon:<Home/>
        },{
            text:"LEISTUNG",
            title:"Leistung",
            id:"Service",
            href:"/leistung",
            class:"options-service navbar-options",
            icon:<Service/>,
        },{
            text:"KONTAKT",
            title:"Kontakt",
            id:"Contact",
            href:"/kontakt",
            class:"options-contact navbar-options",
            icon:<Contact/>
        },{
            text:"JETZT ANRUFEN",
            title:"Jetzt_Anrufen",
            id:"Call",
            href:"tel:"+tel,
            class:"options-call navbar-options",
            icon:<Call/>
        },
    ] 

    // object with necessery info for show/hide button on small screen
    const showHideMenuButton = {
        text:"Menu", 
        id:"showHideMenuButton",
        class:"showHideMenuButton",
        title:"Show/Hide Menu",
        showIcon:<ShowMenu className={'ShowMenu-icon'}/>,
        hideIcon:<HideMenu className={'HideMenu-icon'}/>,
        handler:()=>{
            setShowOptionsMenu(p=>!p)
        }
    }
  return (
    <div className={`Navbar`}>
        <div className={`navbarBody ${topScrolled ? 'navbarBody-scrolled' : ''}`}>
            <div className={`navbar--logo`}>
                <House className={`logo-icon ${topScrolled ? 'logo-icon-scrolled':''}`}/>
                <p className={`logo-text ${topScrolled ? 'logo-text-scrolled' : ''}`}>
                    {logoText}
                </p>
            </div>

            { loaded &&
            <div className={`${!smallScreen ? 'navbar--options' : showOptionsMenu ? `navbar--options--sc show-menu ${topScrolled&&'navbar--options--sc-scrolled'} ` : 'navbar--options--sc hide-menu'}`}>
                {
                    navbarOptions.map((item,index)=>(<a
                        className={item.class+` ${pathName==item.href ? 'bg-green-200':!smallScreen?'bg-green-100':'bg-none'}`+" hover:bg-green-200 transition-all duration-700 ease-linear"} 
                        id={item.id} 
                        title={item.title}
                        onClick={()=>router.push(item.href)}
                        key={index}
                        >
                            {item.text}
                        </a>))
                }
            </div>
            }
            {(loaded && smallScreen) &&
                <div>
                <button className={showHideMenuButton.class} id={showHideMenuButton.id} title={showHideMenuButton.title} onClick={showHideMenuButton.handler}>
                {!showOptionsMenu ? showHideMenuButton.showIcon : showHideMenuButton.hideIcon}
                </button>
                </div>}
        </div>
    </div>
  )
}

export default Navbar