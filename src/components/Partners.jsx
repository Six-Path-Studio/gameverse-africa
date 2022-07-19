import React from 'react';
import Nike from "../images/nike.png";

const Partners = () => {
    const partners = [
        {
            img: Nike
        },
        {
            img: Nike
        }, {
            img: Nike
        }, {
            img: Nike
        }, {
            img: Nike
        }, {
            img: Nike
        },
    ]
    return (
        <div className="text-center">
            <div className="w-2/3 mx-auto pt-6">
                <div className="title text-3xl sm:text-xl">Partners</div>
                <div className="flex flex-wrap my-3 justify-between">
                    {partners.map(partner => (
                        <div className="sm:w-1/3">
                            <img src={partner.img} alt="" />
                        </div>
                    ))}
                </div>
                <div className="flex my-3 flex-wrap justify-between mt-6">
                    {partners.map(partner => (
                        <div className="sm:w-1/3">
                            <img src={partner.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 hero">
                <div className="w-2/3 mx-auto pb-40 pt-8">
                    <div className="title text-3xl sm:text-xl">Community Partners</div>
                    <div className="flex flex-wrap my-3 justify-between mt-6">
                        {partners.map(partner => (
                            <div className="sm:w-1/3">
                                <img src={partner.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;
