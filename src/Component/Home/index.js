import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import axios from "axios";
import CrypoPrices from "../CryptoPrices";
import './index.css'

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const COLORS = ["#4d70d0","#c17439","#4ea452","#a43c3c"];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Nation: ${label}`}</p>
          <p className="population">{`Population: ${payload[0].value} million`}</p>
        </div>
      );
    }
  
    return null;
  };
  

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD<span class="emoji">😊</span></h3>
      </div>
      <CrypoPrices />

      <div className="charts">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            className="rescon"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Population" />
            <YAxis domain={["dataMin", "dataMax"]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Population" fill="#4d70d0" name="Population" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={400}>
          <PieChart className="rescon">
            <Pie
              data={data}
              dataKey="Population"
              nameKey="Year"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#c17439"
              label
            >
              {data.map((_, index) => (
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

        <ResponsiveContainer width="100%" height={400}>
      <div className="dashboard-container">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : error ? (
          <p className="error-message">Error: {error}</p>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ backgroundColor: '#4d70d0', color: '#fff' }}>Year</th>
                  <th style={{ backgroundColor: '#c17439', color: '#fff' }}>Population</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Year}</td>
                    <td>{item.Population}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            className="rescon"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Nation" />
            <YAxis axisLine={{
            stroke: '#4ea452', // Axis line color
            strokeWidth: 2, // Axis line thickness
            opacity: 0.7, // Axis line opacity
          }} domain={[0, 'auto']} tick={{ fontSize: 12 }}/>
            <Tooltip content={<CustomTooltip />}/>
            <Legend />
            <Line
               type="monotone"
               dataKey="Population"
               stroke=" #4d70d0"
               strokeWidth={2}
               dot={{ stroke: '#4d70d0', strokeWidth: 2, r: 5 }}
               activeDot={{ stroke: ' #4d70d0', strokeWidth: 2, r: 8 }}
               name="Population (millions)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
