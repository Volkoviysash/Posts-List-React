import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import cl from "./Navbar.module.css";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className={cl.navbar}>
      <div className={cl.navbarBrand}>PostListApp</div>
      <div className={cl.navbarLink}>
        <Link className={cl.navLink} to="/posts">
          Posts
        </Link>
        <Link className={cl.navLink} to="/about">
          About
        </Link>
      </div>
      <div className={cl.navButton} onClick={logout}>
        Log out
      </div>
    </div>
  );
};

export default Navbar;
