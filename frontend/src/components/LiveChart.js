import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchTradeHistory } from "../api";

const LiveChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchTradeHistory().then((res) => {
      const data = res.data;
      const labels = data.map(trade => new Date(trade.date).toLocaleString());
      const profits = data.map(trade => trade.profit);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Profit',
            data: profits,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)'
          }
        ]
      });
    });
  }, []);

  return (
    <div>
      <h2>Live Profit Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LiveChart;