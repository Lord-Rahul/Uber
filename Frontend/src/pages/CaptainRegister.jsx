import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CaptainRegister() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [model, setModel] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validation
    if (firstname.trim().length < 2) {
      setError("First name must be at least 2 characters");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }
    if (parseInt(vehicleCapacity) < 1) {
      setError("Vehicle capacity must be at least 1");
      setIsLoading(false);
      return;
    }

    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        model: model,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        captainData,
      );

      if (response.status === 201 || response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (err) {
      console.error("Captain registration error:", err);
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          <img
            className="w-20 sm:w-20 md:w-24 mb-4 sm:mb-6"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />
        </Link>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg w-full  font-medium mb-2">
            What's our Captain's name
          </h3>
          <div className="flex gap-4 mb-7">
            <input
              name="firstname"
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2   text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <input
              name="lastname"
              required
              className="bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2   text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">
            What's our Captain's email
          </h3>
          <input
            id="email"
            required
            autoComplete="on"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            id="password"
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="password"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-7">
            <input
              name="model"
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2  text-lg placeholder:text-base"
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
            <input
              name="color"
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2  text-lg placeholder:text-base"
              type="text"
              placeholder="Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              name="capacity"
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2  text-lg placeholder:text-base"
              type="number"
              placeholder="Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-4 mb-7">
            <input
              name="plate"
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2  text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
            <select
              name="type"
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2  text-lg placeholder:text-sm"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option id="1" value="" disabled>
                Select Vehicle Type
              </option>
              <option id="2" value="car">
                Car
              </option>
              <option id="3" value="auto">
                Auto
              </option>
              <option id="4" value="motorcycle">
                Moto
              </option>
            </select>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-5">
              {error}
            </div>
          )}
          <button
            name="button"
            type="submit"
            disabled={isLoading}
            className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating Account..." : "Create Captain Account"}
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] mt-6 leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
}

export default CaptainRegister;
