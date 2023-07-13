
import axios from "axios";
import React, { useEffect, useState } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPoster from "../config/tempPosterConfig";



const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    const [onTheAir, setOnTheAir] = useState([]);
    useEffect(() => {
        const requestOnTheAir = async () => {
            const getOnTheAir = await axios.get("/tv/on_the_air");
            setOnTheAir(getOnTheAir.data.results);
        };
        requestOnTheAir();
    }, []);

    return (
        <>
            <div className=" flex flex-col gap-10">

                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                        The best of Entertainment
                    </h1>
                    <EntertainmentCardSlider />
                </div>

                <div className="bg-navCol-200 py-8">

                    <div className="container mx-auto px-4 ">
                        <div className="flex">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="premier" className="w-full h-full py-4" />
                        </div>
                        <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new release every Friday" isDark />
                    </div>
                </div>

            </div>

            <div className="container mx-auto px-4">
                <PosterSlider
                    images={onTheAir}
                    title="Online Streaming Events"
                    isDark={false} />
            </div>

        </>
    );
};

export default HomePage;