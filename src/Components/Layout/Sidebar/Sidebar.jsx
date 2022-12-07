import React from 'react'
import './Sidebar.css'
import {useState} from 'react';
import LogoNoBG from '../../../Assets/LogoNoBG.png'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import { SidebarData } from './Sidebardata';

const Sidebar = () => {

  const[sidebar,setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className="topLeft">
            <Link to = "#" className = "menu-bars">
                <FaIcons.FaBars onMouseEnter={toggleSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu active":"nav-menu"}>
            <ul className = "nav-menu-items" onMouseLeave={toggleSidebar}>
                <li className = "navbar-title"></li>
                <div className = "search__container">
                    <input className="searchBar" placeholder="搜尋"/>
                </div>
                                
                <div className = "main__item">
                    {SidebarData.map((item,index) => {
                    return (
                            <li key={index} className={item.cName}>
                                <Link to = {item.path}>
                                    {item.icons}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })} 
                </div>   
                <div className="bottomBlock">
                    <div className="line"></div>
                    <img className="logo" src={LogoNoBG} alt="logo" />  
                </div>
            </ul> 
        </nav>
    </>
  )
}

export default Sidebar