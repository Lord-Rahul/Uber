import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import CaptainContext from "./context/CaptainContext.jsx";
import UserContext from "./context/UserContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext>
      <CaptainContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainContext>
    </UserContext>
  </StrictMode>,
);
