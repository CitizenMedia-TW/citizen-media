import React from 'react';
import FacebookLogin from "react-facebook-login";
import FacebookLoginIcon from "../../../Assets/FacebookLoginIcon.png"


import { Facebook_Client_Id } from './Client_Id';

const LoginWithFacebook = () => {
    const responseFacebook = (response) => {
        console.log(response);
    }
    
    return (
        <FacebookLogin
            cssClass = "px-20 h-12 flex items-center text-base	 font-serif font-medium text-white rounded-4xl bg-[#0f3e7a]"
            
            appId = {Facebook_Client_Id}
            language = 'en_US'
            textButton = "Continue with Facebook"
            fields = "name, email, picture"
            autoLoad = {false}            
            callback = {responseFacebook} 

            // FB login icon 
            icon = {<img 
                className = 'scale-75 mr-2 ml-6' 
                src = {FacebookLoginIcon} 
                alt = "Facebook Login Icon"
            />}
        />
    );
};


export default LoginWithFacebook;