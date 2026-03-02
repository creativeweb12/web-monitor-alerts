import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const MonitorChart = ({ response }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(prev => [
      ...prev.slice(-10),
      { time: new Date().toLocaleTimeString(), value: response }
    ]);
  }, [response]);

  return (
    <div className="chart">
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid stroke="#333" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#4f46e5" />
      </LineChart>
    </div>
  );
};



export default MonitorChart;
