import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogInForm = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    if (username === 'user' && password === 'password') {
      navigate("/filterbystart_year");
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <div className="container mx-auto ">
    <h2 className="text-2xl font-bold mb-4">let's continue</h2>
    <div className="max-w-md border border-gray-300 p-6 rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  </div>
  )
}

export default LogInForm