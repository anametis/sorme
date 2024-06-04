"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Eye, EyeOff} from "lucide-react";

interface Form {
  password: string;
  conformPassword: string;
}

const SetNewPass = () => {
  const [form, setForm] = useState<Form>({
    password: "",
    conformPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission:
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-sm mx-auto text-gray-100 bg-[#F39AA7] rounded-3xl shadow-md p-10 pb-4"
    >
      <div className="flex justify-between mb-2">
        <h2 className="text-xl font-bold text-center">Forget Password</h2>
        <Image
          src="/images/ddc.svg"
          alt="brand-icon"
          width={100}
          height={100}
          className=""
        />
      </div>

      <div className="flex flex-col mb-4 relative">
        <label htmlFor="password" className="mb-2 text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          className="px-3 py-2 rounded-md  bg-[#F39AA7] border-2 border-gray-100 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 ease-in-out transition-all"
        />
        <span className="absolute right-2 top-9" onClick={toggleShowPassword}>
          {showPassword ? <EyeOff /> : <Eye />}
        </span>
      </div>
      <div className="flex flex-col mb-4 relative">
        <label htmlFor="password" className="mb-2 text-sm font-medium ">
          Conform Password
        </label>
        <input
          id="conformPassword"
          type={showPassword ? "text" : "password"}
          name="conformPassword"
          value={form.conformPassword}
          onChange={handleChange}
          className="px-3 py-2 rounded-md  bg-[#F39AA7] border-2 border-gray-100 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 ease-in-out transition-all"
        />
        <span className="absolute right-2 top-9" onClick={toggleShowPassword}>
          {showPassword ? <EyeOff /> : <Eye />}
        </span>
      </div>
      <div className="flex flex-row justify-between items-center mb-4">
        <button
          type="submit"
          className="px-4 py-2 rounded-md text-[#F39AA7] w-full font-semibold bg-gray-100 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-50 hover:bg-gray-300 ease-in-out transition-all"
        >
          Conform
        </button>
      </div>
    </form>
  );
};

export default SetNewPass;
