import * as React from "react";
import { useContext } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Intro/Header";
import Services from "./component/Services/Services";
import Experience from "./component/Experience/Experience";
import Works from "./component/Works/Works";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { themeContext, ThemeProvider } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme;

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
