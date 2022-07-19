import React from 'react';
import Slider from "react-slick";
import Img from "../images/activities/slide.png"
import Img1 from "../images/activities/slide1.png"
import Img2 from "../images/activities/slide2.png"
import Img3 from "../images/activities/slide3.png"

const Slides = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className="w-2/3 mx-auto my-20">
            <div className="title text-3xl py-3">
                Activities
            </div>
            <Slider {...settings}>
                <div>
                    <img className="w-52" src={Img} alt="" />
                </div>
                <div>
                    <img className="w-52" src={Img1} alt="" />
                </div>
                <div>
                    <img className="w-52" src={Img2} alt="" />
                </div>
                <div>
                    <img className="w-52" src={Img3} alt="" />
                </div>
            </Slider>

        </div>
    );
}

export default Slides;
