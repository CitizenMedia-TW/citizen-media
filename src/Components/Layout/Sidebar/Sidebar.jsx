import React from 'react'
import './Sidebar.css'
import {useState} from 'react';
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import { SidebarData } from './Sidebardata';
import Logo from "../../../Assets/SideLogo.png";

const Sidebar = () => {

  const[sidebar,setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div>
            <Link to = "#" class='ml-1 mr-4 text-3xl bg-none text-white'>
                <FaIcons.FaBars onMouseEnter={toggleSidebar}/>
            </Link>
        </div>
        <nav class={sidebar ? 'bg-side-bg-blue  border-r-2 border-solid w-[270px] h-[100vh] flex justify-center fixed top-0 left-0 transition-[200ms]' : 'bg-side-bg-blue border-r-2 border-solid w-[270px] h- flex justify-center fixed top-0 left-[-270px] transition-[200ms]'}>
        <div class='absolute top-0 w-full h-16 bg-side-bg-blue'>
            <input type='button' class='bg-close w-10 h-1/6 ml-56 mt-3 pt-6'></input>
        </div>
            <ul class='w-full' onMouseLeave={toggleSidebar}>
                <div class= 'h-[100vh_-_250px] bottom-0 z-[500] flex flex-col overflow-y-auto border-b-0 mt-[75%] ml-[5%] mr-[12%] '>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to = {item.path}>
                                    <span>{item.title}<div class='w-32 mb-1 mt-1 flex justify-center items-center border-t-[2px] border-solid border-t-line-border-bar bg-line-border-bar'></div></span>
                                </Link>
                            </li>
                        )
                    })}
                </div>   
            </ul> 
        <div class='absolute bottom-0 w-full h-[70px] bg-side-bg-blue'>
            <img src={Logo} class='flex w-1/2 ml-[40%] pt-[5%]'></img>
        </div>
        </nav>
    </>
  )
}

export default Sidebar