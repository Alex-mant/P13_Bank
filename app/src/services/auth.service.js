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
 * It takes in an object of inputs, a dispatch function, and a navigate function. It then makes an
 * axios post request to the server, and if the request is successful, it will dispatch an action to
 * set the token in the redux store, and then it will set the user in either localStorage or
 * sessionStorage depending on the value of the rememberMe input. Finally, it will navigate to the
 * profile page.
 * 
 * @param inputs - an object containing the refs of the inputs
 * @param dispatch - is a function that dispatches an action to the reducer.
 * @param navigate - is a function that redirects to a page
 * @returns The return value is a function that takes three arguments: inputs, dispatch, and navigate.
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
