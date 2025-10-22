import { useCartContext } from "../context/useCartContext";
import ShoppingProgressTableRow from "./ShoppingProgressTableRow";
import Button from "./ui/Button";

const UserShoppingStep2 = ({ address, city, country, postcode }) => {

  const { cart } = useCartContext();

  console.log(cart);
  
  const shippingCost = 10000;

  return (
    <div className="flex flex-col  min-h-screen items-center gap-3">
      <div className="flex justify-center items-center gap-4 mt-[60px]">
        <div className="flex flex-col gap-3 items-center">
          <div className="text-[16px] text-green-500">خلاصه خرید</div>
          <div>✅</div>
        </div>
        <div className="h-0.5 w-[160px] bg-green-500"> </div>
        <div className="flex flex-col gap-3">
          <div className="text-[16px] text-green-500">آدرس</div>
          <div>✅</div>
        </div>
        <div className="h-0.5 w-[160px] bg-green-500"> </div>
        <div className="flex flex-col gap-3">
          <div className="text-[16px] text-green-500">ورود</div>
          <div>✅</div>
        </div>
      </div>

      <div className="flex justify-between w-[1536px] items-center my-[50px]">
        <table className=" w-full text-sm  table-fixed">
          <thead className="w-full ">
            <tr className="  w-full font-bold">
              <th className="px-4 py-2 text-right">عکس</th>
              <th className="px-4 py-2 text-right">نام محصول</th>
              <th className="px-4 py-2 text-center">تعداد</th>
              <th className="px-4 py-2 text-left">قیمت</th>
              <th className="px-4 py-2 text-left">قیمت نهایی</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            {cart.map((item, index) => (
              <ShoppingProgressTableRow
                key={index}
                image={item.image}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            ))}

          </tbody>
        </table>
      </div>

      <div className="flex flex-col w-[1536px] gap-4 ">
        <div>خلاصه خرید</div>
        <div className="flex bg-[#E6E8EB]  rounded-[8px] justify-between p-[20px] dark:bg-[#151515]">
          <div className="flex flex-col gap-3">
            <div>روش پرداخت</div>
            <p>روش: درگاه پرداخت پاسارگاد</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2>آدرس دریافت</h2>
            <p>آدرس: {address}</p>
          </div>
          <div className="flex  w-[20%]  flex-col gap-1.5">
            <div className="flex justify-between ">
              <div>قیمت محصولات:</div>
              <div>{cart.totalPrice.toLocaleString()} تومان</div>
            </div>

            <div className="flex justify-between">
              <div>هزینه ارسال:</div>
              <div>{shippingCost.toLocaleString()} تومان</div>
            </div>

            <div className="flex justify-between">
              <div>مالیات:</div>
              <div>{(cart.totalPrice * 0.1).toLocaleString()} تومان</div>
            </div>

            <div className="flex justify-between font-bold">
              <div>مبلغ نهایی:</div>
              <div>{(cart.totalPrice + shippingCost + (cart.totalPrice * 0.1)).toLocaleString()} تومان</div>
            </div>
          </div>
        </div>
        <Button
          className="rounded-2xl h-[48px] bg-[#DB2777] text-white"
          type="button"
          onClick={() => alert("Clicked!")}
        >
          ثبت سفارش
        </Button>
      </div>
    </div>
  );
};
export default UserShoppingStep2;
