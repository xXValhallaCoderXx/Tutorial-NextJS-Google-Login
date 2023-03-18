import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slice/auth-slice";
export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});
