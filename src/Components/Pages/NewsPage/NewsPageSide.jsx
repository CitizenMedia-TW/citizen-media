import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import news from "../../Data/news.json";

import "./NewsPage.css";

const NewsPageSide = () => {

  const {id} = useParams();

  // 用Array儲存目前新聞數，之後須改成動態捕捉新聞數量並更新Array
  var arr = [0, 1, 2, 3, 4];
  for( var i = 0; i < arr.length; i++){ 
      // 讓旁邊feature去掉目前的新聞
      if ( arr[i] === id-1) { 
          arr.splice(i, 1); 
      }
  }

  return (
    <div>
      <p className="news_page_feature">Feature</p>
      <div className="news_page_side_container">
        {/* 用index取得資料 */}

        {arr.map(num => {
          return (
            <Link to = {`/news/${news[num]["id"]}`} >
              <p className="news_side_title">{news[num]["title"]}</p>
              <img className="news_side_img" src={news[num]["img"]} alt="" />
            </Link>
          )
        })}

        {/* <Link to = {`/news/${news[arr[0]]["id"]}`} >
          <p className="news_side_title">{news[arr[0]]["title"]}</p>
          <img className="news_side_img" src={news[arr[0]]["img"]} alt="" />
        </Link>
        
        <Link to = {`/news/${news[arr[1]]["id"]}`} >
          <p className="news_side_title">{news[arr[1]]["title"]}</p>
          <img className="news_side_img" src={news[arr[1]]["img"]} alt="" />
        </Link>

        <Link to = {`/news/${news[arr[2]]["id"]}`} >
          <p className="news_side_title">{news[arr[2]]["title"]}</p>
          <img className="news_side_img" src={news[arr[2]]["img"]} alt="" />
        </Link> */}
      </div>
    </div>
    
  );
};

export default NewsPageSide;