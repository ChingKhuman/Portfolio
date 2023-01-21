import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Portfolio.css";
import port1 from "../../assets/port1.jpeg";
import port2 from "../../assets/port2.jpeg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading*/}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper>
        <SwiperSlide>
          <img src={port1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={port2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
