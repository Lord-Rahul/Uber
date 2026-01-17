import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CaptainLogin,
  CaptainRegister,
  Home,
  UserLogin,
  UserRegister,
} from "./pages/index.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-register" element={<CaptainRegister />} />
      </Routes>
    </div>
  );
};

export default App;
