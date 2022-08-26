import React from 'react';
import MainSignIn from '../components/MainSignIn/MainSignIn';


const SignIn = ({setUserDataStorage}) => {
  return (
    <>
      <MainSignIn setUserDataStorage={setUserDataStorage}/>
    </>
  );
}

export default SignIn;
