import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEditedFirstName, getEditedLastName } from "../../feature/loginSlice";
import "./styles.scss";

const MainUserHeaderInfoName = ({ isTheButtonNameEditClicked, userInfoName }) => {
  const currentUserInfo = {
    firstName: useSelector((state) => state.login.firstName),
    lastName: useSelector((state) => state.login.lastName),
  };

  const dispatch = useDispatch();

  const handleBlur = (el) => {
    el.target.classList.contains("firstNameInput")
      ? dispatch(getEditedFirstName(el.target.value))
      : dispatch(getEditedLastName(el.target.value))
    ;
  };

  return (
    <>
      <div className="inputContainer" style={{ display: isTheButtonNameEditClicked ? "flex" : "none" }}>
        <input onBlur={handleBlur.bind(this)} className="firstNameInput" type="text" placeholder={currentUserInfo.firstName} />
        <input onBlur={handleBlur.bind(this)} className="lastNameInput" type="text" placeholder={currentUserInfo.lastName} />
      </div>
      <h2 style={{ display: isTheButtonNameEditClicked ? "none" : "block" }}>{userInfoName + "!"}</h2>
    </>
  );
};

export default MainUserHeaderInfoName;
