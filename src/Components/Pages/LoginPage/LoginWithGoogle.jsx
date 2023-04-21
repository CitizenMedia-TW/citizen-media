import React from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Google_Client_Id } from "./Client_Id";

const LoginWithGoogle = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <GoogleOAuthProvider clientId={Google_Client_Id}>
            <GoogleLogin
                clientId = {Google_Client_Id}
                shape="rectangular"
                text = "continue_with"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </GoogleOAuthProvider>
    );
};


export default LoginWithGoogle;