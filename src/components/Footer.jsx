import React from 'react';
import Logo from "../images/gameverse.svg"

import Mail from "../images/socials/bxl_gmail.svg"
import Twitter from "../images/socials/akar-icons_twitter-fill.svg"
import Insta from "../images/socials/akar-icons_instagram-fill.svg"
import Discord from "../images/socials/akar-icons_discord-fill.svg"


const Footer = () => {
    return (
        <div className="border-t border-white lg:flex sm:text-center justify-evenly p-3">
            <img className="sm:w-32 sm:mx-auto sm:my-3" src={Logo} alt="" />
            <div className="text-lg title  sm:text-sm sm:my-3">CONFERENCE 2022</div>
            <div className="text-lg text  sm:text-sm sm:my-3">Privacy Policy</div>
            <div className="flex justify-between w-44 sm:mx-auto sm:my-3">
                <a href="mailto:gamerverseafrica@gmail.com">
                    <img className="w-6" src={Mail} alt="" />
                </a>
                <a href="https://discord.gg/T7xdedJyKY" target="_blank">
                    <img className="w-6" src={Discord} alt="" />
                </a>
                <a href="https://www.instagram.com/gameverse_africa" target="_blank">
                    <img className="w-6" src={Insta} alt="" />
                </a>
                <a href="https://twitter.com/gameverse_afric" target="_blank">
                    <img className="w-6" src={Twitter} alt="" />
                </a>
            </div>
        </div>
    );
}

export default Footer;