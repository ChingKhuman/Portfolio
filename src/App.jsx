import { Card } from "@material-ui/core";
import * as React from "react";

import "./App.css";
import Experience from "./component/Experience/Experience";
import Home from "./component/Home/Home";
import Header from "./component/Intro/Header";
import Navbar from "./component/Navbar/Navbar";
import Portfolio from "./component/Portfolio/Portfolio";
import Services from "./component/Services/Services";
import Works from "./component/Works/Works";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
    </div>
  );
}

export default App;
