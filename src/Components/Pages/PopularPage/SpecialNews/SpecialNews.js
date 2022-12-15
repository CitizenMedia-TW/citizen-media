import React from "react";

import NewsBlock from "../NewsBlock/NewsBlock.js";
import news from "../../../Data/news.json";

import "./SpecialNews.css";

const SpecialNews = () => {
  return (
    <>
      <div className="specials">
        <h2 className="specials_title">Specials</h2>
        <hr className="line"/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <NewsBlock newsDetail={news[0]}/>
        <NewsBlock newsDetail={news[0]}/>
        <NewsBlock newsDetail={news[0]}/>
        <NewsBlock newsDetail={news[0]}/>
      </div>
    </>
  );
};

export default SpecialNews;
