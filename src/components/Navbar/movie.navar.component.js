import React from "react";
import logo from "./logo.jpg";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu, BiShareAlt } from "react-icons/bi";
const NvSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">

                <div>
                    <h3 className="text-xl font-bold">
                        It All Starts Here!
                    </h3>
                    <span className="text-gray-400 text-xs flex items-center">Bhubaneshwar<BiChevronDown /></span>
                </div>


                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>

            </div>
        </>
    )
};


const NvLg = () => {
    return (
        <>
            <div className="container mx-auto flex items-center justify-between">

                <div className="flex items-center w-1/2">
                    <div className="w-56 h-11" >
                        <img src={logo} alt="logo" className=" h-full" />
                    </div>
                    <div className="w-full">
                        <div className="flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
                            <BiSearch className="text-xl text-gray-400" />
                            <input type="search" className="w-full text-lg focus:outline-none" placeholder="Search for movies, events, plays, sports, and activities " />
                        </div>
                    </div>

                </div>



                <div className="flex items=center gap-3">
                    <span className="text-gray-300 text-lg flex items-center hover:text-white font-medium cursor-pointer">Bhubaneshwar<BiChevronDown /></span>
                    <button className="bg-red-600 text-white text-sm rounded px-5 py-1">Sign in</button>
                    <div className="w-8 h-8 text-white"><BiMenu className="w-full h-full" /></div>
                </div>



            </div>
        </>
    )
};

const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-700 px-4 py-4">
                <div className="md:hidden">
                    {/* mobile screen */}
                    <NvSm />

                </div>
                <div className="hidden lg:hidden md:block">
                    {/* tablet screen */}
                    <NvSm />
                </div>
                <div className="hidden lg:flex">
                    {/* desktop screen */}
                    <NvLg />
                </div>

            </nav>

        </>
    )


}

export default MovieNavbar;
