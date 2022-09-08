import axios from "axios";
import { getEmail, getFirstName, getLastName } from "../feature/loginSlice";
import { getTokenAndRedirectToProfilePage } from "../utils/getTokenAndRedirectToProfilePage";

/**
 * MyEl is a function that takes an element as an argument and returns the element from the DOM.
 * @param element - The element you want to select.
 */
const myEl = (element) => document.querySelector(element);

/* The base URL for the API. */
const API_BASE_URL = "http://localhost:3001/api/v1/user/";

/**
 * It takes in four parameters, and returns a promise that will resolve to the response from the
 * server.
 * @param firstName - String
 * @param lastName - "String",
 * @param email - "test@test.com"
 * @param password - "12345678"
 * @returns The return value is the promise object.
 */
export const register = (firstName, lastName, email, password) => {
  return axios.post(API_BASE_URL + "signup", {
    firstName,
    lastName,
    email,
    password,
  });
};


/**
 * It takes in two arguments, inputs and hooks, and then it makes an axios post request to the login
 * route, and then it checks if the remember me checkbox is checked, and if it is, it calls the
 * getTokenAndRedirectToProfilePage function and passes in the response, localStorage, and hooks as
 * arguments, and if it isn't, it calls the getTokenAndRedirectToProfilePage function and passes in the
 * response, sessionStorage, and hooks as arguments.
 * @param inputs - an object containing the refs of the input fields
 * @param hooks - is an object that contains the following: {dispatch, navigate}
 * @returns The return value is a boolean.
 */
export const login = (inputs, hooks) => {
    
  axios
    .post(API_BASE_URL + "login", {
      email: inputs.email.current.value,
      password: inputs.password.current.value,
    })
    .then((res) => {
      if (inputs.rememberMe.current.checked) {
        getTokenAndRedirectToProfilePage(res, localStorage, hooks)
      } else {
        getTokenAndRedirectToProfilePage(res, sessionStorage, hooks)
      }
    })
    .catch((err) => {
      const error = err.response.data.message;
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      if (error === "Error: User not found!") {
        myEl(".email-error").innerHTML = error;
        myEl(".password-error").innerHTML = "";
      } else {
        myEl(".email-error").innerHTML = "";
        myEl(".password-error").innerHTML = error;
      }
      if (error === "Error: data and hash arguments required") {
        myEl(".password-error").innerHTML = "Error: Password is required!";
      }
    });
  return true;
};

/**
 * It takes a token and a dispatch function as arguments, and then it makes an API call to get the
 * user's profile data, and then it dispatches the user's first name, last name, and email to the redux
 * store.
 * @param token - the token that is returned from the login request
 * @param dispatch - dispatch is a function of the Redux store. You call store.dispatch to dispatch an
 * action. This is the only way to trigger a state change.
 */
export const getUserData = (token, dispatch) => {
  axios.defaults.headers.common["Authorization"] = "Bearer" + token;
  axios
    .post(API_BASE_URL + "profile")
    .then((resProfile) => {
      const data = resProfile.data.body;
      dispatch(getFirstName(data.firstName));
      dispatch(getLastName(data.lastName));
      dispatch(getEmail(data.email));
    })
    .catch((errProfile) => {
      console.log(errProfile);
    });
};

/**
 * Update the user's firstName and lastName in the database.
 * @param token - the token that is stored in the localStorage or sessionStorage (depend to rememberMe value)
 * @param editedUserInfos - {
 */
export const setUserData = (token, editedUser) => {
  axios.defaults.headers.common["Authorization"] = "Bearer" + token
  axios.put(API_BASE_URL + "profile",  {
    firstName : editedUser.firstName,
    lastName: editedUser.lastName,
  })
}
