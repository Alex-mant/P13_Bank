import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../feature/loginSlice";

/* Creating a store with the reducer. */
export const store = configureStore({
  reducer: {
    login: loginSlice.reducer
  },
})
