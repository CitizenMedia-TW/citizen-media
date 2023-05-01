import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import { Google_Client_Id } from "./Client_Id";

const LoginWithGoogle = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div className = "mb-3 h-11 px-1 flex items-center bg-white border-2 border-loginBorder rounded-4xl">
            <GoogleOAuthProvider clientId={Google_Client_Id}>
                <GoogleLogin
                    clientId = {Google_Client_Id}

                    locale='en-US'
                    logo_alignment = "center"
                    text = "continue_with"
                    size = "large"
                    width='380px'
                    shape = "circle"

                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={false}      
                />
            </GoogleOAuthProvider>
        </div>
    );
};


export default LoginWithGoogle;