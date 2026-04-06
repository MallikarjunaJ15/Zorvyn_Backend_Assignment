// app/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthChecked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthChecked = true;
    },
    setAuthChecked: (state) => {
      state.isAuthChecked = true;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout,setAuthChecked } = authSlice.actions;
export default authSlice.reducer;
