import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import { LocationSearchPannel } from "../components/index.js";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (pannel) {
        gsap.to(pannelRef.current, {
          height: "70%",
          // opacity: 1,
          padding: 20,
        });
        gsap.to(pannelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(pannelRef.current, {
          height: "0%",
          // opacity: 0,
        });
        gsap.to(pannelCloseRef.current, {
          opacity: 0,
          padding: 0,
        });
      }
    },
    [pannel],
  );

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen ">
        <img
          className="h-full object-cover"
          src="https://res.cloudinary.com/dkvipeywg/image/upload/Gemini_Generated_Image_5curhx5curhx5cur_ywzy70.png"
          alt=""
        />
      </div>

      <div className="bg-white justify-end flex flex-col h-screen absolute bottom-0 w-full ">
        <div className="h-[30%] bg-white p-6 relative">
          <h5
            onClick={() => {
              setPannel(false);
            }}
            ref={pannelCloseRef}
            className=" absolute top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>

          <h4 className="text-3xl font-semibold">Find a Trip</h4>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[35%] left-12 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPannel(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              name="location"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPannel(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              name="location"
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
        </div>

        <div ref={pannelRef} className=" bg-white ">
          <LocationSearchPannel />
        </div>
      </div>
    </div>
  );
};

export default Home;
