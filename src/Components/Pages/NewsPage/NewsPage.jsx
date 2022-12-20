import React from 'react'
import { useParams } from 'react-router-dom';

import news from "../../Data/news.json";

import "./NewsPage.css";
import NewsPageSide from './NewsPageSide';

const NewsPage = () => {

  const {id} = useParams();

  return (
    <div>
      <div className="news_page_container">
        {/* 用index取得資料，從0開始，所以要-1 */}
        <p className="news_page_title">{news[id-1]["title"]}</p>
        <img className="news_page_img" src={news[id-1]["img"]} alt="" />
        {/* 用writerBlock讓裡面的元素可以並排 */}
        <div className="news_page_writerBlock">
          <p className = "news_page_author">{news[id-1]["author"]}</p>
          <img className = "news_page_banner" src={news[id-1]["banner"]} alt="" />
          <p className = "news_page_status">{news[id-1]["status"]}</p>
        </div>
        <p className="news_page_info">{news[id-1]["description"]}</p>
      </div>
    </div>
    
  );
};

export default NewsPage;