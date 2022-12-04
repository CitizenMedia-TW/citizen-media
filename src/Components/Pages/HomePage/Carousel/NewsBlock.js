import React from "react";


const NewsBlock = ({newsDetail}) => {
  const {title, description, img} = newsDetail;

  return (
    <div className="item">
      <div className="news_child">
        <p className="news_title">{title}</p>
        <img className="news_img" src={img} alt="" />
        <p className="news_info">{description}</p>

        <a href="https://google.com" target="_blank" rel="noreferrer">
          <button className="button_more_info">更多內容...</button>
        </a>
      </div>
    </div>
  );
};

export default NewsBlock;