import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainUserHeaderEditSaveOrCancel from "../MainUserHeaderEditSaveOrCancel/MainUserHeaderEditSaveOrCancel";
import MainUserHeaderInfoName from "../MainUserHeaderInfoName/MainUserHeaderInfoName";
import './styles.scss';

const MainUserHeader = () => {
  const [isTheButtonNameEditClicked, setisTheButtonEditNameClicked] = useState(false);
  const firstName = useSelector(state => state?.login.firstName);
  const lastName = useSelector(state => state?.login.lastName);

  return (
    <div className="header">
      <h1> Welcome back </h1>
      <MainUserHeaderInfoName isTheButtonNameEditClicked={isTheButtonNameEditClicked} userInfoName={firstName + ' ' + lastName}/>
      <MainUserHeaderEditSaveOrCancel isTheButtonNameEditClicked={isTheButtonNameEditClicked} setisTheButtonEditNameClicked={setisTheButtonEditNameClicked}/>
    </div>
  );
};

export default MainUserHeader;
