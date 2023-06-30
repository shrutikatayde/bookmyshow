//Transforms component into another components
//Adding additional functionalities to the existing components

import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../Layouts/DefaultLayout";

const DefaultHOC = ({ component: Component, ...rest }) => {
    //components
    //props ->> path and exact property
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                )}

            />
        </>
    );
};
export default DefaultHOC;