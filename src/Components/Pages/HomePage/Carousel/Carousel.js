import React, {useState, useEffect} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"

import NewsBlock from "./NewsBlock.js";
import "./Carousel.css";


const CarouselItem = ({children, width, isActive=false, onClick = f => f}) => {
  return (
    <div 
      className="carousel-item"
      id={`${isActive ? "active-item" : ""}`}
      style={{width: width}} 
      onClick={onClick}
    >
      {children}
    </div>
  ); 
};

const Carousel = ({dataset}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const length = dataset.length;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = length - 1;
    }
    else if (newIndex >= length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div 
      className="carousel"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div className="inner" style={{transform: `translateX(${-(activeIndex - 1) * (100 / 3)}%)`}}>
        {
          dataset.map((data, index) => {
            return (
              <CarouselItem  
                width={`${100 / 3}%`} 
                onClick={() => setActiveIndex(index)}
                isActive={index === activeIndex}
              >
                <NewsBlock newsDetail={data} />
              </CarouselItem>
            );
          })
        }
        <div className="carousel-more_item">
          <div
            className="carousel-more_child"
            width={`${100 / 3}%`}
            onClick={() => console.log("More")}
          >
            <hr className="carousel-more_line"/>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <div className="carousel-more_info">
                <p>點此查看</p>
                <p>更多內容...</p>
              </div>
            </a>
            <hr className="carousel-more_line"/>
          </div>
        </div>
      </div>
      <span className="arrow_button_container left_arrow_button_container">
        <button className="arrow_button" onClick={() => {
          updateIndex(activeIndex - 1);
        }}>
          <FaArrowLeft /> 
        </button>
      </span>
      <span className="arrow_button_container right_arrow_button_container">
        <button className="arrow_button" onClick={() => {
          updateIndex(activeIndex + 1);
        }}>
          <FaArrowRight /> 
        </button>
      </span>
      <div className="indicators">
        {
          dataset.map((data, index) => {
            return (
              <button 
                className={`${index === activeIndex ? "active" : ""}`}
                onClick={() => {
                  updateIndex(index);
                }}
              >
              </button>
            );
          })
        }
      </div>
    </div>
  );
};

export default Carousel;