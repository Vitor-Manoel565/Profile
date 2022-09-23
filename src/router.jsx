import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index";
import React from "react";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
