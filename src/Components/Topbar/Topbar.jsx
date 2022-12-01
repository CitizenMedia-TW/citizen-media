import React from 'react'
import './Topbar.css'
import Logo from '../../Assets/Logo.png'
import Vector from '../../Assets/Vector.png'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <button className="btn">
          <img className="topbarVector" src={Vector} alt="sidebar-icon"/>
        </button>
      </div>
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
