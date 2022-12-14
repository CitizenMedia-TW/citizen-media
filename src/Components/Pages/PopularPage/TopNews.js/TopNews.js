import React from "react";

import news from "../../../Data/news.json";

import "./TopNews.css";

const TopNews = () => {
  return (
  <div className="top_news_container">
    <div className="top_news_item">
      <div className="top_news_child">
        <p className="top_news_title">{news[0]["title"]}</p>
        <img className="top_news_img" src={news[0]["img"]} alt="" />
        <p className="top_news_info">{news[0]["description"]}</p>
      </div>
    </div>
    
    <div className="vertical_line" ></div>

    <div className="second_news_item">
      <div className="second_news_child">
        <p className="second_news_title">{news[0]["title"]}</p>
        <img className="second_news_img" src={news[0]["img"]} alt="" />
        <p className="second_news_info">{news[0]["description"]}</p>
      </div>
    </div>
  </div>
  );
};

export default TopNews;