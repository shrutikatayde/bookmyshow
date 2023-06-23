import React from "react";
import EntertainmentCrdSlider from "../components/Entertainment/EntertainmentCard.component";
const HomePage = () => {
    return (
        <><div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-900">
                The best of Entertainment
            </h1>
            <EntertainmentCrdSlider />
        </div>
            
        </>
    )   
}
export default HomePage;