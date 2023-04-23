import React, {useState, useEffect} from "react";
// import {FaArrowLeft, FaArrowRight} from "react-icons/fa"

import NewsBlock from "./NewsBlock.js";
import "./Carousel.css";


const CarouselItem = ({children, width, isActive=false, onClick = f => f}) => {
  return (
    <div 
      className="inline-flex mx-1 my-4"
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
      <div className="whitespace-nowrap duration-100" style={{transform: `translateX(${-(activeIndex) * (100 / 3)}%)`}}>
        {
          dataset.map((data, index) => {
            return (
              <CarouselItem  
                onClick={() => setActiveIndex(index)}
                isActive={index === activeIndex}
              >
                <NewsBlock newsDetail={data} />
              </CarouselItem>
            );
          })
        }
      </div>
      {/* <div className="indicators">
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
      </div> */}
    </div>
  );
};

export default Carousel;