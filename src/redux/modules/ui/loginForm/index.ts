import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export type LoginForm = {
  username: string;
  password: string;
};

export const initialState: LoginForm = {
  username: "",
  password: "",
};

export const useLoginFormSelector = () => {
  return useSelector(
    (state: { ui: { loginForm: LoginForm } }) => state.ui.loginForm
  );
};

export const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => ({
      ...state,
      username: action.payload,
    }),
    changePassword: (state, action: PayloadAction<string>) => ({
      ...state,
      password: action.payload,
    }),
  },
});
