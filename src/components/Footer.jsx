import React from 'react';
import Logo from "../images/gameverse.svg"

import Mail from "../images/socials/bxl_gmail.svg"
import Twitter from "../images/socials/akar-icons_twitter-fill.svg"
import Insta from "../images/socials/akar-icons_instagram-fill.svg"
import Discord from "../images/socials/akar-icons_discord-fill.svg"


const Footer = () => {
    return (
        <div className="border-t border-white flex justify-evenly p-3">
            <img src={Logo} alt="" />
            <div className="text-lg text">CONFERENCE 2022</div>
            <div className="text-lg text">Privacy Policy</div>
            <div className="flex justify-between w-44">
                <img className="w-6" src={Mail} alt="" />
                <img className="w-6" src={Discord} alt="" />
                <img className="w-6" src={Insta} alt="" />
                <img className="w-6" src={Twitter} alt="" />
            </div>
        </div>
    );
}

export default Footer;