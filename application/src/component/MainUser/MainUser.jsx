import React from "react";
import './styles.scss';
import { setAccountSection } from "../../utils/setAccountSection";
import MainUserHeader from "../MainUserHeader/MainUserHeader";

const MainUser = () => {
  return (
    <main className="main bg-dark mainUser">
      <MainUserHeader/>
      <h2 className="sr-only">Accounts</h2>
      {setAccountSection()}
    </main>
  );
};

export default MainUser;
