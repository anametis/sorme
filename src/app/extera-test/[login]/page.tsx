"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import Textfield from "@/components/ui/textfield";
import { usePostData } from "@/hooks/api/usePostData";
import { REQUEST_ENDPOINT } from "@/data/request-endpoint";
import Link from 'next/link';
import React, { useState } from 'react';

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const sendLoginData = usePostData(REQUEST_ENDPOINT.POST_SIGN_UP);

//   function onSubmit(data: any) {
//     sendLoginData.mutate(data);
//   }

//   return (
//     <div className="flex flex-col justify-center items-center bg-[#F29AA7] w-10/12 rounded-3xl shape">
//       <div className="flex justify-between gap-32">
//         <div className="text-white font-semibold">Sign In / Sign Up</div>
//         <Image
//           src="/images/so.svg"
//           alt="logo"
//           width={100}
//           height={40}
//           className=""
//         />
//       </div>
//       <p>Enter username and password</p>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {[
//           { label: "User Name", value: "username" },
//           { label: "Password", value: "password", type: "password" },
//           { label: "Email", value: "email" },
//         ].map((i) => {
//           return (
//             <Textfield
//               key={i.value}
//               label={i.label}
//               register={register}
//               value={i.value}
//               type={i.type}
//             />
//           );
//         })}

//         <input type="submit" />
//       </form>
//     </div>
//   );
// };
// export default Login;



//---------------------------------------------- without react form library---------------------------------------------------
// const Login: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = () => {
//     // Handle login logic here
//     console.log('Logging in with', { username, password });
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//   <div className="flex items-center justify-center h-screen bg-gray-100">
    
//     <div className="bg-pink-200 rounded-lg p-8 max-w-sm mx-auto text-center relative">
//       <h2 className="text-2xl mb-4">Sign In / Sign Up</h2>
//       <p className="mb-6">Enter username and password</p>
//       <div className="mb-4 relative">
//         <label htmlFor="username" className="block text-left font-bold mb-1">username</label>
//         <input
//           type="email"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <span className="absolute right-3 top-9 text-gray-500">👤</span>
//       </div>
//       <div className="mb-6 relative">
//         <label htmlFor="password" className="block text-left font-bold mb-1">password</label>
//         <input
//           type={showPassword ? 'text' : 'password'}
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <span
//           className="absolute right-3 top-9 text-gray-500 cursor-pointer"
//           onClick={toggleShowPassword}
//         >
//           {showPassword ? '🙈' : '👁️'}
//         </span>
//       </div>
//       <button
//         onClick={handleLogin}
//         className="bg-white px-4 py-2 rounded font-bold w-full mb-4"
//       >
//         Login to account
//       </button>
//       <a href="#" className="block mb-4 text-sm">forgot password</a>
//       <div className="border-t pt-4 mt-4">
//         <Link className="text-lg font-bold" href="/">Sing In</Link>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;
