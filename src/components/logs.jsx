import React, { useEffect, useState } from "react";

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem("loginLogs")) || [];
    setLogs(savedLogs);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login History</h2>
      {logs.length === 0 ? (
        <p>No login history found.</p>
      ) : (
        <table className="w-full border text-left text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">User</th>
              <th className="p-2">IP</th>
              <th className="p-2">City</th>
              <th className="p-2">Region</th>
              <th className="p-2">Country</th>
              <th className="p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{log.username}</td>
                <td className="p-2">{log.ip}</td>
                <td className="p-2">{log.city}</td>
                <td className="p-2">{log.region}</td>
                <td className="p-2">{log.country}</td>
                <td className="p-2">{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Logs;
