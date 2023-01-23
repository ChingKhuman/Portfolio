import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./component/Home";

import Header from "./component/Intro/Header";
import Navbar from "./component/Navbar/Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/port" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
