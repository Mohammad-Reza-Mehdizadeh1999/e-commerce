const AdminOrdersTableRow = ({ order }) => {
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
      className=" border-[var(--color-table-border)] transition-colors 
                   hover:bg-[var(--color-gray-card)] dark:hover:bg-gray-700"
    >
      <td className="py-4 px-2">
        <img
          src={order.image}
          alt={order.name}
          className="w-12 h-12 object-cover rounded mx-auto"
        />
      </td>

      <td className="py-4 px-2 text-sm font-medium text-[var(--color-text-main)] text-right">
        {order.name}
      </td>

      <td className="py-4 px-2 text-sm text-[var(--color-gray)] dark:text-gray-400">
        {order.date}
      </td>

      <td className="py-4 px-2 text-sm text-[var(--color-text-main)]">
        {order.user}
      </td>

      <td className="py-4 px-2 text-sm font-semibold text-[var(--color-text-main)]">
        ${order.price}
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
        <button className="bg-primary hover:bg-pink-800 text-white text-xs font-semibold py-1 px-3 rounded-full transition-colors">
          جزئیات
        </button>
      </td>
    </tr>
  );
};

export default AdminOrdersTableRow;
