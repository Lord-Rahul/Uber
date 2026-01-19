import React from "react";
import UserProtectedWrapper from "./pages/UserProtectedWrapper.jsx";
import { Route, Routes } from "react-router-dom";
import {
  CaptainLogin,
  CaptainHome,
  CaptainLogout,
  CaptainRegister,
  Home,
  UserLogin,
  CaptainProtectedWrapper,
  UserLogout,
  Start,
  UserRegister,
} from "./pages/index.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-register" element={<CaptainRegister />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />

        <Route path="/user/logout" element={<UserLogout />} />

        <Route path="/captain/logout" element={<CaptainLogout />} />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
