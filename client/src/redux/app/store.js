import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../app/authSlice";
import { authApi } from "../api/authApi";
import { transactionApi } from "../api/transactionApi";
import { dashboardApi } from "../api/dashboardApi";
export default configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDm) =>
    getDm().concat(
      authApi.middleware,
      transactionApi.middleware,
      dashboardApi.middleware,
    ),
});
