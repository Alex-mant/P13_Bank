import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainUser from '../components/MainUser/MainUser';
import { getToken } from '../feature/loginSlice';
import { getUserData } from '../services/auth.service';

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataPersistsWhenThePageIsRefreshed = (storage) => {
    const token = JSON.parse(storage.user).body.token
    dispatch(getToken(token));
    getUserData(token, dispatch)
  }

  useEffect(() => {
    if (localStorage.user){
      dataPersistsWhenThePageIsRefreshed(localStorage)
    } else if (sessionStorage.user){
      dataPersistsWhenThePageIsRefreshed(sessionStorage)
    }else{
      return navigate("/signIn");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <MainUser/>
  );
}

export default User;
