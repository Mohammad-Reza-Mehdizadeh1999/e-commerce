import Button from "./ui/Button";

export default function OrdersTableRow({ order }) {
  const {
    orderItems,
    createdAt,
    totalPrice,
    isPaid,
    isDelivered,
  } = order;

  // first product for showing img and name
  const firstItem = orderItems?.[0];

  const getPaymentColor = () => {
    if (isPaid) return "bg-green-500";
    return "bg-red-600";
  };

  const getShippingColor = () => {
    if (isDelivered) return "bg-green-500";
    return "bg-yellow-500";
  };

  const formattedDate = new Date(createdAt).toLocaleDateString("fa-IR");

  return (
    <tr className="border-b border-gray-800 text-sm hover:bg-gray-900 transition-colors">
      <td className="py-3 flex justify-center">
        <img
          src={firstItem?.image || "/default-image.jpg"}
          alt={firstItem?.name || "محصول"}
          className="w-12 h-12 object-cover rounded-md"
        />
      </td>

      <td className="py-3">
        {firstItem?.name || "بدون نام"}
        {orderItems?.length > 1 && (
          <span className="text-gray-400 text-xs block mt-1">
            + {orderItems.length - 1} محصول دیگر
          </span>
        )}
      </td>

      <td className="py-3">{formattedDate}</td>

      <td className="py-3">
        {totalPrice?.toLocaleString("fa-IR")} تومان
      </td>

      <td className="py-3">
        <span
          className={`px-3 py-1 rounded-full text-xs ${getPaymentColor()}`}
        >
          {isPaid ? "پرداخت شده" : "پرداخت نشده"}
        </span>
      </td>

      <td className="py-3">
        <span
          className={`px-3 py-1 rounded-full text-xs ${getShippingColor()}`}
        >
          {isDelivered ? "ارسال شده" : "در حال ارسال"}
        </span>
      </td>

      <td className="py-3">
        <Button to={`/user/my-orders/${order._id}`} className="bg-pink-600 hover:bg-pink-700 text-white text-xs px-4 py-1 rounded-full cursor-pointer">
          جزئیات
        </Button>
      </td>
    </tr>
  );
}
