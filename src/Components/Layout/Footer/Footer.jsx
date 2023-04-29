import React from "react";
import Logo from "../../../Assets/NewLogo.png";
import { FiFacebook, FiHome, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div class="w-full h-full bg-[#133157] items-center sticky mb-0">
      <div class="h-7" />
      <div class="sm:flex flex-wrap">
        <div class="ml-20">
          <img src={Logo} alt="here was a logo:(" />
        </div>
        <div class="mx-12 pl-5 w-1/3 text-white border-l-4 border-l-white">
          <p class="font-bold text-xl uppercase">about us</p>
          <div class="h-2" />
          <p class="text-sm text-ellipsis line-clamp-3">
            Lorem ipsum dolor sit amet consectetur. Morbi morbi at nisl sodales
            sit vitae orci felis. Commodo malesuada id est urna et.
          </p>
        </div>
        <div class="px-6 text-white justify-center">
          <div class="font-bold uppercase pb-1">about</div>
          <div class="w-16 h-2 border-t-2 border-r-white"></div>
          <div class="">
            <ul class="uppercase">
              <li class="mt-1">
                <a href="https://google.com">blog</a>
              </li>
              <li class="mt-1">
                <a href="https://google.com">status</a>
              </li>
              <li class="mt-1">
                <a href="https://google.com">carrer</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-6 text-white justify-center">
          <div class="font-bold uppercase pb-1">support</div>
          <div class="w-20 h-2 border-t-2 border-r-white"></div>
          <div>
            <ul class="uppercase">
              <li class="py-1">
                <a href="https://google.com">help</a>
              </li>
              <li class="py-1">
                <a href="https://google.com">privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <FiFacebook class="text-white mx-1 my-1 w-5 h-5" />
        <FiInstagram class="text-white mx-1 my-1 w-5 h-5" />
        <FiHome class="text-white mx-1 my-1 w-5 h-5" />
        <div class="w-5" />
      </div>
      <div class="h-5" />
    </div>
  );
};

export default Footer;
