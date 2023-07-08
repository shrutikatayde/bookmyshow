import React from "react";
import Poster from "../components/Poster/poster.component";

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full">
                    <h2 className="text-2xl font-bold">Plays in Amravati</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 my-3">

                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359309-whfgtchgdn-portrait.jpg"
                                title='PAW Patrol Live! "Race to the Rescue"'
                                subtitle="Nita Mukesh Ambani Cultural Centre: Mumbai"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 my-3">
                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxNCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00098092-kxqpghhxlv-portrait.jpg"
                                title='Moruchi Mavshi'
                                subtitle="Saint Dnyaneshwar Sanskrutik Bhavan: Amravati"
                            />




                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Plays;