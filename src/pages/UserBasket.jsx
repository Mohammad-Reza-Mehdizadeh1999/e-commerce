import { useState } from "react";
import BasketItem from "../components/BasketItem";
import Button from "../components/ui/Button";
import { useCartContext } from "../context/useCartContext";



export default function UserBasket() {
const [cards, setCards] = useState([
  {
    src: "/phone1.webp",
    title: "Apple iPhone 14 Pro",
    brand: "Apple",
    cost: 10000,
  },
  {
    src: "/phone2.webp",
    title: "Apple iPhone 14 Pro Gold",
    brand: "Apple",
    cost: 12000,
  },
  {
    src: "/phone3.jpg",
    title: "Apple iPhone 14 Pro Silver",
    brand: "Apple",
    cost: 11000,
  },
]);

  const { addToCart , cart } = useCartContext();



  const [counts, setCounts] = useState(cards.map(() => 0));

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) newCounts[index]--;
    setCounts(newCounts);
  };

  const handleDelete = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    const newCounts = counts.filter((_, i) => i !== index);
    setCards(newCards);
    setCounts(newCounts);
  };


  const totalPrice = counts.reduce((sum, c, i) => sum + c * cards[i].cost, 0);

  const totalCount = counts.reduce((sum, c) => sum + c, 0);

  return (
    <div className="mt-[120px] mx-[285px] min-h-screen">
      <div className="flex flex-col gap-4">
        {cart.map((card, index) => (
          <BasketItem
            key={index}
            card={card}
            count={counts[index]}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
      <div className="flex flex-col mt-4 gap-1.5">
        <div>تعداد : ({totalCount})</div>
        <div>قیمت : {totalPrice} تومان</div>
        <Button className=" text-[var(--color-white)] bg-[var(--color-pink-secondry)] py-[8px] px-[32px] cursor-pointer w-[608px] h-[48px] rounded-full mt-2">
          تکمیل خرید
        </Button>
      </div>
    </div>
  );
};
