import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OrdersTableRow from "../components/OrdersTableRow";
import { getUserOrders } from "../api/requests/userOrders";

export default function UserOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getUserOrders();
        setOrders(data);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast.error("خطا در دریافت سفارشات ⚠️");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        در حال بارگذاری سفارشات...
      </div>
    );

  if (orders.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        هنوز سفارشی ثبت نکرده‌اید 🛒
      </div>
    );

  return (
    <div className="min-h-screen text-white flex justify-center p-8">
      <div className="w-full max-w-7xl overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-sm text-gray-300 border-b border-gray-700">
              <th className="py-3">عکس</th>
              <th className="py-3">نام محصول</th>
              <th className="py-3">تاریخ</th>
              <th className="py-3">قیمت نهایی</th>
              <th className="py-3">پرداخت</th>
              <th className="py-3">ارسال</th>
              <th className="py-3">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <OrdersTableRow key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
