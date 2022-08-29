import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArgentBankLogo from "../../assets/img/argentBankLogo.png";
import { logout } from "../../services/auth.service";
import "./styles.scss";

const Nav = () => {
  const location = useLocation().pathname;

  useEffect(() => {
  },[location])

  return (   
    <nav className="main-nav">
      <Link className="main-nav-logo" to={{pathname:"/home"}}>
        <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-container-item">
        {
          window.location.pathname === '/user/profile' ?
            <Link className="main-nav-item" to={{pathname: "/home"}} onClick={() => {logout()}}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>        
          :
            <Link className="main-nav-item" to={{pathname: "/signIn"}}>
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
        }
      </div>
    </nav>   
  );

};

export default Nav;
