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
import { useEffect, useState } from "react";
import {
  getTotalCustomers,
  getTotalOrders,
  getTotalSales,
  getTotalSalesByDate,
} from "../api/requests/adminDashboard";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const [customers, setCustomers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [sales, setSales] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchAdminDashboard = async () => {
      try {
        const totalSalesRes = await getTotalSales();
        const totalCustomersRes = await getTotalCustomers();
        const totalOrdersRes = await getTotalOrders();
        const totalSalesByDateRes = await getTotalSalesByDate();

        const sortedData = totalSalesByDateRes
          .slice(3, 8)
          .sort((a, b) => new Date(a._id) - new Date(b._id))
          .map((item) => ({
            date: item._id,
            sales: Math.round(item.totalSales),
          }));

        setChartData(sortedData);
        setSales(totalSalesRes.totalSales);
        setCustomers(totalCustomersRes.length);
        setOrders(totalOrdersRes.length);
      } catch (error) {
        console.error("Error fetching dashboard:", error);
        toast.error("خطا در بارگذاری داشبورد ⚠️");
      }
    };

    fetchAdminDashboard();
  }, []);

  const admainDashboardCardDatas = [
    {
      id: 1,
      icon: <FaDollarSign />,
      title: "فروش کل",
      data: sales.toLocaleString(),
      word: "تومان",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "مشتری ها",
      data: customers,
      word: "نفر",
    },
    {
      id: 3,
      icon: <FaShopify />,
      title: "سفارشات",
      data: orders,
      word: "عدد",
    },
  ];

  const dataMax = Math.max(...chartData.map((item) => item.sales), 0);

  return (
    <div className="flex flex-col gap-10 pt-[10px] mb-[10px] relative min-h-screen dark:bg-black">
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 p-4">
        {admainDashboardCardDatas.map((card) => (
          <AdmainDashboardStatusCard {...card} key={card.id} />
        ))}
      </div>

      <div className="w-full md:w-[90%] mx-auto rounded-2xl p-6 h-[550px] bg-white dark:bg-black shadow-md">
        <h3 className=" mb-4 text-sm font-bold text-right dark:text-white text-black">
          نمودار فروش
        </h3>
        <div className="w-full h-full dark:bg-black pb-5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid
                vertical={false}
                stroke="var(--color-gray)"
                strokeDasharray=""
              />
              <XAxis dataKey="date" tickMargin={10} />
              <YAxis
                tickMargin={80}
                tick={{ dx: 10 }}
                domain={[0, dataMax + dataMax * 0.2]}
                orientation="right"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(value) => `${Number(value).toLocaleString()} تومان`}
                labelFormatter={(label) => `تاریخ: ${label}`}
                contentStyle={{
                  backgroundColor: "var(--color-gray)",
                  color: "var(--color-gray-dark)",
                  borderRadius: "8px",
                }}
                cursor={{ fill: "rgba(233,30,99,0.1)" }}
              />
              <Bar
                dataKey="sales"
                fill="var(--color-pink-primary)"
                radius={[8, 8, 0, 0]}
                barSize={140}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* <h3 className="w-full dark:text-white text-black mb-4 text-sm font-bold text-center pt-6 bg-white dark:bg-black">
          تاریخ
        </h3> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
