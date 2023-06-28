import React from "react";
import MovieNavbar from "../components/Navbar/movie.navar.component";
const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar />
           {props.children}
        </>
    );
};


export default MovieLayout;