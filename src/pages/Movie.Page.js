import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { SiBookmyshow } from 'react-icons/si';

const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-3 lg:w-1/2 lg:ml-14 ">
        <div className="flex flex-col items-start gap-3 ">
          <h2 className="text-gray-1000 font-bold text-3xl">About the Movie</h2>
          <p className="text-xl">
            Dom Toretto and his family must confront a terrifying new enemy
            who`s fueled by revenge. 
          </p>
        </div>

        <div className="my-8">
          <hr />
        </div>


        <div className="">
          <h2 className="text-gray-1000 font-bold text-3xl">
            Top offers for you
          </h2>
          <div className="flex items-start gap-2 bg-navCol-100 border-yellow-400 border-dashed border-2 rounded-md p-3">
            <div className="w-8 h-8">
              <SiBookmyshow className="w-full h-full text-red-600" />
            </div>

            <div className="flex flex-col items-start">
              <h3 className="text-xl text-gray-900 font-medium">B1G1 Ticket Free - Use Code INDYBOGO</h3>
              <p className="text-gray-600">Tap to view details</p>
            </div>

          </div>

        </div>
      </div>


    </>
  );
};

export default Movie;
