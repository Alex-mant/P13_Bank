import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/* Creating a slice of the Redux store. */
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    firstName: null,
    lastName: null,
    editedUserInfos: {
      firstName: null,
      lastName: null,
    },
    email: null,
    token: null,
  },
  reducers:{ 
    logOut: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.rememberMe = false;
      state.token = null;
      state.editedUserInfos.firstName = null;
      state.editedUserInfos.lastName = null;
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      axios.defaults.headers.common['Authorization'] = "";
    },
    getToken: (state, action) => {
      state.token = action.payload
    },
    getFirstName: (state, action) => {
      state.firstName = action.payload
    },
    getEditedFirstName : (state,action) => {
      state.editedUserInfos.firstName = action.payload
    },
    getLastName: (state, action) => {
      state.lastName = action.payload
    },
    getEditedLastName: (state, action) => {
      state.editedUserInfos.lastName = action.payload
    },
    getEmail: (state, action) => {
      state.email = action.payload
    },
  }
})

export const {
  logOut,
  getToken,
  getFirstName,
  getLastName,
  getEmail,
  getEditedFirstName,
  getEditedLastName,
} = loginSlice.actions;

export default loginSlice.reducer;
