import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  loginFormSlice,
  useLoginFormSelector,
} from "redux/modules/ui/loginForm";
import Presentation from "./presentation";

const Container = () => {
  const dispatch = useDispatch();
  const { username, password } = useLoginFormSelector();
  const { changeUsername, changePassword } = loginFormSlice.actions;

  const handleChangeUsername = useCallback((e) => {
    dispatch(changeUsername(e.target.value));
  }, []);

  const handleChangePassword = useCallback((e) => {
    dispatch(changePassword(e.target.value));
  }, []);

  return (
    <Presentation
      username={username}
      password={password}
      handleChangeUsername={handleChangeUsername}
      handleChangePassword={handleChangePassword}
    />
  );
};

export default Container;
