import React from "react";
import "./Topbar.css";
// import Logo from "../../../Assets/Logo.png";
// import { Link } from "react-router-dom";
// import Sidebar from "../Sidebar/Sidebar";
import LogoNoBG from '../../../Assets/LogoNoBG.png'

// import AuthService from "../../../services/auth.service";

const Topbar = ({ currentUser, setCurrentUser }) => {
  // const handleLogout = () => {
  //   console.log("Logout");
  //   AuthService.logout(); // Clear local storage
  //   window.alert("Logout completed");
  //   setCurrentUser(null);
  // };

  return (
    <div className="h-full w-full border-b-2 border-gray-500 flex">
      <div className="h-1/6 w-1/6 mb-3 mt-3">
        <img className="logo" src={LogoNoBG} alt="logo" />  
      </div>
      <div className="flex justify-end align-middle h-1/1 w-full items-center align-middle space-x-5 mr-5">
        <div> Our Story </div>
        <div> Sign In </div>
        <div> Get Started </div>
      </div>
    </div>
    // 底下為舊版；因為我登入功能還沒寫進去，所以先註解掉而不刪掉，之後可當參考用

    // <div className="top">
    //   <div className="topLeft">
    //     <Sidebar />
    //   </div>
    //   <div className="topCenter">
    //     <ul className="topCenter-List">
    //       <li className="topCenter-ListItem">
    //         <Link className="link" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li className="topCenter-ListItem">
    //         <Link className="link" to="/popular">
    //           Popular
    //         </Link>
    //       </li>
    //       {currentUser && (
    //         <li>
    //           <Link className="link" onClick={handleLogout} to="/">
    //             Logout
    //           </Link>
    //         </li>
    //       )}
    //     </ul>
    //   </div>
    //   <div className="topRight">
    //     <img className="topbarLogo" src={Logo} alt="Logo" />
    //   </div>
    // </div>
  );
};

export default Topbar;
