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
import Toogle from "../toogle/Toogle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Ching</div>
          <Toogle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none", color: "white" }}>
              <Link
                spy={true}
                to="Home"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                to="Services"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Services</li>
              </Link>
              <Link
                spy={true}
                to="Works"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Work</li>
              </Link>
              <Link
                spy={true}
                to="Portfolio"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Portfolio</li>
              </Link>
              <Link
                spy={true}
                to="Experience"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Experience</li>
              </Link>
            </ul>
          </div>
          <Link spy={true} to="Contact" smooth={true}>
            <button className="n-button">Contact </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
