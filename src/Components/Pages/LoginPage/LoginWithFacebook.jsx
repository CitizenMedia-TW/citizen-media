import React from 'react';
import FacebookLogin from "react-facebook-login";

import { Facebook_Client_Id } from './Client_Id';

const LoginWithFacebook = () => {
    const responseFacebook = (response) => {
        console.log(response);
    }
    
    return (
        <FacebookLogin
            appId = {Facebook_Client_Id}
            autoLoad = {false}
            fields = "name, email, picture"
            callback = {responseFacebook} 
        />
    );
};


export default LoginWithFacebook;