import React from 'react'
import { useParams } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import news from "../../Data/news.json";

import "./NewsPage.css";

const NewsPage = () => {

  const {id} = useParams();

  const date = new Date();

  let Year = date.getFullYear();
  let Month = date.getMonth();
  let Today = date.getDate();
  let Hours = date.getHours();
  let Minutes = date.getMinutes();

  const timeArray = news[id-1]["time"]
  

  return (
    
    <div>
      <div className="news_page_container">
        {/* 用index取得資料，從0開始，所以要-1 */}
        <p className="news_page_title">{news[id-1]["title"]}
        <span className="news_page_clock">
          <FaIcons.FaClock />
          <p className="news_page_timer">
            {Year-timeArray[0]!==0 ? (Year-timeArray[0])+'年前' : 
              Month-timeArray[1]+1!==0 ? (Month-timeArray[1]+1)+'個月前' :
              Today-timeArray[2]!==0 ? (Today-timeArray[2])+'天前' :
              Hours-timeArray[3]!==0 ? (Hours-timeArray[3])+'小時前' :
              Minutes-timeArray[4]!==0? (Minutes-timeArray[4])+'分鐘前':'剛剛'}
          </p>
        </span>
        </p>
        {/* <p>{time}</p> */}
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