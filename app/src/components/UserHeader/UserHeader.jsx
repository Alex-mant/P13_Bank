import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditInfoName from "../EditInfoName/EditInfoName";
import InputEditInfo from "../InputEditInfo/InputEditInfo";
import './styles.scss';

const UserHeader = () => {
  const [isTheButtonNameEditClicked, setisTheButtonEditNameClicked] = useState(false);
  const firstName = useSelector(state => state?.login.firstName);
  const lastName = useSelector(state => state?.login.lastName);

  return (
    <div className="header">
      <h1> Welcome back </h1>
      <InputEditInfo isTheButtonNameEditClicked={isTheButtonNameEditClicked} userInfoName={firstName + ' ' + lastName}/>
      <EditInfoName isTheButtonNameEditClicked={isTheButtonNameEditClicked} setisTheButtonEditNameClicked={setisTheButtonEditNameClicked}/>
    </div>
  );
};

export default UserHeader;
