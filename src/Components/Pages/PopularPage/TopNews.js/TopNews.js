import React from "react";

import NewsBlock from "../NewsBlock/NewsBlock.js";
import news from "../../../Data/news.json";


const TopNews = () => {
  return (
  <div className="top_news">
    <NewsBlock newsDetail={news[0]} />
    <hr className="vertical_line" />
    <NewsBlock newsDetail={news[0]} />
  </div>
  );
};

export default TopNews;