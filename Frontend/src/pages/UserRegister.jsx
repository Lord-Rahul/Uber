import React, { useState } from "react";
import axios from "axios";
import { UserDataContext } from "../context/UserContext.jsx";
import { Link, useNavigate } from "react-router-dom";

function UserRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      newUser,
    );

    if (response.status === 200) {
      const token = response.data.token;
      const data = response.data;
      setUser(response.data.user);
      localStorage.setItem("token", token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div className="">
        <Link to="/">
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="uber-png"
          />
        </Link>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">What's your Name</h3>

          <div className="flex gap-4 mb-7">
            <input
              id="First Name"
              className="bg-[#eeeeee] w-1/2  rounded-2xl px-4  py-2 text-base placeholder:text-base"
              required
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              type="text"
              autoComplete="off"
              placeholder="First name"
            />
            <input
              id="Last Name"
              className="bg-[#eeeeee] w-1/2  rounded-2xl px-4  py-2  text-base placeholder:text-base"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              type="text"
              autoComplete="off"
              placeholder="Last name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            id="email"
            className="bg-[#eeeeee] mb-7 rounded-2xl px-4  py-2 w-full text-base placeholder:text-sm"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            autoComplete="off"
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            id="password"
            className="bg-[#eeeeee] mb-7 rounded-2xl px-4  py-2 w-full text-base placeholder:text-sm"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            autoComplete="off"
            placeholder="password"
          />
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl mb-5">
              {error}
            </div>
          )}
          <button
            name="button"
            type="submit"
            disabled={isLoading}
            className="bg-[#111] text-white font-semibold mb-7 rounded-2xl px-4  py-2 w-full text-base placeholder:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
          <p name="button" className="text-center">
            Already have a account?
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
}

export default UserRegister;
