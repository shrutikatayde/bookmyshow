import { NArrow, PArrow } from "../components/Entertainment/arrows.com"

const settings = {
    arrows: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slideToScroll: 3,
    InfiniteSlide: 0,
    nextArrow: <NArrow />,
    prevArrow: <PArrow />,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                arrows:false,
                slidesToShow: 4,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 767,
            settings: {
                arrows:false,
                slidesToShow: 3,
                slidesToScroll: 1,

            }
        }
    ]
};

export default settings;