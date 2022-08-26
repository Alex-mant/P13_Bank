import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainUser from '../components/MainUser/MainUser';

const User = () => {
  const [token, setToken] = useState(localStorage.user)
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.user)
    if (token === undefined) return navigate("/signIn")
  }, [token, navigate]);

  return (
    <>
      <MainUser/>
    </>
  );
}

export default User;
