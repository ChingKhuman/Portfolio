import React from "react";

import "./Portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading*/}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Carousel>
        <div className="image">
          <img src="../../assets/port1.jpg" />
        </div>
        <div>
          <img src="../../assets/port2.jpg" />
        </div>
      </Carousel>

      {/* slider */}
    </div>
  );
};

export default Portfolio;
