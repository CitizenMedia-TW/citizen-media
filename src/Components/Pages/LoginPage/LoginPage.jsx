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
      AuthService.register(username, email, password);
      window.alert("Register succeed, you can login now");
      navigate("/login");
    } catch (e) {
      setMessage(e.response.data);
    }
  };

  return (
    <div>
      <div>
        {message && <div className="alert alert-danger">{message}</div>}
        <div>
          <label htmlFor="username">Username: </label>
          <input
            onChange={handleUsername}
            type="text"
            className="form-control"
            name="username"
            placeholder="For register only"
          />
        </div>
        <br />
        <div>
          <label htmlFor="username">Email: </label>
          <input
            onChange={handleEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            onChange={handlePassword}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div>
          <button onClick={handleLogin}>
            <span>Login</span>
          </button>
          <button onClick={handleRegister}>
            <span>Register</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
