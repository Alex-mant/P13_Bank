import { useDispatch, useSelector } from "react-redux";
import { getFirstName, getLastName } from "../../feature/loginSlice";
import { setUserData } from "../../services/auth.service";
import "./styles.scss";

const MainUserHeaderEditSaveOrCancel = ({ isTheButtonNameEditClicked, setisTheButtonEditNameClicked }) => {
  const token = useSelector(state => state.login.token);
  const dispatch = useDispatch();

  return (  
    <>
      <div className="saveOrCancel" style={{ display: isTheButtonNameEditClicked ? "flex" : "none" }}>
        <button
          className="edit-button"
          onClick={() => {
            setUserData(token, {
              firstName : document.querySelector(".nameInput").value,
              lastName: document.querySelector(".surnameInput").value
            })
            dispatch(getFirstName(document.querySelector(".nameInput").value));
            dispatch(getLastName(document.querySelector(".surnameInput").value));
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
