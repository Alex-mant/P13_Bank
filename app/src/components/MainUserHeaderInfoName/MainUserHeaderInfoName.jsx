import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEditedFirstName, getEditedLastName } from '../../feature/loginSlice';
import './styles.scss';

const MainUserHeaderInfoName = ({isTheButtonNameEditClicked, userInfoName}) => {
  const currentUserInfo = {
    firstName: useSelector(state => state.login.firstName),
    lastName: useSelector(state => state.login.lastName)
  }

  const editedFirstName = useRef()
  const editedLastName = useRef()

  const dispatch = useDispatch();

  return(
    <>
      <div className="inputContainer" style={{display : isTheButtonNameEditClicked ? 'flex' : 'none'}}>
        <input ref={editedFirstName} onBlur={() => {dispatch(getEditedFirstName(editedFirstName.current.value))}} className='nameInput' type='text' placeholder={currentUserInfo.firstName}/>
        <input ref={editedLastName} onBlur={() => {dispatch(getEditedLastName(editedLastName.current.value))}} className='lastnameInput' type='text'placeholder={currentUserInfo.lastName}/>
      </div>
      <h2 style={{display : isTheButtonNameEditClicked ? 'none' : 'block'}}>{userInfoName + '!'}</h2>
    </>
  )}

export default MainUserHeaderInfoName;
