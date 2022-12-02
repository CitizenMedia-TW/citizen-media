import React from 'react'
import './Topbar.css'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';

const Topbar = () => {

  return (
    <div className="top">
      <div className="topLeft">
              <Sidebar />
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
