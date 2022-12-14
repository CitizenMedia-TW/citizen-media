import React from "react";

import Carousel from "./Carousel/Carousel.js";
import Title from "./Title/Title.js";

import news from "../../Data/news.json";

import "./HomePage.css";


const HomePage = () => {
  return (
    <div className="home_bg">
      <Title />
      <Carousel dataset={news}/>
    </div>
  )
}

export default HomePage;