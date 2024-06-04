"use client"
import React, { useState, useEffect } from 'react';


const SignInOut = ({ props }: any) => {
  const [secondsRemaining, setSecondsRemaining] = useState(90); // Adjust initial time

  useEffect(() => {
    const timerId = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        clearInterval(timerId); // Stop timer when it reaches 0
      }
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup function to clear timer on unmount
  }, [secondsRemaining]);

  const formattedTime = `${Math.floor(secondsRemaining / 60)}:${secondsRemaining % 60}`; // Format time

  return (
    <div className="flex flex-col bg-[#F39AA7] p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-xl font-bold text-white">Sign In / Sign Up</h1>
        <p className="text-white text-sm">SORME</p>
      </div>
      {/* Add your form fields here */}
      <div className="flex flex-col mb-4">
        <label htmlFor="code" className="text-white mb-2">
          Enter the code sent
        </label>
        <input
          type="text"
          id="code"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>
        <p className="text-white text-sm">Until resend {formattedTime}</p>
      <div className="flex justify-between items-center">
        <button className=" text-white font-bold py-2 px-4 mx-auto rounded-md hover:bg-gray-500 ease-in-out transition-all">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SignInOut;
