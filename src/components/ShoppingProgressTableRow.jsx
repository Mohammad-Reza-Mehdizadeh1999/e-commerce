
const ShoppingProgressTableRow = ({
  image,
  name,
  quantity,
  price,
}) => {
  const finalPrice = quantity * price;
  return (
    <tr>
      <td className="px-4 py-2 text-right">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 object-cover rounded-md"
        />
      </td>
      <td className="px-4 py-2 text-right">{name}</td>
      <td className="px-4 py-2 text-center">{quantity}</td>
      <td className="px-4 py-2 text-left">{price}</td>
      <td className="px-4 py-2 text-left">${finalPrice}</td>
    </tr>
  );
};
export default ShoppingProgressTableRow;
