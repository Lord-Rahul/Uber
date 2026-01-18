import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CaptainProtectedWrapper({ children }) {
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching captain profile:", err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-4xl bg-red-500">Loading...</div>
      </div>
    );
  }
  return <>{children}</>;
}

export default CaptainProtectedWrapper;
