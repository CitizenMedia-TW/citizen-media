import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

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
    <div className="flex justify-center mt-16">
      <div className="py-8 px-12 rounded-md border-2 border-sky-700">
        <div className="font-mono mb-6 text-3xl text-sky-900">
          <h1>
            <span class="shadow-[inset_0_-14px_0_#facc15]">&nbsp;REGI</span>
            STER
          </h1>
        </div>
        {message && <div>{message}</div>}
        <div>
          <label htmlFor="username"></label>
          <input
            onChange={handleUsername}
            type="text"
            className="py-1 px-4 rounded-md border-2 border-sky-700"
            name="username"
            placeholder="👤 Username"
          />
        </div>
        <br />
        <div>
          <label htmlFor="username"></label>
          <input
            onChange={handleEmail}
            type="text"
            className="py-1 px-4 rounded-md border-2 border-sky-700"
            name="email"
            placeholder="✉️ Email"
          />
        </div>
        <br />
        <div>
          <label htmlFor="password"></label>
          <input
            onChange={handlePassword}
            type="password"
            className="py-1 px-4 rounded-md border-2 border-sky-700"
            name="password"
            placeholder="🔒 Password"
          />
        </div>
        <br />
        <div className="grid justify-items-center">
          <button
            className="hover:bg-yellow-500 px-8 py-2 mb-4 justify-center flex rounded-md bg-yellow-300"
            onClick={handleRegister}
          >
            Sign Up
          </button>
          <button
            className="hover:text-sky-700 underline underline-offset-1 text-sky-900"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
