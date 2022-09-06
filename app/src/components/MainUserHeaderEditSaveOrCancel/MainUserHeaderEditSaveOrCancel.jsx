import { useDispatch, useSelector } from "react-redux";
import { getFirstName, getLastName } from "../../feature/loginSlice";
import { setUserData } from "../../services/auth.service";
import "./styles.scss";

const MainUserHeaderEditSaveOrCancel = ({ isTheButtonNameEditClicked, setisTheButtonEditNameClicked }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const currentInfo = {
    firstName: useSelector((state) => state.login.firstName),
    lastName: useSelector((state) => state.login.lastName),
  };
  const editedInfo = {
    firstName: useSelector((state) => state.login.editedUserInfos.firstName),
    lastName: useSelector((state) => state.login.editedUserInfos.lastName),
  };

  /**
   * If the new value is not null and not an empty string, return the new value, otherwise return the
   * current value.
   * @returns the value of the ternary operator.
   */
  const verifIfValueNotNull = (newValue, currValue) => {
    return newValue !== null && newValue !== "" ? newValue : currValue;
  };

  const save = () => {
    setUserData(token, {
      firstName: verifIfValueNotNull(editedInfo.firstName, currentInfo.firstName),
      lastName: verifIfValueNotNull(editedInfo.lastName, currentInfo.lastName),
    });
    dispatch(getFirstName(verifIfValueNotNull(editedInfo.firstName, currentInfo.firstName)));
    dispatch(getLastName(verifIfValueNotNull(editedInfo.lastName, currentInfo.lastName)));
    setisTheButtonEditNameClicked(false);
  };

  return (
    <>
      <div className="saveOrCancel" style={{ display: isTheButtonNameEditClicked ? "flex" : "none" }}>
        <button className="edit-button" onClick={() => {save()}}>Save</button>
        <button className="edit-button" onClick={() => {setisTheButtonEditNameClicked(false)}}>Cancel</button>
      </div>
      <button className="edit-button" style={{ display: isTheButtonNameEditClicked ? "none" : "block" }} 
      onClick={() => {setisTheButtonEditNameClicked(true)}}>Edit Name</button>
    </>
  );
};

export default MainUserHeaderEditSaveOrCancel;
