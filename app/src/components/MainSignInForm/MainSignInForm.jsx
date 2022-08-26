import React, { useState } from "react";
import {  useNavigate  } from "react-router-dom";
import { login } from "../../services/auth.service";

import "./styles.scss";

const MainSignInForm = ({setUserDataStorage}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null)
  const navigate = useNavigate();
  
  
  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password, setToken, navigate, setUserDataStorage);
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={(e) => {setUsername(e.target.value)}}/>
        <div className="email-error" style={{color: 'red'}}></div>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="current-password" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
        <div className="password-error" style={{color: 'red'}}></div>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default MainSignInForm;
