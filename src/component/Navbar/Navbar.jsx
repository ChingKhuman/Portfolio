import React from "react";
import "./Navbar.css";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Works from "../Works/Works";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Intro/Header";

const Navbar = () => {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Ching</div>
          <span>toggle</span>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <button className="n-button">Contact </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
