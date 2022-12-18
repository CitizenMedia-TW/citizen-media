import React from 'react'

import news from "../../Data/news.json";

import "./NewsPage.css";

const NewsPage = () => {
  return (
    <div className="news_page_container">
        <p className="news_page_title">{news[0]["title"]}</p>
        <img className="news_page_img" src={news[0]["img"]} alt="" />
        <p className="news_page_info">{news[0]["description"]}</p>
    </div>
  );
};

export default NewsPage;