import React from "react";
import "./Work.css";
import img1 from "../../assets/ecom.jpg";
import img2 from "../../assets/logoCompany.jpg";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for these</span>
        <span>Brands and Clients</span>
        <span>
          Lorem ispum is simple dummy dfkjfdlkfjdlk
          <br />
          dlfjdl fldkjf dfl fkjflkjfd dfkjf k
          <br />
          Lofjlkdfjdlkfjdlf dflkjdfl dlfkj
        </span>

        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={img1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={img2} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={img1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={img2} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={img1} alt="" />
          </div>
        </div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
