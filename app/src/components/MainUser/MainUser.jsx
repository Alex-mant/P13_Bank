import React from "react";
import './styles.scss';
import UserHeader from "../UserHeader/UserHeader";
import AccountSection from "../AccountSection/AccountSection";
import { UserAccounts } from "../../data/UserAccounts";


const MainUser = () => {
 

  return (
    <main className="main bg-dark mainUser">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      {UserAccounts.map((account, index) => <AccountSection key={index} {...account} />)}
    </main>
  );
};

export default MainUser;
