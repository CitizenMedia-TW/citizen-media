import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import NewsBlock from "./NewsBlock.js";
import "./Carousel.css";
import news from "../../../Data/news.json";


const Carousel = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
  };

  return (
    <OwlCarousel id= "carousel" className="owl-carousel owl-theme" {...options}>
      {
        news.length === 0 ?
          <h2>No News</h2> :
          news.map(news => {
            return (
              <NewsBlock newsDetail={news} />
            );
          })
      }
    </OwlCarousel>
  );
};

export default Carousel;