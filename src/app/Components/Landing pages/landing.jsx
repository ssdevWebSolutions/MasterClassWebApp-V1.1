"use client";

import React from 'react';
// import { useSelector } from 'react-redux';
import { FaCheckCircle, FaStar, FaUserCircle } from 'react-icons/fa'; // Using react-icons for icons
import Navbar from './Navbar';
import { User } from 'lucide-react';

const Landing = () => {
  // const token = useSelector((state) => state.user.token) || sessionStorage.getItem('token');
  // const user = useSelector((state) => state.user.datas.users);

  
  

  // console.log(user, "veedey");
  // console.log(token, "vasthundhiii mowa");


  return (
    <>
    
    <div className="max-w-5xl mx-auto p-10">
      <Navbar />
    </div>
    <div className="flex items-center justify-center min-h-screen bg-black overflow-auto">
      <div className="flex flex-col items-center space-y-6">
        
        {/* Icons */}
        <div className="relative flex items-center justify-center">
          <FaStar className="text-white text-3xl absolute left-[-40px] top-[-20px]" />
          <FaCheckCircle className="text-white text-6xl" />
          <FaUserCircle className="text-white text-4xl absolute right-[-40px] top-[-20px]" />
        </div>

        {/* Texts */}
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          Welcome to Masterclass Cricket!
        </h1> 
        {/* <p className="text-lg font-semibold text-emerald-50 text-grey-600 flex items-center gap-1.5 ">  <User size={25} /> {user[0].name}</p> */}
        <p className="text-gray-300 text-center max-w-md">
          Your registration is complete. Explore our platform and enjoy the benefits.
        </p>

        {/* Button */}
        <button className="mt-8 px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition text-lg">
          Go to Login
        </button>
      </div>
    </div>
    </>
  );
};

export default Landing;
