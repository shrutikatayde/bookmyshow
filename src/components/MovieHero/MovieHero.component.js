import React from "react";

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden" >
                <img
                    src="https://assets-in.bmscdn.com/promotions/cms/creatives/1687845770319_fastxdesktop.jpg"
                    alt=""
                />

            </div>

            <div className="hidden md:block lg:hidden">
            <img
                    src="https://assets-in.bmscdn.com/promotions/cms/creatives/1687845770319_fastxdesktop.jpg"
                    alt=""
                />

            </div>

            <div className="relative hidden lg:block" style={{ height: "30rem" }}>
                
                <div className="absolute h-full w-full z-10" style={{ backgroundImage: "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%" }}>
                
                </div>
            <img
                    src="https://assets-in.bmscdn.com/promotions/cms/creatives/1687845770319_fastxdesktop.jpg"
                    alt=""
                    className="w-full h-full"
                />

            </div>


        </>
    );
};

export default MovieHero;