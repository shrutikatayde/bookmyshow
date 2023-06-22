import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export const NextArrow = (props) => {
    //const { className, style, onClick } = props;
    return (
        <>
            <div
                className={props.className}
                style={{
                    ...props.style, backgroundColor: "rgb(0 0 0 / 51%)",
                    height: "50px",
                    width: "50px",
                    color: "white",
                    fontSize: "25px",
                    justifyContent: "center",
                    display: "grid",
                    alignContent: "center",
                    top: "45%"
                }}
                onClick={props.onClick}
           ><BsChevronRight/></div>
        </>
    );
};
export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{
                    ...props.style, backgroundColor: "rgb(0 0 0 / 51%)",
                    height: "50px",
                    width: "50px",
                    color: "white",
                    fontSize: "25px",
                    justifyContent: "center",
                    display: "grid",
                    alignContent: "center",
                    top: "45%"
                }}
                onClick={props.onClick}
            ><BsChevronLeft/></div> 
        </>
    );
};

// export const Button = (props) => {
//     return (
//       <>
//         <button
//           className={props.className}
//           style={{ ...props.style, background: "red", display: 'flex', alignItems: 'center', gap: '1rem' }}
//           onClick={props.onClick}
//         >
//           <p>{props.content}</p>
//           {
//             props.direction === 'next' ?
//               <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/arrow.png" alt="arrow" />
//               :
//               <img width="26" height="26" src="https://img.icons8.com/metro/26/long-arrow-left.png" alt="long-arrow-left" />
//           }
//         </button>
//       </>
//     )
//   }


{/* <button
    className={props.className}
    style={{ ...props.style, backgroundColor: "rgb(0 0 0 / 51%)" }}
    onClick={props.onClick}
>
    {/* <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/arrow.png"/> */}
{/* <BsChevronRight />
</button>

import Slider from "react-slick"; */}





// const Button = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <>
//         <div
//           className={className}
//           style={{ ...style, display: "block", background: "green" }}
//           onClick={onClick}
//         />
//       </>
//     )
//   }

// const App = () => {

//   const settings = {
//     arrows: true,
//     autoplay: true,
//     centerMode: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerPadding: '300px',
//     infinite: true,
//     nextArrow: <Button content="next Arrow" direction="next" />,
//     prevArrow: <Button content="previous Arrow" />

//   }

//   return (
//     <>
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//       </Slider>
//     </>
//   )
// }

// export default App;