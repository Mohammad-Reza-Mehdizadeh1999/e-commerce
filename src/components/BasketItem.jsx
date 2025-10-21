import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { getProductCategory } from "../api/requests/productCategory";
import { useCartContext } from "../context/useCartContext";

const BasketItem = ({ card }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryRes = await getProductCategory(card.category);
        setCategory(categoryRes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategory();
  }, [card.category]);

  const handelDeleteFromCart = (id) => {
    removeFromCart(id);
  };



  return (
    <div className="flex items-center justify-between border-b border-[var(--color-pink-primary)] pb-4">
      <div className="flex items-center gap-3 w-1/2">
        <img
          src={card.image}
          alt={card.name}
          className="w-full max-w-[88px] h-[100px] rounded"
        />
        <div className="flex flex-col gap-3">
          <div className="text-[var(--color-pink-primary)] w-full">
            {card.name}
          </div>
          <div>{category.name}</div>
          <div>{card.price.toLocaleString()} تومان </div>
        </div>
      </div>
      <div className="flex items-center gap-[16px]">
        <span className="flex items-center gap-1 bg-[Base/Text Field] dark:text-[--color-white] p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="cursor-pointer inline"
            onClick={() => increaseQuantity(card._id)}
          >
            <polygon points="12,6 6,14 18,14" />
          </svg>

          <span>{card.quantity}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="cursor-pointer inline"
            onClick={() => decreaseQuantity(card._id)}
          >
            <polygon points="6,10 18,10 12,18" />
          </svg>
        </span>
        <FaRegTrashAlt
          onClick={() => handelDeleteFromCart(card._id)}
          className="inline cursor-pointer h-[16px] w-[14px] text-[var(--color-pink-secondry)] hover:scale-115 transition-transform duration-200"
        />
      </div>
    </div>
  );
};

export default BasketItem;
