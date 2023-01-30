import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Testimonial.css";

const Testimonial = () => {
  const data = [
    { name: "htmlCss", value: 80 },
    { name: "Reactjs", value: 70 },
    { name: "ReactNative", value: 60 },
    { name: "Node", value: 50 },
  ];
  const data1 = [
    {
      name: "React",
      uv: 10,
      pv: 70,
      amt: 2017,
    },
    {
      name: "Html",
      uv: 20,
      pv: 100,
      amt: 2018,
    },
    {
      name: "Css/3",
      uv: 30,
      pv: 70,
      amt: 2019,
    },
    {
      name: "JS",
      uv: 40,
      pv: 50,
      amt: 2020,
    },
    {
      name: "Node",
      uv: 50,
      pv: 50,
      amt: 2021,
    },
    {
      name: "sql",
      uv: 60,
      pv: 40,
      amt: 2022,
    },
    {
      name: "Native",
      uv: 70,
      pv: 60,
      amt: 2023,
    },
  ];
  return (
    <>
      <h1 className="name">My Strategy</h1>
      <div className="container">
        <div className="pie">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bar">
          <ResponsiveContainer>
            <BarChart
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
