import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");

  const handleLogin = async () => {
    if (name.trim()) {
      try {
        // ✅ Fetch IP + Location
        const res = await fetch("https://ipinfo.io/json?token=905b72037477e0");
        const data = await res.json();

        // ✅ Browser / Device Info
        const ua = navigator.userAgent;

        const loginData = {
          user: name,
          ip: data.ip || "Unknown",
          city: data.city || "Unknown",
          region: data.region || "Unknown",
          country: data.country || "Unknown",
          browser: ua,
          time: new Date().toLocaleString(),
        };

        // ✅ Save current user locally
        localStorage.setItem("userName", name);
        setUser(name);

        // ✅ Send log to Vercel API (will show in Vercel logs)
        await fetch("/api/logins", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        });
      } catch (error) {
        console.error("Failed to fetch IP/location", error);
      }
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
