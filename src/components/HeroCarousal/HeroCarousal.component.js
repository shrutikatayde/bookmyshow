import React from "react";
import HeroSlider from "react-slick";

//Component
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { renderIntoDocument } from "react-dom/test-utils";

const HeroCarousal = () => {

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinte: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    }
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };

    const images = [
        "https://wallpapers.com/images/featured/dkttxahzpl44tbsa.jpg",
        "https://www.streampicker.de/files/images/202210/0/lost-in-space-verschollen-zwischen-fremden-welten,998446_crop16x9_1280.jpg",
        "https://wallpaperaccess.com/full/4486484.jpg",
        "https://13stars.eu/wp-content/uploads/2022/01/squid.png",
        "https://f.ptcdn.info/703/028/000/1424622166-gameofthro-o.jpg"
    ]
    return (
        <>

            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            < div className="w-full h-64 md: h-80 py-3">
                                <img src={image} alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>


            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {
                        images.map((image) => (
                            < div className="w-full h-96 px-2 py-3">
                                <img src={image} alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>

            </div>

        </>
    );
}
export default HeroCarousal;

