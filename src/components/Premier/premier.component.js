import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

const Premier = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slideToScroll: 2,
    InfiniteSlide: 0,
  };

  const PremierImages = [
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
      alt: "ISeeYou",
      title: "I See You",
      subtitle: "Crime, Horror, Mystery, Thriller",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {PremierImages.map((image) => (
          <Poster {...image} />
        ))}
      </Slider>
    </>
  );
};
export default Premier;
