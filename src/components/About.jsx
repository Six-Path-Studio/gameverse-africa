import React from 'react';
import AboutImg from '../images/about.png'

const AboutUs = () => {
    return <div>
        <div className="lg:flex lg:w-2/3 mx-auto sm:m-10 justify-between">
            <div>
                <img src={AboutImg} alt="" />
            </div>
            <div className="sm:mt-8 w-full lg:ml-12 my-auto">
                <div className="title text-3xl sm:text-xl">About GAC 2022</div>
                <div className="my-5 text text-base sm:text-xs">Gameverse Africa Conference 22 is a gathering that is geared towards building a strong game ecosystem in Nigeria and beyond. It is a conference that would feature activities like Esport, workshop, Game showcase etc, promoting the African culture through the gaming industry.
                    <br /><br />
                Our aim is to expand the gaming industry in africa, with a better and inclusive representative in the global gaming industry.</div>
                <button className="btn title lg:p-3 sm:p-2 w-52  ">Coming Soon</button>

            </div>
        </div>
    </div>;
}

export default AboutUs;