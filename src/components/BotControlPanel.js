import React, { useState } from "react";

const BotControlPanel = () => {
  const [botStatus, setBotStatus] = useState("Stopped");

  const toggleBot = () => {
    setBotStatus((prev) => (prev === "Running" ? "Stopped" : "Running"));
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Bot Control</h2>
      <p>Status: <span className="font-bold">{botStatus}</span></p>
      <button
        onClick={toggleBot}
        className="mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        {botStatus === "Running" ? "Stop Bot" : "Start Bot"}
      </button>
    </div>
  );
};

export default BotControlPanel;