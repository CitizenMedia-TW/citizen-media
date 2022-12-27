
// import news from "../../Data/news.json";

import NewsPage from "./NewsPage";
import NewsPageSide from "./NewsPageSide";


const NewsPageMain = () => {

  return (
    <div className = "news_main_wrapper">
      <NewsPage />
      <NewsPageSide/>
    </div>
  )
}

export default NewsPageMain;