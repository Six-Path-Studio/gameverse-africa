import React from 'react';
import PadLeft from "../images/left.svg"
import PadRight from "../images/right.svg"


const Join = (props) => {
    return <div className="hero p-20 relative">
        <div className="w-96 mx-auto text-center">
            <div className="title text-3xl">{props.title}</div>
            <div className="text text-base my-3">{props.text}</div>
            <button className="btn p-3 w-52 ">{props.btn}</button>
        </div>
        <div>
            <img className="absolute top-12 w-20 left-32  App-logo" src={PadLeft} alt="" />
            <img className="absolute right-32 w-20  App-logo" src={PadRight} alt="" />
        </div>
    </div>;
}


export default Join;