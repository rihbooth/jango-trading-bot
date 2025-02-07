import React, { useEffect, useState } from "react";
import { fetchTradeHistory } from "../api";

const Dashboard = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetchTradeHistory().then((res) => setTrades(res.data));
  }, []);

  return (
    <div>
      <h1>JANGO Trading Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.id}>
              <td>{trade.token}</td>
              <td>${trade.buyPrice}</td>
              <td>${trade.sellPrice}</td>
              <td>{trade.profit > 0 ? "🟢" : "🔴"} ${trade.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;