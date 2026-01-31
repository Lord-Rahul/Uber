import React from "react";

const VehiclePannel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePannelOpen(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div className="flex w-full active:border-2  border-black rounded-xl items-center justify-between p-3 mb-2">
        <img
          className="h-10 bg-white"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-lg">
            UberGo
            <span className="font-light text-sm p-2">
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="text-base">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹195</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePannel(true);
          props.setVehiclePannelOpen(false)
        }}
        className="flex w-full active:border-2  border-black rounded-xl items-center justify-between p-3 mb-2"
      >
        <img
          className="h-10 bg-white"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
          alt=""
        />
        <div
          onClick={() => {
            props.setConfirmRidePannel(true);
             props.setVehiclePannelOpen(false)
          }}
          className="ml-2 w-1/2"
        >
          <h4 className="font-medium text-lg">
            Uber Auto
            <span className="font-light text-sm p-2">
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="text-base">6 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable auto ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹140</h2>
      </div>
      <div className="flex w-full active:border-2  border-black rounded-xl items-center justify-between p-3 mb-2">
        <img
          className="h-10 bg-white"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"
          alt=""
        />
        <div
          onClick={() => {
            props.setConfirmRidePannel(true);
             props.setVehiclePannelOpen(false)
          }}
          className="ml-2 w-1/2"
        >
          <h4 className="font-medium text-lg">
            Uber Moto
            <span className="font-light text-sm p-2">
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="text-base">1 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable MotorCycle ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65</h2>
      </div>
    </div>
  );
};

export default VehiclePannel;
