import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

//config
import settings from "../../config/posterConfig.component";

//images
import PremierImages from "../../config/tempPosterConfig";

const Premier = () => {
    return (
        <>
            {/* <div className="flex flex-col items-start py-4">
                <h2 className="text-white text-xl font-bold" >
                    Premiers
                </h2>
                <p className="text-white text-sm ">Brand new release every Friday</p>
            </div>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} isDark />
                ))}
            </Slider> */}
        </>
    );
};
export default Premier;
