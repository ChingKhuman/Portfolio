import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Portfolio.css";
import port1 from "../../assets/port1.jpeg";
import port2 from "../../assets/port2.jpeg";
import SimpleImageSlider from "react-simple-image-slider";

const Portfolio = () => {
  const images = [{ url: "../../assets/port1.jpg" }, { url: "images/2.jpg" }];
  return (
    <div className="portfolio">
      {/* heading*/}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />

      {/* slider */}
    </div>
  );
};

export default Portfolio;
