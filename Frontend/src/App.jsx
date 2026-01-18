import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CaptainLogin,
  CaptainRegister,
  Home,
  UserLogin,
  UserRegister,
} from "./pages/index.js";
import Start from "./pages/Start.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-register" element={<CaptainRegister />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
