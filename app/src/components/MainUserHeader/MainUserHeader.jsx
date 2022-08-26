import React, { useState } from "react";
import MainUserHeaderEditSaveOrCancel from "../MainUserHeaderEditSaveOrCancel/MainUserHeaderEditSaveOrCancel";
import MainUserHeaderInfoName from "../MainUserHeaderInfoName/MainUserHeaderInfoName";
import './styles.scss';

const MainUserHeader = ({userDataStorage}) => {
  const [isTheButtonNameEditClicked, setisTheButtonEditNameClicked] = useState(false);
  const data = userDataStorage?.body
  const [userFullName, setUserFullName] = useState({
    firstName : data?.firstName,
    lastName : data?.lastName
  })
 

  return (
    <div className="header">
      <h1> Welcome back </h1>
      <MainUserHeaderInfoName isTheButtonNameEditClicked={isTheButtonNameEditClicked} userInfoName={userFullName.firstName + ' ' + userFullName.lastName}/>
      <MainUserHeaderEditSaveOrCancel isTheButtonNameEditClicked={isTheButtonNameEditClicked} setisTheButtonEditNameClicked={setisTheButtonEditNameClicked} setUserFullName={setUserFullName} />
    </div>
  );
};

export default MainUserHeader;
