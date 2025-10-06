import Button from "./ui/Button";

export default function OrdersTableRow({ order }) {
  const {
    image,
    name,
    date,
    price,
    paymentStatus,
    shippingStatus,
  } = order;

  const getPaymentColor = () => {
    if (paymentStatus === "پرداخت شده") return "bg-green-500";
    if (paymentStatus === "پرداخت نشده") return "bg-red-600";
    return "bg-gray-500";
  };

  const getShippingColor = () => {
    if (shippingStatus === "در حال ارسال") return "bg-sky-500";
    if (shippingStatus === "ارسال شده") return "bg-green-500";
    if (shippingStatus === "ارسال نشده") return "bg-red-600";
    return "bg-gray-500";
  };

  return (
    <tr className="border-b border-gray-800 text-sm hover:bg-gray-900 transition-colors">
      <td className="py-3 flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 object-cover rounded-md"
        />
      </td>
      <td className="py-3">{name}</td>
      <td className="py-3">{date}</td>
      <td className="py-3">{price}</td>
      <td className="py-3">
        <span className={`px-3 py-1 rounded-full text-xs ${getPaymentColor()}`}>
          {paymentStatus}
        </span>
      </td>
      <td className="py-3">
        <span className={`px-3 py-1 rounded-full text-xs ${getShippingColor()}`}>
          {shippingStatus}
        </span>
      </td>
      <td className="py-3">
        <Button className="bg-pink-600 hover:bg-pink-700 text-white text-xs px-4 py-1 rounded-full">
          جزئیات
        </Button>
      </td>
    </tr>
  );
}
