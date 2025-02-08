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




function Navbar() {
    // states
    const [showOptionsMenu, setShowOptionsMenu] = useState(false)
    const [smallScreen, setSmallScreen] = useState(false)

    // function to reevaluate the state if client is using small screen (768px and less)
    function DoCheckSmallScreen(){
        if(window.innerWidth<=768 && !smallScreen) setSmallScreen(true)
        else if(window.innerWidth >768 ) setSmallScreen(false)
    }
    useEffect(()=>{
        // check if client uses small screen
        DoCheckSmallScreen()
        // eventlistener on the window once resized, checks if client uses small screen
        window.addEventListener('resize', DoCheckSmallScreen)
        // call back to unpin the eventlistener
        return()=>window.removeEventListener('resize', DoCheckSmallScreen)
    },[])
    // logo text
    const logoText = "Modern Website"
    // array of navbar options 
    const navbarOptions = [
        {
            text:"HOME",
            title:"Home",
            id:"Home",
            href:"#Home",
            class:"options-home navbar-options",
            icon:<Home/>
        },{
            text:"LEISTUNG",
            title:"Leistung",
            id:"Service",
            href:"#Service",
            class:"options-service navbar-options",
            icon:<Service/>,
        },{
            text:"KONTAKT",
            title:"Kontakt",
            id:"Contact",
            href:"#Contact",
            class:"options-contact navbar-options",
            icon:<Contact/>
        },{
            text:"JETZT ANRUFEN",
            title:"Jetzt_Anrufen",
            id:"Call",
            href:"#Call",
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
    <div className='Navbar'>
        <div className='navbarBody'>
            <div className='navbar--logo'>
                <House className='logo-icon'/>
                <p className='logo-text'>
                    {logoText}
                </p>
            </div>

            <div className={`${!smallScreen ? 'navbar--options' : showOptionsMenu ? 'navbar--options--sc show-menu' : 'navbar--options--sc hide-menu'}`}>
                {
                    navbarOptions.map((item,index)=>(<a
                        className={item.class} 
                        id={item.id} 
                        title={item.title}
                        href={item.href}
                        key={index}
                        >
                            {item.text}
                        </a>))
                }
            </div>
            {smallScreen &&
             <div>
                <button className={showHideMenuButton.class} id={showHideMenuButton.id} title={showHideMenuButton.title} onClick={showHideMenuButton.handler}>
                    {!showOptionsMenu ? showHideMenuButton.showIcon : showHideMenuButton.hideIcon}
                </button>
                </div>    
        }
        </div>
    </div>
  )
}

export default Navbar