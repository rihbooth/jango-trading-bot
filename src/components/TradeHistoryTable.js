import React from "react";

const TradeHistoryTable = () => {
  const trades = [
    { id: 1, pair: "ETH/USDT", type: "Buy", amount: "0.5", price: "3200" },
    { id: 2, pair: "BTC/USDT", type: "Sell", amount: "0.1", price: "45000" },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Trade History</h2>
      <table className="w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2">Pair</th>
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.id} className="border-t border-gray-600">
              <td className="p-2">{trade.pair}</td>
              <td className="p-2">{trade.type}</td>
              <td className="p-2">{trade.amount}</td>
              <td className="p-2">{trade.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistoryTable;