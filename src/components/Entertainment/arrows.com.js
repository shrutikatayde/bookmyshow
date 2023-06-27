import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
export const NArrow = (props) => {
    //const { className, style, onClick } = props;
    return (
        <>
            <div
                className={props.className}
                style={{
                    ...props.style, backgroundColor: "gray",
                    height: "40px",
                    width: "40px",
                    color: "white",
                    fontSize: "25px",
                    justifyContent: "center",
                    display: "grid",
                    alignContent: "center",
                    borderRadius: "60px",

                }}
                onClick={props.onClick}
            ><BsChevronRight /></div>
        </>
    );
};
export const PArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{
                    ...props.style, backgroundColor: "gray",
                    height: "40px",
                    width: "40px",
                    color: "white",
                    fontSize: "25px",
                    justifyContent: "center",
                    display: "grid",
                    alignContent: "center",
                    borderRadius: "60px",
                }}
                onClick={props.onClick}
            ><BsChevronLeft /></div>
        </>
    );
};