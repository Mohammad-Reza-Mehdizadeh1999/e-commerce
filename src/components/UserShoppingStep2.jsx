import toast from "react-hot-toast";
import { makeOrder } from "../api/requests/userOrders";
import { useCartContext } from "../context/useCartContext";
import ShoppingProgressTableRow from "./ShoppingProgressTableRow";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

const UserShoppingStep2 = ({ address, city, postcode }) => {
  const navigate = useNavigate();

  const { cart, checkoutInfo, clearCart } = useCartContext();

  const shippingCost = 10000;

  const handleCompleteOrder = async () => {
    const orderItems = cart.map((item) => ({
      _id: item._id,
      name: item.name,
      qty: Number(item.quantity),
    }));

    const orderData = {
      orderItems,
      paymentMethod: "Cash",
      shippingAddress: {
        address,
        city,
        postalCode: postcode,
      },
    };

    try {
      const response = await makeOrder(orderData);
      toast.success("سفارش با موفقیت ثبت شد!");
      clearCart();
      navigate("/user/my-orders");
    } catch (error) {
      console.error("❌ Error making order:", error);
      toast.error("مشکلی در ثبت سفارش پیش آمد!");
    }
  };

  return (
    <div className="flex flex-col w-[90%] mx-auto  min-h-screen items-center gap-3">
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

      <div className="w-full my-8 overflow-x-auto">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="font-bold text-gray-200 border-b border-gray-600">
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

      {/* خلاصه خرید */}
      <div className="flex flex-col w-full max-w-7xl gap-4">
        <h2 className="font-semibold text-lg">خلاصه خرید</h2>

        <div className="flex flex-col lg:flex-row bg-[#E6E8EB] dark:bg-[#151515] rounded-[8px] justify-between p-5 gap-6">
          {/* روش پرداخت */}
          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <h3 className="font-semibold">روش پرداخت</h3>
            <p>روش: درگاه پرداخت پاسارگاد</p>
          </div>

          {/* آدرس */}
          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <h3 className="font-semibold">آدرس دریافت</h3>
            <p>آدرس: {address}</p>
            <p>شهر: {city}</p>
            <p>کد پستی: {postcode}</p>
          </div>

          {/* قیمت‌ها */}
          <div className="flex flex-col gap-2 text-sm sm:text-base w-full lg:w-[30%]">
            <div className="flex justify-between">
              <span>قیمت محصولات:</span>
              <span>{checkoutInfo.totalPrice.toLocaleString()} تومان</span>
            </div>
            <div className="flex justify-between">
              <span>هزینه ارسال:</span>
              <span>{shippingCost.toLocaleString()} تومان</span>
            </div>
            <div className="flex justify-between">
              <span>مالیات:</span>
              <span>
                {(checkoutInfo.totalPrice * 0.1).toLocaleString()} تومان
              </span>
            </div>
            <div className="flex justify-between font-bold border-t border-gray-500 pt-2">
              <span>مبلغ نهایی:</span>
              <span>
                {(
                  checkoutInfo.totalPrice +
                  shippingCost +
                  checkoutInfo.totalPrice * 0.1
                ).toLocaleString()}{" "}
                تومان
              </span>
            </div>
          </div>
        </div>

        <Button
          className="rounded-2xl h-[48px] bg-pink-500 text-white cursor-pointer hover:bg-pink-600 mt-4"
          type="button"
          onClick={handleCompleteOrder}
        >
          ثبت سفارش
        </Button>
      </div>
    </div>
  );
};
export default UserShoppingStep2;
