import React from 'react';
import PadLeft from "../images/left.svg"
import PadRight from "../images/right.svg"

const Join = (props) => {
    return <div className="hero sm:p-10 lg:p-20 relative">
        <div className="lg:w-2/5 mx-auto text-center">
            <div className="title leading-10 sm:text-xl lg:text-4xl">{props.title}</div>
            <div className="text lg:text-base sm:text-xs my-3">{props.text}</div>
            <a href={props.link}>
                <button className="btn title lg:p-3 sm:p-2 w-52">{props.btn}</button>
            </a>
        </div>
        <div>
            <img className="absolute lg:top-12 sm:w-10 w-20 lg:left-32 sm:top-0  App-logo" src={PadLeft} alt="" />
            <img className="absolute lg:right-32 sm:right-6 lg:w-20 sm:w-10  App-logo" src={PadRight} alt="" />
        </div>
    </div>;
}


export default Join;