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

import {
    Link
} from "react-router-dom";


const HeaderNav = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => {
        setNav(!nav)
        console.log('hello', nav)
    }
    const navItems = [
        {
            title: "Home",
            img: Home,
            link: "/"
        },
        {
            title: "About Us",
            img: Job,
            link: "/about"
        },
        {
            title: "Speaker",
            img: Cup,
            link: "/"
        },
        {
            title: "Event Schedule",
            img: Calender,
            link: "/"
        },
        {
            title: "Contact Us",
            img: Mail,
            link: "/"
        },
        {
            title: "Blog",
            img: Youtube,
            link: "/"
        },
        {
            title: "Become a Sponsor",
            img: User,
            link: "/"
        },
    ]
    return (
        <>
            <div className="flex justify-between py-8 lg:px-32 px-10">
                <div className="cursor-pointer sm:w-24">
                    <img onClick={toggleNav} src={Bar} alt="" />
                </div>
                <div className="sm:w-24">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="inter lg:pt-1 sm:text-xs sm:hidden">BECOME A SPONSOR</div>
            </div>

            <div id="mySidenav" className={`sidenav ${nav ? 'w-80 px-12' : "w-0 px-0"}`}>
                {nav ? (navItems.map((item) => (
                    <Link to={item.link}>
                        <div className="flex my-8 text-sm">
                            <div className="mx-5 p-3 rounded-md nav-link">
                                <img className="w-4 h-4" src={item.img} alt="" />
                            </div>
                            <div className="mt-3">{item.title}</div>
                        </div>
                    </Link>
                ))) : (<div></div>)}
            </div>
        </>
    );
}

export default HeaderNav;