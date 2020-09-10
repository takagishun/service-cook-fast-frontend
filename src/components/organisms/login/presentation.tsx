import React from "react";

type Props = {
  username: string;
  password: string;
  handleChangeUsername: (e: any) => void;
  handleChangePassword: (e: any) => void;
};

const Presentation = ({
  username,
  password,
  handleChangeUsername,
  handleChangePassword,
}: Props) => {
  return (
    <form>
      <label htmlFor="username">ユーザー名</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={handleChangeUsername}
      />
      <label htmlFor="password">パスワード</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handleChangePassword}
      />
    </form>
  );
};

export default Presentation;
