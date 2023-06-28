//Transforms component into another components
//Adding additional functionalities to the existing components

import React from "react";
import { Route } from "react-router-dom";

//Layouts
import MovieLayout from "../Layouts/MovieLayout";
const MovieHOC = ({ component: Component, ...rest }) => {
    //components
    //props ->> path and exact property
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <MovieLayout>
                        <Component {...props} />
                    </MovieLayout>
                )}

            />
        </>

    )

};

export default MovieHOC;