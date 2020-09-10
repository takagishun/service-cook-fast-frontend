import { loginFormSlice, initialState as loginFromState } from "./loginForm";
import { combineReducers } from "redux";

export const rootUiReducer = combineReducers({
  loginForm: loginFormSlice.reducer,
});

export const preloadedUiState = {
  loginForm: loginFromState,
};
