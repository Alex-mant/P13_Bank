import React, { useState } from "react";
import MainUserHeaderEditSaveOrCancel from "../MainUserHeaderEditSaveOrCancel/MainUserHeaderEditSaveOrCancel";
import MainUserHeaderInfoName from "../MainUserHeaderInfoName/MainUserHeaderInfoName";
import './styles.scss';

const MainUserHeader = () => {
  const [isTheButtonNameEditClicked, setisTheButtonEditNameClicked] = useState(false);
  const [userInfoName, setuserInfoName] = useState('Tony Jarvis');

  return (
    <div className="header">
      <h1> Welcome back </h1>
      <MainUserHeaderInfoName isTheButtonNameEditClicked={isTheButtonNameEditClicked} userInfoName={userInfoName}/>
      <MainUserHeaderEditSaveOrCancel isTheButtonNameEditClicked={isTheButtonNameEditClicked} setisTheButtonEditNameClicked={setisTheButtonEditNameClicked} setuserInfoName={setuserInfoName} />
    </div>
  );
};

export default MainUserHeader;
