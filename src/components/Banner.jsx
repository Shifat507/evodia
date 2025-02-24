"use client"; 
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import slider1 from '../assets/bannerImg/banner1.jpg';
import slider2 from '../assets/bannerImg/banner2.jpg';
import slider3 from '../assets/bannerImg/banner3.jpg';
import slider4 from '../assets/bannerImg/banner4.jpg';
import slider5 from '../assets/bannerImg/banner5.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel >
                <div>
                    <Image src={slider1} alt="Banner 1" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <Image src={slider2} alt="Banner 2" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <Image src={slider3} alt="Banner 3" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <Image src={slider4} alt="Banner 4" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                    <Image src={slider5} alt="Banner 5" />
                    {/* <p className="legend">Legend 5</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;