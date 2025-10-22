import { useCartContext } from "../context/useCartContext";
import BasketItem from "../components/BasketItem";
import { useNavigate } from "react-router-dom";

export default function UserBasket() {

  const navigate = useNavigate();

  const { cart , setCheckoutInfo } = useCartContext();

  const totalCount = cart.reduce((sum, item) => sum + Number(item.quantity), 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  const handleClickToShopProgress = () => {
    
    setCheckoutInfo({ totalPrice: totalPrice , totalCount: totalCount })
    navigate("/user/shop-progress");


  }


  if(cart.length === 0){
    return (
      <div className="flex justify-center min-h-screen mt-24">
        <h2 className="text-lg text-pink-500">سبد خرید شما خالی است</h2>
      </div>
    );
  }

  return (
    <div className="mt-[120px] mx-[285px] min-h-screen">
      <div className="flex flex-col gap-4">
        {cart.map((card, index) => (
          <BasketItem key={index} card={card} />
        ))}
      </div>

      <div className="flex flex-col mt-4 gap-1.5 text-[var(--color-black)] dark:text-[var(--color-white)]">
        <div>تعداد کل محصولات: ({totalCount})</div>
        <div>جمع کل قیمت: {totalPrice.toLocaleString()} تومان</div>

        <button onClick={()=> handleClickToShopProgress()}  className="text-[var(--color-white)] text-center bg-[var(--color-pink-secondry)] py-[8px] px-[32px] cursor-pointer w-[608px]  rounded-full mt-2">
          تکمیل خرید
        </button>
      </div>
    </div>
  );
}
