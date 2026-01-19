import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          await axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (err) {
          console.error("Logout error:", err);
        }
      }

      localStorage.removeItem("token");
      navigate("/login");
    };

    performLogout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl font-semibold text-gray-700">Logging out...</div>
    </div>
  );
}

export default UserLogout;
