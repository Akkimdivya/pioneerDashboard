import React, { useState, useEffect } from "react";
import Card from "../Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import './index.css'

function CryptoPrices() {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/historical/close.json"
        );
        const data = await response.json();

        const formattedData = Object.entries(data.bpi).map(([date, price]) => ({
          date,
          Bitcoin: price,
          Ethereum: price * 0.85, // Assuming Ethereum price is 85% of Bitcoin price
          Litecoin: price * 0.2, // Assuming Litecoin price is 20% of Bitcoin price
        }));

        setPriceData(formattedData);
      } catch (error) {
        console.error("Error fetching cryptocurrency prices:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate total sum of cryptocurrency prices
  const total = priceData.reduce((acc, curr) => {
    return acc + curr.Bitcoin + curr.Ethereum + curr.Litecoin;
  }, 0);

  // Pie chart data
  const pieChartData = [
    { name: "Bitcoin", value: total },
    { name: "Ethereum", value: total * 0.85 },
    { name: "Litecoin", value: total * 0.2 },
  ];

  // Pie chart colors
  const COLORS = ["#4d70d0", "#c17439", "#4ea452", "#a43c3c"];

  return (
    <div>
      {/* Charts */}
      <div className="charts">
        {/* Line Chart */}

        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={1000} height={400} data={priceData} className="rescon">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Bitcoin" stroke="#4ea452" />
            <Line type="monotone" dataKey="Ethereum" stroke="#c17439" />
            <Line type="monotone" dataKey="Litecoin" stroke="#a43c3c" />
          </LineChart>
        </ResponsiveContainer>

        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height={400}>
          <PieChart className="rescon">
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              fill="#4d70d0"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <Card />
    </div>
  );
}

export default CryptoPrices;
