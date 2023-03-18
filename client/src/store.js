import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slice/auth-slice";
import { baseApi } from "./api";
export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
