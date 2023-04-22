import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import { MdPeople, MdMail, MdLock } from "react-icons/md";
import { Link } from 'react-router-dom'

import "./test.css"

import InputField from "./InputField.tsx";

import LoginWithGoogle from "./LoginWithGoogle";
import LoginWithFacebook from "./LoginWithFacebook";

const LoginPage = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      let response = await AuthService.login(email, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.alert("Login succeed");
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/");
    } catch (e) {
      setMessage(e.response.data);
    }
  };

  const handleRegister = async () => {
    try {
      await AuthService.register(username, email, password);
      window.alert("Register succeed, you can login now");
      navigate("/login");
    } catch (err) {
      window.alert(err.response.data);
    }
  };

  return (
    <div className="h-144 w-7/10 mx-15/100 my-36 justify-center rounded-4xl border-x-8 border-y-4 border-loginBorder">
      
      {/* 標頭 */}
      <div className="w-auto mt-7/100 ml-7/100 pb-4">
        <p className="font-serif font-medium text-5xl text-loginText">
          <span class="font-serif shadow-[inset_0_-14px_0_#facc15]">&nbsp;LOGI</span>N
        </p>
      </div>   

      {/* 可操作物件 */}
      <div className="flex items-center">
        {/* 左半邊 */}
        <div className="mx-7/100 -mt-10">

          {/* Google / FB 登入，詳細 css 設定在 LoginWithGoogle / LoginWithFacebook */}
          <LoginWithGoogle/>
          <LoginWithFacebook/>
          
        </div>

        {/* 垂直分隔線 */}
        <div className=" h-96 border-loginBorder border-r-3.5"></div>

        {/* 右半邊 */}
        <div className=" mx-5/100">
          {/* 輸入欄位 */}
          <div className="grid justify-center items-center">
            {message && <div>{message}</div>}
            
            <InputField
              img={MdMail} 
              placeholder={"Email"} 
              onChange={handleEmail} 
            />
            <InputField
              img={MdLock}
              placeholder={"Password"}
              onChange={handlePassword}
              type={"password"}
            />
            
            {/* 按鈕 */}
            <div className="grid justify-items-center font-serif font-medium">
              <button
                className="
                  w-1/2 px-8 py-2 text-xl justify-center flex rounded-md 
                  bg-yellow-300 text-loginText hover:bg-yellow-500"
                onClick={handleRegister}
              >
                LOGIN
              </button>
              <button
                className="mt-5/100 text-base hover:text-sky-700 underline underline-offset-1 text-loginText"
                onClick={handleLogin}
              >
                Forget Password?
              </button>
              <Link
                to = "/Register"
                className="
                  mt-5/100 font-serif font-medium text-base underline 
                  hover:text-sky-700 underline-offset-1 text-loginText"
                onClick={handleLogin}
              >
                Create Account
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
