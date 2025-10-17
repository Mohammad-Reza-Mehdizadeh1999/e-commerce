import { useEffect, useState } from "react";
import AdminOrdersTableRow from "../components/AdminOrdersTableRow";
import { getAllOrders } from "../api/requests/adminAllOrders";

export default function AdminAllOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await getAllOrders();
        console.log("✅ Orders from backend:", res);
        setAllOrders(res);
      } catch (err) {
        console.error("❌ Error fetching orders:", err);
      }
    };
    fetchAllOrders();
  }, []);

  return (
    <div
      className="min-h-screen p-8"
      style={{
        backgroundColor: "var(--color-bg-page)",
        color: "var(--color-text-main)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div
          className="overflow-x-auto rounded-lg shadow-xl"
          style={{ backgroundColor: "var(--color-table-bg)" }}
        >
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="text-sm border-[var(--color-table-border)]">
                <th className="py-3 px-2 font-medium">عکس</th>
                <th className="py-3 px-2 font-medium text-right">نام محصول</th>
                <th className="py-3 px-2 font-medium">تاریخ</th>
                <th className="py-3 px-2 font-medium">کاربر</th>
                <th className="py-3 px-2 font-medium">قیمت نهایی</th>
                <th className="py-3 px-2 font-medium">پرداخت</th>
                <th className="py-3 px-2 font-medium">ارسال</th>
                <th className="py-3 px-2 font-medium">عملیات</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order) => (
                <AdminOrdersTableRow key={order._id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
