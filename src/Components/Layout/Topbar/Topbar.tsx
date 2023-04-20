import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import LogoNoBG from "../../../Assets/LogoNoBG.png";
import Sidebar from "../Sidebar/Sidebar";
import AuthService from "../../../services/auth.service";

const categories = [
  "World",
  "Taiwan",
  "Politics",
  "Business",
  "Sports",
  "Arts",
  "Books",
  "Style",
  "Food",
  "Travel",
];

function handleLogout(setCurrentUser: React.Dispatch<any>) {
  console.log("Logout");
  AuthService.logout();
  window.alert("Logout completed");
  setCurrentUser(null);
}

export default function TopbarMain(
  currentUser: any,
  setCurrentUser: React.Dispatch<any>
) {
  return (
    <div className="sticky top-0 w-full px-14 py-5 bg-white flex flex-row">
      <img src={LogoNoBG} className="h-20 mr-12" />
      <div className="shrink flex flex-row justify-between items-end overflow-auto">
        {categories.map((cate) => {
          return (
            <span className="first:ml-0 last:mr-0 mx-3 text-xl">{cate}</span>
          );
        })}
      </div>
      <span className="grow" />
      <span className="shrink-0 flex flex-row items-end pb-0.5">
        <IconContext.Provider value={{ size: "20px" }}>
          <FaSearch />
          <span className="w-9" />
          <AiOutlineMenu />
        </IconContext.Provider>
      </span>
    </div>
  );
}

export function Topbar(currentUser: any, setCurrentUser: React.Dispatch<any>) {
  return (
    <div className="sticky top-0 w-full px-10 py-2 flex flex-row justify-between">
      <img src={LogoNoBG} className="h-12" />
      <span className="shrink-0 flex flex-row items-center pb-0.5">
        <IconContext.Provider value={{ size: "20px" }}>
          <AiOutlineDown />
          <span className="w-7" />
          <AiOutlineMenu />
        </IconContext.Provider>
      </span>
    </div>
  );
}
