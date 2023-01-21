import { Card } from "@material-ui/core";
import * as React from "react";

import "./App.css";
import Contact from "./component/Contact/Contact";
import Experience from "./component/Experience/Experience";
import Footer from "./component/Footer/Footer";

import Header from "./component/Intro/Header";
import Navbar from "./component/Navbar/Navbar";
import Portfolio from "./component/Portfolio/Portfolio";
import Services from "./component/Services/Services";
import Testimonial from "./component/Testimonial/Testimonial";
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
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
