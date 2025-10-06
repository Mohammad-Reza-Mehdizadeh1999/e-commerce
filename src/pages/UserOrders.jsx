import OrdersTableRow from "../components/OrdersTableRow";

const orders = [
  {
    id: 1,
    image: "/phone1.webp",
    name: "Apple iPhone 14 Pro",
    date: "۱۴۰۴/۰۴/۳۱",
    price: "999.00",
    paymentStatus: "پرداخت شده",
    shippingStatus: "در حال ارسال",
  },
  {
    id: 2,
    image: "/phone2.webp",
    name: "Apple MacBook Air M2",
    date: "۱۴۰۴/۰۴/۳۱",
    price: "999.00",
    paymentStatus: "پرداخت نشده",
    shippingStatus: "ارسال شده",
  },
  {
    id: 3,
    image: "/phone4.webp",
    name: "Apple iPad Pro 12.9-inch",
    date: "۱۴۰۴/۰۴/۳۱",
    price: "999.00",
    paymentStatus: "پرداخت نشده",
    shippingStatus: "ارسال نشده",
  },
];

export default function UserOrders() {
  return (
    <div className="min-h-screen  text-white flex justify-center  p-8">
      <div className="w-full max-w-6xl overflow-x-auto">
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
              <OrdersTableRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
