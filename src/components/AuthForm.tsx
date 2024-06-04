import Link from 'next/link';
import React, { useState } from 'react';

const AuthForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with', { username, password });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-pink-200 rounded-lg p-8 max-w-sm mx-auto text-center relative">
      <h2 className="text-2xl mb-4">Sign In / Sign Up</h2>
      <p className="mb-6">Enter username and password</p>
      <div className="mb-4 relative">
        <label htmlFor="username" className="block text-left font-bold mb-1">username</label>
        <input
          type="email"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <span className="absolute right-3 top-9 text-gray-500">👤</span>
      </div>
      <div className="mb-6 relative">
        <label htmlFor="password" className="block text-left font-bold mb-1">password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <span
          className="absolute right-3 top-9 text-gray-500 cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? '🙈' : '👁️'}
        </span>
      </div>
      <button
        onClick={handleLogin}
        className="bg-white px-4 py-2 rounded font-bold w-full mb-4"
      >
        Login to account
      </button>
      <a href="#" className="block mb-4 text-sm">forgot password</a>
      <footer className="border-t pt-4 mt-4">
        <Link className="text-lg font-bold" href="/">Sing In</Link>
      </footer>
    </div>
  );
};

export default AuthForm;
