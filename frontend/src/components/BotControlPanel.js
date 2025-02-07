import React from "react";
import { startBot, stopBot } from "../api";

const BotControlPanel = () => {
  return (
    <div>
      <h2>Bot Controls</h2>
      <button onClick={startBot}>Start Bot ✅</button>
      <button onClick={stopBot}>Stop Bot ❌</button>
    </div>
  );
};

export default BotControlPanel;