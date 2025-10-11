import AdminOrdersTableRow from "../components/AdminOrdersTableRow";

const orders = [
  {
    id: 1,
    image: "/phone1.webp",
    name: "Apple iPhone 14 Pro",
    date: "۱۴۰۴/۰۴/۳۱",
    user: "علی موسوی",
    price: "999.00",
    paymentStatus: "پرداخت شده",
    shippingStatus: "در حال ارسال",
  },
  {
    id: 2,
    image: "/phone2.webp",
    name: "Apple MacBook Air M2",
    date: "۱۴۰۴/۰۴/۳۱",
    user: "احمدی",
    price: "999.00",
    paymentStatus: "پرداخت نشده",
    shippingStatus: "ارسال شده",
  },
  {
    id: 3,
    image: "/phone4.webp",
    name: "Apple iPad Pro 12.9-inch",
    date: "۱۴۰۴/۰۴/۳۱",
    user: "سعادتی",
    price: "999.00",
    paymentStatus: "پرداخت نشده",
    shippingStatus: "ارسال نشده",
  },
];

export default function AdminAllOrders() {
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
              <tr className="text-sm  border-[var(--color-table-border)]">
                <th className="py-3 px-2 font-medium text-[var(--color-text-main)]">
                  عکس
                </th>
                <th className="py-3 px-2 font-medium text-right text-[var(--color-text-main)]">
                  نام محصول
                </th>
                <th className="py-3 px-2 font-medium text-[var(--color-text-main)]">
                  تاریخ
                </th>
                <th className="py-3 px-2 font-medium text-[var(--color-text-main)]">
                  کاربر
                </th>
                <th className="py-3 px-2 font-medium text-[var(--color-text-main)]">
                  قیمت نهایی
                </th>
                <th className="py-3 px-2 font-medium text-[var(--color-text-main)]">
                  پرداخت
                </th>
                <th className="py-3 px-2 font-medium text-[var(--color-text-main)]">
                  ارسال
                </th>
                <th className="py-3 px-2 font-medium text-[var(--color-text-main)]">
                  عملیات
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <AdminOrdersTableRow key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
