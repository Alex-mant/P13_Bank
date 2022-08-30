import React from "react";
import './styles.scss';
import MainUserHeader from "../MainUserHeader/MainUserHeader";
import MainUserAccountSection from "../MainUserAccountSection/MainUserAccountSection";
import { accounts } from "../../data/mainUserAccounts";


const MainUser = () => {
 

  return (
    <main className="main bg-dark mainUser">
      <MainUserHeader />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => <MainUserAccountSection key={index} {...account} />)}
    </main>
  );
};

export default MainUser;
