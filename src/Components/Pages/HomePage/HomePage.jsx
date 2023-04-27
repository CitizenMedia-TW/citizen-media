import React from "react";

import Recommand from "./Recommand/Recommand.js";
import SideScrollNews from "./SideScrollNews/SideScrollNews.js";
import Author from "./Author/Author.jsx";

import "./HomePage.css";
import SideNews from "./SideNews/SideNews.jsx";
import { FiEye, FiPenTool } from "react-icons/fi"


const HomePage = () => {
  return (
    <div className="">
      <Recommand />
      <div className="w-full h-[1rem] border-b-2">
        
      </div>
      <div className="flex flex-row h-full">
          <SideScrollNews />
          <SideNews />      
      </div>
      <div className="border-y-2 border-gray-300 h-[4rem] ">
        <div className="h-full flex items-center font-bold flexs">
          <div className="mt-1 ml-6 mr-2">
            <FiEye />
          </div>
          Most viewed
        </div>
        <div className="h-[20rem] my-1 bg-amber-50">

        </div>
        <div className="h-[16rem] border-t-2 border-gray-300">
          <div className="pl-4 pt-3 font-bold flex ">
            <div className="mt-1 mr-2">
              <FiPenTool />
            </div>
            Trace Author
          </div>
          <Author />
        </div>
      </div>
    </div>
  )
}

export default HomePage;