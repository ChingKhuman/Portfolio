import React from "react";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import "./Toogle.css";

const Toogle = () => {
  return (
    <div className="toogle">
      <Sun />
      <Moon />
      <div className="t-button"></div>
    </div>
  );
};

export default Toogle;
