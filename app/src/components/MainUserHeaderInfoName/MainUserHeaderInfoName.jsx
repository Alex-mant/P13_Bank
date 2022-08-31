import React from 'react';
import './styles.scss';

const MainUserHeaderInfoName = ({isTheButtonNameEditClicked, userInfoName}) => {
  return(
    <>
      <div className="inputContainer" style={{display : isTheButtonNameEditClicked ? 'flex' : 'none'}}>
        <input className='nameInput' type='text'placeholder='name'/>
        <input className='lastnameInput' type='text'placeholder='surname'/>
      </div>
      <h2 style={{display : isTheButtonNameEditClicked ? 'none' : 'block'}}>{userInfoName + '!'}</h2>
    </>
  )}

export default MainUserHeaderInfoName;
