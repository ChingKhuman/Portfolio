import React from "react";
import "./Footer.css";
import footer from "../../assets/Footer.jpg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={footer} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Khumanchingtham123@gmail.com</span>
        <div className="f-icons">
          <Insta color="blue" size="3rem" />
          <Facebook color="blue" size="3rem" />
          <Github color="blue" size="3rem" />
        </div>
      </div>

      {/* <div>
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
          </div> */}
    </div>
  );
};

export default Footer;
