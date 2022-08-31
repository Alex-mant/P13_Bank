import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getEditedFirstName, getEditedLastName } from '../../feature/loginSlice';
import './styles.scss';

const MainUserHeaderInfoName = ({isTheButtonNameEditClicked, userInfoName}) => {
  const firstNameHasEditedTo = useRef()
  const lastNameHasEditedTo = useRef()
  const dispatch = useDispatch();

  return(
    <>
      <div className="inputContainer" style={{display : isTheButtonNameEditClicked ? 'flex' : 'none'}}>
        <input ref={firstNameHasEditedTo} onBlur={() => {dispatch(getEditedFirstName(firstNameHasEditedTo.current.value))}} className='nameInput' type='text' placeholder='name'/>
        <input ref={lastNameHasEditedTo} onBlur={() => {dispatch(getEditedLastName(lastNameHasEditedTo.current.value))}} className='lastnameInput' type='text'placeholder='surname'/>
      </div>
      <h2 style={{display : isTheButtonNameEditClicked ? 'none' : 'block'}}>{userInfoName + '!'}</h2>
    </>
  )}

export default MainUserHeaderInfoName;
