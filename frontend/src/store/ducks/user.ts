import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  fetchUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../fetchActions";

import { UserType } from "../../@types/UserType";

type FetchType = {
  loading: boolean;
  error: string | undefined;
};

const initialState: UserType & FetchType = {} as UserType & FetchType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.name = action.payload?.user?.name;
      state.email = action.payload?.user?.email;
      state.password = action.payload?.user?.password;
      state.confirmPassword = action.payload?.user?.confirmPassword;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.name = action.payload.user.name;
      state.error = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
