import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ArgentBankLogo from "../../assets/img/argentBankLogo.png";
import { logOut } from "../../feature/loginSlice";
import "./styles.scss";

const Nav = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const firstName = useSelector(state => state.login.firstName)

  useEffect(() => {
  },[location])

  return (   
    <nav className="main-nav">
      <Link className="main-nav-logo" to={{pathname:"/"}}>
        <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-container-item">
        {
          localStorage.user || sessionStorage.user ?
            <>
              <Link className="main-nav-item" to={{pathname: "/user/profile"}}>
                <i className="fa fa-user-circle"></i>
                {firstName}
              </Link>
              <Link className="main-nav-item" to={{pathname: "/"}} onClick={() => {dispatch(logOut())}}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>        
            </>
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
