import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        {/* For some URL that does'n exist */}
        <Route path="/*" element={<Navigate to="/posts" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
