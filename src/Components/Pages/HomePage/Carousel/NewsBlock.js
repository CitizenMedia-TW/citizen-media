import React from "react";
import { Link } from 'react-router-dom'


const NewsBlock = ({newsDetail}) => {
  const {title, description, img, id} = newsDetail;

  return (
    <div className="w-[320px] h-[150px] bg-zinc-200 opacity-70 rounded-md">
      <p className="news_title">{"Bootcamp"}</p>
      <p className="news_title">{title}</p>
    </div>
  );
};

export default NewsBlock;