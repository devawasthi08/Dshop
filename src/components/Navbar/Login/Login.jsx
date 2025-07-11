import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem("userName", name);
      setUser(name);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto mt-10 bg-white dark:bg-gray-800 shadow rounded">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2 text-black"
      />
      <button
        onClick={handleLogin}
        className="bg-black text-white px-4 py-2 w-full rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
