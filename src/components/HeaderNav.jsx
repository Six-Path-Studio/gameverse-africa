import React, { useState } from 'react'
import Logo from "../images/gameverse.svg"
import Bar from "../images/nav.svg";

import Home from "../images/icons/home.svg"
import Calender from "../images/icons/calender.svg"
import Cup from "../images/icons/cup.svg"
import Job from "../images/icons/job.svg"
import Mail from "../images/icons/mail.svg"
import User from "../images/icons/user.svg"
import Youtube from "../images/icons/youtube.svg"



const HeaderNav = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => {
        setNav(!nav)
        console.log('hello', nav)
    }
    const navItems = [
        {
            title: "Home",
            img: Home
        },
        {
            title: "About Us",
            img: Job
        },
        {
            title: "Speaker",
            img: Cup
        },
        {
            title: "Event Schedule",
            img: Calender
        },
        {
            title: "Contact Us",
            img: Mail
        },
        {
            title: "Socials",
            img: Youtube
        },
        {
            title: "Become a Sponsor",
            img: User
        },
    ]
    return (
        <>
            <div className="flex justify-between py-8 px-32">
                <div>
                    <img onClick={toggleNav} src={Bar} alt="" />
                </div>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="inter pt-1">BECOME A SPONSOR</div>
            </div>

            <div id="mySidenav" className={`sidenav ${nav ? 'w-80 px-12' : "w-0 px-0"}`}>
                {nav ? (navItems.map((item) => (
                    <div className="flex my-8 text-sm">
                        <div className="mx-5 p-3 rounded-md nav-link">
                            <img className="w-4 h-4" src={item.img} alt="" />
                        </div>
                        <div className="mt-3">{item.title}</div>
                    </div>
                ))) : (<div></div>)}
            </div>
        </>
    );
}

export default HeaderNav;