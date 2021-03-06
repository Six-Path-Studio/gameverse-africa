import React from 'react';
import Slider from "react-slick";

const Slides = (props) => {
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
                    dots: false,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                }
            }
        ]
    };
    return (
        <div className="lg:w-2/3 mx-auto my-20 sm:m-10">
            <div className="title lg:text-3xl sm:text-xl py-3">
                {props.title}
            </div>
            <Slider {...settings}>
                {props.images.map(image => (
                    <div>
                        <img className="lg:w-52" src={image.img} alt="" />
                    </div>
                ))}
            </Slider>

        </div>
    );
}

export default Slides;
