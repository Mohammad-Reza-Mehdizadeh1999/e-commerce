
import { FaDollarSign, FaShopify } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import AdmainDashboardStatusCard from "../components/AdmainDashboardStatusCard";
import { useState } from "react";


const data = [
  { month: "فروردین", sale: 3 },
  { month: "اردیبهشت", sale: 1 },
  { month: "خرداد", sale: 2 },
  { month: "تیر", sale: 4 },
  { month: "مرداد", sale: 1 },
];
const dataMax = Math.max(...data.map((item) => item.sale));
const AdminDashboard = () => {

    const [admainDashboardCardDatas, setAdmainDashboardCardDatas] = useState([
    { id: 1, icon: <FaDollarSign />, title: "فروش کل", data: 0, word: "تومان" },
    { id: 2, icon: <FaUsers />, title: "مشتری ها", data: 10, word: "نفر" },
    { id: 3, icon: <FaShopify />, title: "سفارشات", data: 100, word: "ارسال" },
  ]);


  return (
    <>
      <div className="flex flex-col gap-10 pt-[110px] mb-[10px]  relative  min-h-screen ">
      <div className="w-[60%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 p-4">
        {admainDashboardCardDatas.map((card) => (
          <AdmainDashboardStatusCard {...card} key={card.id} />
        ))}
      </div>
        <div className="w-full  rounded-2xl p-6 max-w-[1500px] mx-auto h-[520px]">
          <h3 className="text-secondary-light mb-4 text-sm font-bold text-right dark:text-[var(--color-secondary-dark)]">
            نمودار فروش
          </h3>
          <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  vertical={false}
                  stroke="var(--color-gray)"
                  strokeDasharray=""
                />

                <XAxis dataKey="month" />
                <YAxis
                  tickMargin={15}
                  domain={[0, dataMax + 1]}
                  ticks={[...Array(dataMax + 2).keys()]}
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-gray)", color: "var(--color-gray-dark)" }}
                  cursor={{ fill: "rgba(233,30,99,0.1)" }}
                />
                <Bar
                  dataKey="sale"
                  fill="var(--color-pink-primary)"
                  radius={[8, 8, 0, 0]}
                  barSize={140}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-secondary-light mt-4 text-sm font-bold text-center  dark:text-[var(--color-secondary-dark)">
           ماه
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
