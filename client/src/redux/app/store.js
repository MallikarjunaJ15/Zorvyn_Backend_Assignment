import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../app/authSlice";
import { authApi } from "../api/authApi";
export default configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDm) => getDm().concat(authApi.middleware),
});
