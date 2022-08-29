import React, { useState } from "react";
import { useRef } from "react";
import {  useNavigate  } from "react-router-dom";
import { login } from "../../services/auth.service";

import "./styles.scss";

// {setUserDataStorage} => App.js : prop drilling must change with redux
const MainSignInForm = ({setUserDataStorage}) => {
  const inputs = {
    email : useRef(),
    password : useRef()
  }
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null)
  const navigate = useNavigate();
  
  
  const handleLogin = (e) => {
    e.preventDefault();
    login(inputs, setToken, navigate, setUserDataStorage);
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={inputs.email}/>
        <div className="email-error" style={{color: 'red'}}></div>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="current-password" id="password" ref={inputs.password}/>
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
