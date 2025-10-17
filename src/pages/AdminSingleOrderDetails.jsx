import ShoppingProgressTableRow from "../components/ShoppingProgressTableRow";
import CheckoutDetails from "../components/CheckoutDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserSingleOrder } from "../api/requests/userOrders";
import { makeOrderPaid } from "../api/requests/adminAllOrders";

const AdminSingleOrderDetails = () => {
  const [userOrder, setUserOrder] = useState(null);
  const { orderId } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getUserSingleOrder(orderId);
        console.log("User Single Order:", data);
        setUserOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    if (orderId) fetchOrder();
  }, [orderId]);



  const handleDelivere = async () => {
    console.log("del");
  };



  const handlePay = async () => {
    console.log("pay");
    const res = await makeOrderPaid(userOrder._id);
    console.log(res);
  };

  if (!userOrder) {
    return (
      <div className="text-center text-white mt-20">
        در حال بارگذاری اطلاعات سفارش...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen justify-center gap-20 pr-36 mt-15 w-full">
      <div className="w-1/2 h-[20%] border border-gray-700 p-8">
        <table className="w-full text-sm text-gray-700 table-fixed p-5">
          <thead className="text-gray-900 dark:text-[var(--color-white)] border-b-1 border-gray-700x">
            <tr>
              <th className="px-4 py-2 text-right">عکس</th>
              <th className="px-4 py-2 text-right">نام محصول</th>
              <th className="px-4 py-2 text-center">تعداد</th>
              <th className="px-4 py-2 text-left">قیمت</th>
              <th className="px-4 py-2 text-left">قیمت نهایی</th>
            </tr>
          </thead>
          <tbody className="dark:text-[var(--color-white)]">
            {userOrder.orderItems.map((item) => (
              <ShoppingProgressTableRow
                key={item.product}
                image={item.image}
                name={item.name}
                quantity={item.qty}
                price={item.price}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-1/2">
        <CheckoutDetails
          OrderNumber={userOrder._id}
          name={userOrder.user?.username}
          email={userOrder.user?.email}
          address={userOrder.shippingAddress?.address}
          howToPay={userOrder.isPaid ? "پرداخت شده" : "پرداخت نشده"}
          price={userOrder.itemsPrice?.toLocaleString("fa-IR")}
          tax={userOrder.taxPrice?.toLocaleString("fa-IR")}
          m={userOrder.shippingPrice?.toLocaleString("fa-IR")}
          finalPrice={userOrder.totalPrice?.toLocaleString("fa-IR")}
          isDelivered={userOrder.isDelivered}
          isPaid={userOrder.isPaid}
        />

        <div className="mt-10 flex  justify-start items-start gap-3">
          <button
            onClick={() => handleDelivere()}
            disabled={userOrder.isDelivered}
            className={`bg-yellow-300 py-1.5 px-3 hover:bg-yellow-500  rounded-xl text-black ${
              userOrder.isDelivered ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            تغییر وضعیت ارسال
          </button>
          <button
            onClick={() => handlePay()}
            disabled={userOrder.isPaid}
            className={`bg-blue-300 py-1.5 px-2.5 hover:bg-blue-500  rounded-xl text-black ${
              userOrder.isPaid ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            تغییر وضعیت پرداخت
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSingleOrderDetails;
