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
            <div className="text-center w-1/2 mx-auto py-40">
                <div className="title text-6xl leading-tight">Gameverse Africa Conference 22’</div>
                <div className="text text-base w-96 mx-auto my-4 leading-light">
                    A universe of game designers, developers, game writers, gamers etc to build, connect and promote the Africa gaming culture.
                </div>
                <button className="btn p-3 w-52 ">Coming Soon</button>
            </div>
            <div className="left">
                <img src={Circle} className="absolute top-20 left-16 App-logo w-8 h-8" alt="" />
                <img src={Times} className="absolute top-60 left-52 App-logo w-6 h-6" alt="" />
                <img src={Rectangle} className="absolute bottom-40 left-20 App-logo w-8 h-8" alt="" />
                <img src={Polygon} className="absolute bottom-32 left-96 App-logo w-8 h-8" alt="" />

            </div>
            <div className="right">
                <img src={Circle} className="absolute top-60 right-16 App-logo w-8 h-8" alt="" />
                <img src={Times} className="absolute top-32 right-52 App-logo w-6 h-6" alt="" />
                <img src={Rectangle} className="absolute bottom-40 right-20 App-logo w-8 h-8" alt="" />
                <img src={Polygon} className="absolute bottom-60 right-96 App-logo w-8 h-8" alt="" />

            </div>
        </motion.div>
    );
}

export default Hero;