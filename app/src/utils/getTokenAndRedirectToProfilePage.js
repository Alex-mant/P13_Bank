import { getToken } from "../feature/loginSlice";

export const getTokenAndRedirectToProfilePage = (res, storageType, hooks) => {
  if (res.data.body.token) {
    hooks.dispatch(getToken(res.data.body.token));
    storageType.setItem("user", JSON.stringify(res.data));
    hooks.navigate("/user/profile");
  }
};