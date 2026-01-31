import React from "react";

const LocationSearchPannel = (props) => {



  const locations = [
    "24B,Near Shiv Mandir, Dumehar Chuantra, Himachal Pradesh",
    "210D,Arora homes , Dumehar Chuantra, Himachal Pradesh",
    "24B,Near Shiv Mandir, Dumehar Chuantra, Himachal Pradesh",
    "210D,Arora homes , Dumehar Chuantra, Himachal Pradesh",
  ];

  return (
    <div>
      {locations.map((location, idx) => {
        return ( 
          <div key={idx} onClick={()=>{
            props.setVehiclePannelOpen(true)
            props.setPannel(false)
          }}
          className="flex gap-4 active:border-black border-gray-50  border-2  p-2 rounded-xl items-center my-2 justify-start">
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-line text-xl"></i>
            </h2>
            <h4 className="font-normal text-md">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPannel;
