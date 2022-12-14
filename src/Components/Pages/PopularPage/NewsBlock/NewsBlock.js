import React from "react";

import "./NewsBlock.css";

const NewsBlock = ({newsDetail}) => {
  const {title, description, img} = newsDetail;

  return (
  <div className="popular_item">
    <div className="popular_news_child">
      <p className="popular_news_title">{title}</p>
      <img className="popular_news_img" src={img} alt="" />
      <p className="popular_news_info">{description}</p>
    </div>
  </div>
  );
};

export default NewsBlock;