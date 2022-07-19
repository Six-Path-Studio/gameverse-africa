import React from 'react';
import Circle from "../images/shapes/circle.svg"
import Times from "../images/shapes/times.svg"
import Rectangle from "../images/shapes/Rectangle.svg"
import Polygon from "../images/shapes/Polygon.svg"
import { motion } from "framer-motion"
import HeaderNav from "./HeaderNav"


const Hero = () => {
    return (
        <motion.div className="hero">
            <HeaderNav />
            <div className="text-center lg:w-1/2 sm:px-10 mx-auto py-40">
                <div className="title text-3xl lg:text-6xl leading-tight">Gameverse Africa Conference 22’</div>
                <div className="text sm:text-xs text-base lg:w-96 mx-auto my-4 leading-light">
                    A universe of game designers, developers, game writers, gamers etc to build, connect and promote the Africa gaming culture.
                </div>
                <button className="btn sm:p-2 lg:p-3 lg:w-52 sm:w-40">Coming Soon</button>
            </div>
            <div className="left">
                <img src={Circle} className="absolute lg:top-20 lg:left-16 sm:bottom-6 sm:left-20 App-logo w-8 h-8 sm:w-6" alt="" />
                <img src={Times} className="absolute lg:top-60 sm:bottom-0 left-52 App-logo w-6 h-6 sm:w-4" alt="" />
                <img src={Rectangle} className="absolute lg:bottom-40 lg:left-20 sm:right-10 sm:bottom-2 App-logo w-8 h-8 sm:w-4" alt="" />
                <img src={Polygon} className="absolute lg:bottom-32 lg:left-96 sm:left-6 sm:bottom-10 App-logo w-8 h-8 sm:w-6" alt="" />

            </div>
            <div className="right">
                <img src={Circle} className="absolute lg:top-32 lg:right-16 sm:top-20 sm:left-20 App-logo w-8 h-8 sm:w-6" alt="" />
                <img src={Times} className="absolute lg:top-32 lg:right-52 sm:top-40 sm:right-10 App-logo w-6 h-6 sm:w-4" alt="" />
                <img src={Rectangle} className="absolute lg:bottom-40 lg:right-20 sm:top-32 sm:left-44 App-logo w-8 h-8 sm:w-6" alt="" />
                <img src={Polygon} className="absolute lg:bottom-60 lg:right-96 sm:left-10 sm:top-52 App-logo w-8 h-8 sm:w-6" alt="" />
            </div>
        </motion.div>
    );
}

export default Hero;