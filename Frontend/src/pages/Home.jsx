import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import {
  ConfirmedVehicle,
  LocationSearchPannel,
  VehiclePannel,
} from "../components/index.js";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);
  const logoRef = useRef(null);
  const ConfirmVehiclePanelRef = useRef(null);
  const vehiclePannelRef = useRef(null);
  const [ConfirmRidePannel, setConfirmRidePannel] = useState(false);
  const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (pannel) {
        gsap.to(pannelRef.current, {
          height: "70%",
          // opacity: 1,
          padding: 24,
        });
        gsap.to(pannelCloseRef.current, {
          opacity: 1,
        });
        gsap.to(logoRef.current, {
          zIndex: 0,
        });
      } else {
        gsap.to(pannelRef.current, {
          height: "0%",
          // opacity: 0,
          padding: 0,
        });
        gsap.to(pannelCloseRef.current, {
          opacity: 0,
        });
        gsap.to(logoRef.current, {
          zIndex: 10,
        });
      }
    },
    [pannel],
  );

  useGSAP(() => {
    if (vehiclePannelOpen) {
      gsap.to(vehiclePannelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePannelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePannelOpen]);

  useGSAP(() => {
    if (ConfirmRidePannel) {
      gsap.to(ConfirmVehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ConfirmVehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ConfirmRidePannel]);

  return (
    <div className="h-screen relative">
      <div className="h-screen w-screen ">
        <img
          className="h-full object-cover"
          src="https://res.cloudinary.com/dkvipeywg/image/upload/Gemini_Generated_Image_5curhx5curhx5cur_ywzy70.png"
          alt=""
        />
      </div>

      <img
        ref={logoRef}
        className="w-16 absolute z-10 left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="bg-white justify-end flex flex-col h-screen absolute bottom-0 w-full overflow-hidden">
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
            <div className="line absolute h-20 w-1 top-[40%] left-12 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPannel(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-7 "
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
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-7"
              name="location"
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
        </div>

        <div ref={pannelRef} className=" bg-white ">
          <LocationSearchPannel
            setPannel={setPannel}
            setVehiclePannelOpen={setVehiclePannelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePannelRef}
        className="fixed w-full bottom-0 z-10 px-3 py-6  bg-white translate-y-full"
      >
        <VehiclePannel
          setConfirmRidePannel={setConfirmRidePannel}
          setVehiclePannelOpen={setVehiclePannelOpen}
        />
      </div>

      <div
        ref={ConfirmVehiclePanelRef}
        className="fixed w-full bottom-0 z-10 px-3 py-6  bg-white translate-y-full"
      >
        <ConfirmedVehicle setConfirmRidePannel={setConfirmRidePannel} />
      </div>
    </div>
  );
};

export default Home;
