import { useState } from "react";
import { FaDollarSign, FaShopify } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

import AdmainDashboardStatusCard from "../components/AdmainDashboardStatusCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const [admainDashboardCardDatas, setAdmainDashboardCardDatas] = useState([
    { id: 1, icon: <FaDollarSign />, title: "فروش کل", data: 0, word: "تومان" },
    { id: 2, icon: <FaUsers />, title: "مشتری ها", data: 10, word: "نفر" },
    { id: 3, icon: <FaShopify />, title: "سفارشات", data: 100, word: "ارسال" },
  ]);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const getIntroOfPage = (label) => {
    if (label === "Page A") {
      return "Page A is about men's clothing";
    }
    if (label === "Page B") {
      return "Page B is about women's dress";
    }
    if (label === "Page C") {
      return "Page C is about women's bag";
    }
    if (label === "Page D") {
      return "Page D is about household goods";
    }
    if (label === "Page E") {
      return "Page E is about food";
    }
    if (label === "Page F") {
      return "Page F is about baby food";
    }
    return "";
  };

  const CustomTooltip = ({ active, payload, label }) => {
    const isVisible = active && payload && payload.length;
    return (
      <div
        className="custom-tooltip"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {isVisible && (
          <>
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p className="intro">{getIntroOfPage(label)}</p>
            <p className="desc">Anything you want can be displayed here.</p>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <div className="w-[60%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 p-4">
        {admainDashboardCardDatas.map((card) => (
          <AdmainDashboardStatusCard {...card} key={card.id} />
        ))}
      </div>

      <div className="w-[90%] mx-auto mt-10 h-[500px]">
        <h2 className="mb-4 text-xl font-bold text-center">نمودار فروش</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={CustomTooltip} />
            <Legend />
            <Bar dataKey="pv" barSize={20} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
