import React from "react";
import { Link } from 'react-router-dom'


const NewsBlock = ({newsDetail}) => {
  const {title, description, img, id} = newsDetail;

  return (
    <div className="news_child">
      <p className="news_title">{title}</p>
      <img className="news_img" src={img} alt="" />
      <p className="news_info">{description}</p>

      <Link to = {`/news/${id}`} rel="noreferrer">
        <button className="button_more_info">更多內容...</button>
      </Link>
    </div>
  );
};

export default NewsBlock;