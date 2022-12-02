import React from 'react'
import {useState} from 'react';
import './Topbar.css'
import Logo from '../../Assets/Logo.png'
import Vector from '../../Assets/Vector.png'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import { SidebarData } from '../Sidebar/Sidebardata';

const Topbar = () => {

  const[sidebar,setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <div className="top">
      <div className="topLeft">
          <Link to = "#" className = "menu-bars">
              <FaIcons.FaBars onMouseEnter={showSidebar}/>
          </Link>
      </div>

      {/* sidebar功能 */}
      <nav className={sidebar ? "nav-menu active":"nav-menu"}>
          <ul className = "nav-menu-items" onMouseLeave={showSidebar}>
              <li className = "navbar-title"></li>
              <div className = "search__container">
                  <input class="searchBar" placeholder="搜尋"/>
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
                  <div class="line"></div>
                  <img className="logo" src={Logo} alt="logo" />  
              </div>
          </ul> 
      </nav>
      {/* sidebar功能 */}

      <div className="topCenter">
        <ul className="topCenter-List">
          <li className="topCenter-ListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topCenter-ListItem">
            <Link className="link" to="/politics">
              Politics
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topbarLogo" src={Logo} alt="Logo"/>
      </div>
    </div>
  )
}

export default Topbar
