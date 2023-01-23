import React from "react";
import "./Services.css";
import HeartEMoji from "../../assets/emoji1.png";
import Card from "../Card/Card";
import Resume from "./C.pdf";

const Services = () => {
  return (
    <div className="services">
      {/*left side */}
      <div className="awesome">
        <span>My Details</span>
        <span>Services</span>
        <span>
          Lorem ispum is simple dummy dfkjfdlkfjdlk
          <br />
          dlfjdl fldkjf dfl
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*right side */}
      <div className="cards">
        <div style={{ left: "23rem", width: "30%" }}>
          <Card
            emoji={HeartEMoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop"}
          />
        </div>
        <div style={{ top: "13rem", left: "11rem", width: "30%" }}>
          <Card
            emoji={HeartEMoji}
            heading={"Developer"}
            detail={"Html,css, JavaScript, React"}
          />
        </div>
        <div style={{ top: "16rem", left: "30rem" }}>
          <Card emoji={HeartEMoji} heading={"UI"} detail={"Html,css"} />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
