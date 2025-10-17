import { useEffect, useState } from "react";
import AdminOrdersTableRow from "../components/AdminOrdersTableRow";
import { getAllOrders } from "../api/requests/adminAllOrders";

export default function AdminAllOrders() {
  const [allOrders, setAllOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 9;

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


    const indexOfLastUser = currentPage * ordersPerPage;
  const indexOfFirstUser = indexOfLastUser - ordersPerPage;
  const currentOrders = allOrders.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(allOrders.length / ordersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

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
              {currentOrders.map((order) => (
                <AdminOrdersTableRow key={order._id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>



      <div className="flex justify-center items-center mt-10 gap-5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md cursor-pointer ${
            currentPage === 1
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          قبلی
        </button>

        <span className="text-gray-300">
          صفحه {currentPage} از {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md cursor-pointer ${
            currentPage === totalPages
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
