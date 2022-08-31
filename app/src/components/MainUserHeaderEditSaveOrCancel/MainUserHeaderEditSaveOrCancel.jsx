import { useDispatch, useSelector } from "react-redux";
import { getFirstName, getLastName } from "../../feature/loginSlice";
import { setUserData } from "../../services/auth.service";
import "./styles.scss";

const MainUserHeaderEditSaveOrCancel = ({ isTheButtonNameEditClicked, setisTheButtonEditNameClicked }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.login.token);
  const currentInfo = {
    firstName: useSelector(state => state.login.firstName),
    lastName: useSelector(state => state.login.lastName),
  }
  const editedInfo = {
    firstName : useSelector(state => state.login.editedUserInfos.firstName),
    lastName: useSelector(state => state.login.editedUserInfos.lastName)
  }

  /**
   * If the new value is not null, return the new value, otherwise return the current value.
   * @returns - If newValue is not null, return newValue
   *   - If newValue is null, return currValue
   */
  const verifIfValueNotNull = (newValue, currValue) => {
    return newValue !== null && newValue !== "" ? newValue : currValue
  }

  return (  
    <>
      <div className="saveOrCancel" style={{ display: isTheButtonNameEditClicked ? "flex" : "none" }}>
        <button
          className="edit-button"
          onClick={() => {
            setUserData(token, {
              firstName : verifIfValueNotNull(editedInfo.firstName, currentInfo.firstName),
              lastName: verifIfValueNotNull(editedInfo.lastName, currentInfo.lastName),
            })
            dispatch(getFirstName(verifIfValueNotNull(editedInfo.firstName, currentInfo.firstName)));
            dispatch(getLastName(verifIfValueNotNull(editedInfo.lastName, currentInfo.lastName)));
            setisTheButtonEditNameClicked(false);
          }}
        >
          Save
        </button>
        <button
          className="edit-button"
          onClick={() => {
            setisTheButtonEditNameClicked(false);
          }}
        >
          Cancel
        </button>
      </div>
      <button
        className="edit-button"
        style={{ display: isTheButtonNameEditClicked ? "none" : "block" }}
        onClick={() => {
          setisTheButtonEditNameClicked(true);
        }}
      >
        Edit Name
      </button>
    </>
  );
};

export default MainUserHeaderEditSaveOrCancel;
