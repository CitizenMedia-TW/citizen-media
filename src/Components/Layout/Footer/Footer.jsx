
import React from 'react'
import Logo from "../../../Assets/NewLogo.png"
import FaceBook_1 from "../../../Assets/facebook_2.png"
import FaceBook_2 from "../../../Assets/facebook_1.png"
import IG from "../../../Assets/instagram.png"
import Home from "../../../Assets/home.png"


const Footer = () =>{
    return (
        <div class="flex w-max h-52 bg-[#133157] items-center">
            <div class="ml-20">
                <img src={Logo} alt="here was a logo:("></img>
            </div>
            <div class="w-12 h-28 border-r-4 pl-20 border-r-white"></div>
            <div class="pl-5 pr-24 w-1/3 text-white">
                <p class="font-bold text-xl uppercase">
                    about us
                </p>
                <p class="text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                    Morbi morbi at nisl sodales sit vitae orci felis. 
                    Commodo malesuada id est urna et.
                </p>
            </div>
            <div class="ml-7 h-32 text-white justify-center">
                <div class="font-bold uppercase pb-1">about</div>  {/*為何span不行==*/}
                <div class="w-16 h-2 border-t-2 border-r-white"></div>
                <div class="">
                    <ul class="uppercase">
                        <li class="mt-1"><a href="#">blog</a></li>
                        <li class="mt-1"><a href="#">status</a></li>
                        <li class="mt-1"><a href="#">carrer</a></li>
                    </ul>
                </div>
            </div>
            <div class="ml-12 mr-2 h-32  text-white justify-center">
                <div class="font-bold uppercase pb-1">support</div>  
                <div class="w-20 h-2 border-t-2 border-r-white"></div>
                <div>
                    <ul class="uppercase">
                        <li class="py-1"><a href="#">help</a></li>
                        <li class="py-1"><a href="#">privacy</a></li>
                    </ul>
                </div>
            </div>
            <div class="relative top-16 ml-3 inline-flex ">
                <div>
                        <a href="#"><img src={FaceBook_2}></img></a>
                </div>
                <div class="relative left-4">
                        <a href="#"><img src={FaceBook_1}></img></a>
                </div>
                <div class="relative left-8">
                        <a href="#"><img src={IG}></img></a>
                </div>
                <div class="relative left-12">
                        <a href="#"><img src={Home}></img></a>
                </div>
            </div>
        </div>  
    );
}

export default Footer