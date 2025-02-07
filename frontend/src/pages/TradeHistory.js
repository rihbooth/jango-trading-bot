import React, { useEffect, useState } from "react";
import { fetchTradeHistory } from "../api";

const TradeHistory = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetchTradeHistory().then((res) => setTrades(res.data));
  }, []);

  return (
    <div>
      <h1>Trade History</h1>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th>Profit</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.id}>
              <td>{trade.token}</td>
              <td>${trade.buyPrice}</td>
              <td>${trade.sellPrice}</td>
              <td>{trade.profit > 0 ? "🟢" : "🔴"} ${trade.profit}</td>
              <td>{new Date(trade.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;