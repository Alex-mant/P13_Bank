import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate  } from "react-router-dom";
import { login } from "../../services/auth.service";

import "./styles.scss";

const MainSignInForm = () => {

  const inputs = {
    email : useRef(),
    password : useRef(),
    rememberMe: useRef()
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    login(inputs, {dispatch, navigate});
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
        <input type="password" autoComplete="on" id="password" ref={inputs.password}/>
        <div className="password-error" style={{color: 'red'}}></div>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" ref={inputs.rememberMe}/>
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default MainSignInForm;
