import { Link } from "react-router-dom";

const AdminOrdersTableRow = ({ order }) => {
  const { orderItems } = order;
  const firstItem = orderItems[0]; 
  const remainingCount = orderItems.length - 1; 

  const getPaymentStatusClasses = (status) => {
    switch (status) {
      case true:
        return "bg-green-600 text-white";
      case false:
        return "bg-red-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getDeliveryStatusClasses = (status) => {
    switch (status) {
      case true:
        return "bg-green-600 text-white";
      case false:
        return "bg-blue-600 text-white";
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
        <img
          src={firstItem.image}
          alt={firstItem.name}
          className="w-12 h-12 object-cover rounded mx-auto"
        />
      </td>

      <td className="py-4 px-2 w-[180px] text-sm font-medium text-[var(--color-text-main)] text-right">
        <div className="truncate max-w-[150px]" title={firstItem.name}>
          {firstItem.name}
        </div>
        {remainingCount > 0 && (
          <div className="text-xs text-gray-400 mt-1 whitespace-nowrap">
            +{remainingCount} محصول دیگر
          </div>
        )}
      </td>

      <td className="py-4 px-2 text-sm text-[var(--color-gray)] dark:text-gray-400">
        {new Date(order.createdAt).toLocaleDateString("fa-IR")}
      </td>

      <td className="py-4 px-2 text-sm text-[var(--color-text-main)]">
        {order.user?.username || "کاربر مهمان"}
      </td>

      <td className="py-4 px-2 text-sm font-semibold text-[var(--color-text-main)]">
        {order.totalPrice.toLocaleString()} تومان
      </td>

      <td className="py-4 px-2">
        <span
          className={`px-3 py-1 text-xs rounded-full inline-block font-medium ${getPaymentStatusClasses(
            order.isPaid
          )}`}
        >
          {order.isPaid ? "پرداخت شده" : "پرداخت نشده"}
        </span>
      </td>

      <td className="py-4 px-2">
        <span
          className={`px-3 py-1 text-xs rounded-full inline-block font-medium ${getDeliveryStatusClasses(
            order.isDelivered
          )}`}
        >
          {order.isDelivered ? "ارسال شده" : "در حال ارسال"}
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
