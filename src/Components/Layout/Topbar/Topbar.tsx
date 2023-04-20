import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
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

function menuIcon() {
  return (
    <div className="shrink-0 grid grid-rows-4 gap-1">
      <span className="w-8 h-0.5 bg-[#466D9E]" />
      <span className="w-8 h-0.5 bg-[#466D9E]" />
      <span className="w-8 h-0.5 bg-[#F8B61CA3]" />
      <span className="w-8 h-0.5 bg-[#466D9E]" />
    </div>
  );
}

export default function TopbarMain(
  currentUser: any,
  setCurrentUser: React.Dispatch<any>
) {
  return (
    <div className="sticky top-0 w-full px-14 py-5 bg-white flex flex-row">
      <img src={LogoNoBG} alt="公民新聞標誌" className="h-20 mr-12" />
      <div className="shrink flex flex-row justify-between items-end overflow-auto">
        {categories.map((cate) => {
          return (
            <span className="first:ml-0 last:mr-0 mx-3 text-xl text-[#515861]">
              {cate}
            </span>
          );
        })}
      </div>
      <span className="grow" />
      <span className="shrink-0 flex flex-row items-end pb-0.5">
        <IconContext.Provider value={{ size: "20px", color: "#466D9E" }}>
          <FaSearch />
        </IconContext.Provider>
        <span className="w-2" />
        {menuIcon()}
      </span>
    </div>
  );
}

export function Topbar(currentUser: any, setCurrentUser: React.Dispatch<any>) {
  return (
    <div className="sticky top-0 w-full px-10 py-2 flex flex-row justify-between">
      <img src={LogoNoBG} alt="公民新聞標誌" className="h-12" />
      <span className="shrink-0 flex flex-row items-center pb-0.5">
        <IconContext.Provider value={{ size: "20px", color: "#466D9E" }}>
          <AiOutlineDown />
        </IconContext.Provider>
        <span className="w-2" />
        {menuIcon()}
      </span>
    </div>
  );
}
