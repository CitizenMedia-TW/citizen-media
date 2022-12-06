import React from "react";

import Title from "./Title/Title.js";
import TopNews from "./TopNews.js/TopNews.js";
import SpecialNews from "./SpecialNews/SpecialNews.js";

import "./PopularPage.css";

const PopularPage = () => {
  return (
    <div className="popular_bg">
      <Title />
      <TopNews />
      <SpecialNews />
      <SpecialNews />
    </div>
  );
};

export default PopularPage;