import React from "react";
import { Link } from "react-router-dom";



function Home() {
    return (
        <div className="bg-cover bg-center sm:bg-bottom bg-[url(https://res.cloudinary.com/dkvipeywg/image/upload/v1768666948/Gemini_Generated_Image_5curhx5curhx5cur_ywzy70.png)] h-screen pt-4 sm:pt-6 md:pt-8 lg:pt-10 w-full flex justify-between flex-col relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 lg:to-black/50"></div>
            <img className="w-12 sm:w-16 md:w-20 lg:w-28 ml-4 sm:ml-6 md:ml-9 lg:ml-12 relative z-10 drop-shadow-2xl"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="uber-png"
            />
            <div className="bg-white pb-5 sm:pb-7 lg:pb-10 py-4 sm:py-5 lg:py-8 px-4 sm:px-6 md:px-8 lg:px-12 max-w-full lg:max-w-3xl xl:max-w-4xl mx-auto w-full relative z-10 rounded-t-3xl lg:rounded-t-[2rem] shadow-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-2 lg:mb-4">Get started with Uber</h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-xl mb-4 lg:mb-6 hidden sm:block">Move with safety, arrive with confidence</p>
                <Link to='/login' className="flex items-center justify-center w-full lg:w-auto lg:inline-flex lg:px-16 bg-black text-white py-2.5 sm:py-3 lg:py-4 rounded-2xl mt-4 sm:mt-5 lg:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Continue</Link>
            </div>
        </div>
    );
}

export default Home;
