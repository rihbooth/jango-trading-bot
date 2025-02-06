import React from "react";
import TradeHistoryTable from "./TradeHistoryTable";
import LiveChart from "./LiveChart";
import BotControlPanel from "./BotControlPanel";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Trading Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LiveChart />
        <BotControlPanel />
      </div>
      <div className="mt-6">
        <TradeHistoryTable />
      </div>
    </div>
  );
};

export default Dashboard;