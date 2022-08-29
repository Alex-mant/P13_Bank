import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainUser from '../components/MainUser/MainUser';

const User = ({userDataStorage}) => {
  const [token, setToken] = useState(localStorage.user)
  const navigate = useNavigate();
  console.log(userDataStorage);

  useEffect(() => {
    setToken(localStorage.user)
    if (token === undefined) return navigate("/signIn")
  }, [token, navigate]);

  return (
    <>
      <MainUser userDataStorage={userDataStorage}/>
    </>
  );
}

export default User;
