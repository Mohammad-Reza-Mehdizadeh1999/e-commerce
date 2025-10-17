import { Link } from "react-router-dom";

const AdminOrdersTableRow = ({ order }) => {
  const { orderItems } = order;

  const getPaymentStatusClasses = (status) => {
    switch (status) {
      case "پرداخت شده":
        return "bg-green-600 text-white";
      case "پرداخت نشده":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getShippingStatusClasses = (status) => {
    switch (status) {
      case "در حال ارسال":
        return "bg-blue-600 text-white";
      case "ارسال شده":
        return "bg-green-600 text-white";
      case "ارسال نشده":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <tr
      className="border-[var(--color-table-border)] transition-colors 
                 hover:bg-[var(--color-gray-card)] dark:hover:bg-gray-700"
    >
      <td className="py-4 px-2">
        <div className="flex justify-center gap-2">
          {orderItems.map((item) => (
            <img
              key={item._id}
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover rounded"
            />
          ))}
        </div>
      </td>

      <td className="py-4 px-2 text-sm font-medium text-[var(--color-text-main)] text-right">
        {orderItems.map((item) => (
          <div key={item._id} className="truncate">
            {item.name}
          </div>
        ))}
      </td>

      <td className="py-4 px-2 text-sm text-[var(--color-gray)] dark:text-gray-400">
        {new Date(order.createdAt).toLocaleDateString("fa-IR")}
      </td>

      <td className="py-4 px-2 text-sm text-[var(--color-text-main)]">
        {order.user?.username || "کاربر مهمان"}
      </td>

      <td className="py-4 px-2 text-sm font-semibold text-[var(--color-text-main)]">
        ${order.totalPrice?.toFixed(2) || 0}
      </td>

      <td className="py-4 px-2">
        <span
          className={`px-3 py-1 text-xs rounded-full inline-block font-medium ${getPaymentStatusClasses(
            order.paymentStatus
          )}`}
        >
          {order.paymentStatus}
        </span>
      </td>

      <td className="py-4 px-2">
        <span
          className={`px-3 py-1 text-xs rounded-full inline-block font-medium ${getShippingStatusClasses(
            order.shippingStatus
          )}`}
        >
          {order.shippingStatus}
        </span>
      </td>

      <td className="py-4 px-2">
        <Link
          to={`/admin/orders/${order._id}`}
          className="bg-pink-500 hover:bg-pink-800 p-1 text-white text-xs font-semibold py-1 px-3 rounded-full transition-colors"
        >
          جزئیات
        </Link>
      </td>
    </tr>
  );
};

export default AdminOrdersTableRow;
