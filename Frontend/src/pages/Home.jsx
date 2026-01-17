import React from "react";
import { Link } from "react-router-dom";



function Home() {
    return (
        <div className="bg-cover bg-center sm:bg-bottom bg-[url(https://c8.alamy.com/comp/2J6W0KF/city-map-warsaw-color-detailed-plan-vector-illustration-2J6W0KF.jpg)] h-screen pt-4 sm:pt-8 w-full flex justify-between flex-col">
            <img className="w-16 sm:w-20 ml-4 sm:ml-9"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="uber-png"
            />
            <div className="bg-white pb-7 py-4 px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold">Get started with Uber</h2>
                <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded-2xl mt-5 hover:bg-gray-800 transition-colors duration-200">Continue</Link>
            </div>
        </div>
    );
}

export default Home;
