import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyFooter from "../components/UI/footer/MyFooter";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";
import "./styles/Login.css";

const Login = () => {
  const { auth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div className="loginBody">
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Username" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Enter</MyButton>
      </form>
      <MyFooter />
    </div>
  );
};

export default Login;
