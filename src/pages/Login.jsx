import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
  const { auth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Username" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};

export default Login;
