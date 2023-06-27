import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";
import settings from "../../config/posterConfig.component";

const PosterSlider = (props) => {
    return (
        <>
            <div className="flex flex-col items-start py-4">
                <h2 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`
                }>
                    {props.title}
                </h2>
                <p className={`text-white text-sm  ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
            </div>

            <Slider {...settings}>
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </>
    )

}

export default PosterSlider;