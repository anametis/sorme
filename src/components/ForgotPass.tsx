"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, UserRound } from "lucide-react";

interface Form {
  username: string;
}

const SignIn = () => {
  const [form, setForm] = useState<Form>({
    username: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.username.trim() === "") {
      alert("Username field cannot be empty");
      return;
    }
    // Handle form submission:
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-sm mx-auto text-gray-100 bg-[#F39AA7] rounded-3xl shadow-md p-10 pb-4"
    >
      <div className="flex justify-between mb-4">
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
        <label htmlFor="username" className="mb-2 text-sm font-medium">
          Username
        </label>
        <input
          id="username"
          type="email"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border-2 bg-[#F39AA7] border-gray-100 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 ease-in-out transition-all"
        />
        <span className="absolute right-2 top-9">
          <UserRound />
        </span>
      </div>

      <div className="flex flex-row justify-between items-center mb-4">
        <button
          type="submit"
          className="px-4 py-2 rounded-md text-[#F39AA7] font-semibold bg-gray-100 focus:outline-none focus:ring w-full focus:ring-blue-700 focus:ring-opacity-50 hover:bg-gray-300 ease-in-out transition-all"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default SignIn;
