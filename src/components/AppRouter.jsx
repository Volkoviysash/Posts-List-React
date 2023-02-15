import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/about" element={<About />} /> */}
      {routes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      {/* For some URL that does'n exist */}
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  );
};

export default AppRouter;
