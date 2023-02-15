import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      {/* For some URL that does'n exist */}
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      {/* For some URL that does'n exist */}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
