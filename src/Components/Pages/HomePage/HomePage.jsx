import React from "react";

import Carousel from "./Carousel/Carousel.js";
import Title from "./Title/Title.js";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="bg">
      <Title />
      <Carousel />
    </div>
  )
}

export default HomePage