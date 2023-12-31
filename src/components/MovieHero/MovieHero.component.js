import React from "react";
import {launchRazorpay} from "../../pages/Movie.Page";
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

            <div className="flex " style={{ backgroundColor: "#1A1A1A", margin: "0px auto" }}>
                <div className="relative hidden lg:block " style={{ height: "38rem", width: "100rem", margin: "0px auto" }}>
                    <div className="absolute h-full w-full z-10" style={{ backgroundImage: "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%" }}>

                        <div className="absolute flex left-9 w-full h-full top-14 z-30 gap-3">
                            <div className="w-80 h-92">
                                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00122562-bsunzjgbyq-portrait.jpg" alt="" className="" />

                            </div>
                            <div className="">
                                <button onClick={launchRazorpay} class="bg-blue-500 hover:bg-blue-700 text-white w-32 font-bold py-2 px-4 rounded">
                                    Book tickets
                                </button>
                            </div>
                        </div>



                    </div>


                    <img
                        src="https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/fast-x-et00122562-1687423131.jpg"
                        alt=""
                        className="w-full h-full "
                    />

                </div>
            </div>




        </>
    );
};

export default MovieHero;