import React from 'react'
import Logo from "../images/gameverse.svg"
import Bar from "../images/nav.svg";


const HeaderNav = () => {
    return (
        <div className="flex justify-between py-8 px-32">
            <div>
                <img src={Bar} alt="" />
            </div>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className="inter pt-1">BECOME A SPONSOR</div>
        </div>
    );
}

export default HeaderNav;