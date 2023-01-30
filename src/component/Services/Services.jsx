import React from "react";
import "./Services.css";
import HeartEMoji from "../../assets/emoji1.png";
import Card from "../Card/Card";
import Resume from "./chintham-cv1-up.pdf";

const Services = () => {
  return (
    <div className="services" id="Services">
      {/*left side */}
      <div className="awesome">
        <span>My Details</span>
        <span>Services</span>
        <span>
          Ecommerce plateform, Data Binding,
          <br /> Restful Api, Typescript, Front End and so on
          <br />
          React Native, Android plateform, etc
        </span>
        <a href={Resume} download>
          <button className=" s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*right side */}
      <div className="cards">
        <div style={{ left: "17rem", width: "50%" }}>
          <Card
            emoji={HeartEMoji}
            heading={"Design"}
            detail={"Figma,Photoshop"}
          />
        </div>
        <div style={{ top: "13rem", left: "5rem", width: "30%" }}>
          <Card
            emoji={HeartEMoji}
            heading={"Developer"}
            detail={" JavaScript, React"}
          />
        </div>
        <div style={{ top: "16rem", left: "25rem" }}>
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
