import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 h-screen flex flex-col justify-between">
      <div className="w-full max-w-md mx-auto">
        <Link to='/'>
        <img
          className="w-16 sm:w-20 md:w-24 mb-4 sm:mb-6"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        </Link>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">What's your email</h3>
          <input
            id="email"
            className="bg-[#eeeeee] mb-5 sm:mb-7 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 w-full text-base sm:text-lg placeholder:text-sm sm:placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            autoComplete="off"
            placeholder="email@example.com"
          />
          <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">Enter Password</h3>
          <input
            id="password"
            className="bg-[#eeeeee] mb-5 sm:mb-7 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 w-full text-base sm:text-lg placeholder:text-sm sm:placeholder:text-base"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            autoComplete="off"
            placeholder="password"
          />
          <button
            name="button"
            className="bg-[#111] text-white font-semibold mb-5 sm:mb-7 rounded-2xl px-4 py-2 sm:py-3 w-full text-base sm:text-lg"
          >
            Login
          </button>
          <p name="button" className="text-center text-sm sm:text-base">
            Join as Captain?{' '}
            <Link to="/captain-register" className="text-blue-600">
              Register here
            </Link>
          </p>
        </form>
      </div>
      <div className="w-full max-w-md mx-auto">
        <Link
          to="/login"
          className="flex items-center justify-center bg-[#d5622d] text-white mb-5 font-semibold rounded-2xl px-4 py-2 sm:py-3 w-full text-base sm:text-lg"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
