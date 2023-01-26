import React from "react";
import "./Header.css";
import vivo from "../../assets/planet.svg";
import vivo1 from "../../assets/earth4.svg";
import nao from "../../assets/nao2.jpg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <div className="intro" id="Header">
        <div className="i-left">
          <div className="i-name">
            <span> Hi I am </span>
            <span>Ching</span>
            <span>
              Front end Developer with more than 1 years of experience in web
              designing and development, producting Quality work
            </span>
          </div>
          <button className="  i-button"> Hire me</button>
          <div className="i-icon">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={vivo} alt="vivo" />
          <img src={vivo1} alt="vivo1" />
          {/* <img src={nao} alt="logo" /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
