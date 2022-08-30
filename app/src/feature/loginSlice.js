import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/* Creating a slice of the Redux store. */
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    firstName: null,
    lastName: null,
    email: null,
    rememberMe: false,
    token: null,
  },
  reducers:{ 
    logOut: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.rememberMe = false;
      state.token = null;
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      axios.defaults.headers.common['Authorization'] = "";
    },
    isRememberMe: (state, action) => {
      state.rememberMe = action.payload
    },
    getToken: (state, action) => {
      state.token = action.payload
    },
    getFirstName: (state, action) => {
      state.firstName = action.payload
    },
    getLastName: (state, action) => {
      state.lastName = action.payload
    },
    getEmail: (state, action) => {
      state.email = action.payload
    },
  }
})

export const {
  logOut,
  isRememberMe,
  getToken,
  getFirstName,
  getLastName,
  getEmail,
} = loginSlice.actions;

export default loginSlice.reducer;
