import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogout() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.removeItem("token");
        console.log(response);
      })
      .finally((response) => {
        navigate("/login");
        console.log(response);
      });
 

  return <div></div>;
}

export default UserLogout;
