const ShoppingProgressTableRow = ({ image, name, quantity, price }) => {
  const fullImageUrl = image.startsWith("http")
    ? image
    : `https://qbc9.liara.run/uploads/${image}`;

  const finalPrice = quantity * price;

  return (
    <tr>
      <td className="px-4 py-2 text-right">
        <img
          src={fullImageUrl}
          alt={name}
          className="w-14 h-14 object-cover rounded-md"
        />
      </td>
      <td className="px-4 py-2 text-right">{name}</td>
      <td className="px-4 py-2 text-center">{quantity}</td>
      <td className="px-4 py-2 text-left">
        {price.toLocaleString()} تومان
      </td>
      <td className="px-4 py-2 text-left">
        {finalPrice.toLocaleString()} تومان
      </td>
    </tr>
  );
};

export default ShoppingProgressTableRow;
