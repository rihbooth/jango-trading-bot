import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "10:00", price: 3200 },
  { time: "10:30", price: 3300 },
  { time: "11:00", price: 3250 },
];

const LiveChart = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Live Chart</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#ddd" />
          <YAxis stroke="#ddd" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#00ff00" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LiveChart;