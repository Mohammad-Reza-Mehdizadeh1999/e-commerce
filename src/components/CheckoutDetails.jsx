import Button from "./ui/Button";

const CheckoutDetails = ({
  OrderNumber,
  name,
  email,
  address,
  howToPay,
  isDelivered,
  price,
  tax,
  m,
  finalPrice,
  isPaid,
}) => {
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium text-xl text-[var(--color-black)] dark:text-[var(--color-white)]">
          آدرس دریافت
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-[var(--button-primary)] font-bold text-sm">
            <span className="text-[var(--color-pink-secondry)]">
              شماره سفارش :{" "}
            </span>
            <span className="dark:text-[var(--color-white)] text-[var(--color-black)]">
              {OrderNumber}
            </span>
          </p>
          <p className="text-[var(--button-primary)] font-bold text-sm">
            <span className="text-[var(--color-pink-secondry)]">نام : </span>{" "}
            <span className="dark:text-[var(--color-white)] text-[var(--color-black)]">
              {name}
            </span>
          </p>
          <p className="text-[var(--button-primary)] font-bold text-sm">
            <span className="text-[var(--color-pink-secondry)]">ایمیل : </span>{" "}
            <span className="dark:text-[var(--color-white)] text-[var(--color-black)]">
              {email}
            </span>
          </p>
          <p className="text-[var(--button-primary)] font-bold text-sm">
            <span className="text-[var(--color-pink-secondry)]">آدرس : </span>{" "}
            <span className="dark:text-[var(--color-white)] text-[var(--color-black)]">
              {address}
            </span>
          </p>
          <p className="text-[var(--button-primary)] font-bold text-sm">
            <span className="text-[var(--color-pink-secondry)]">
              {" "}
              روش پرداخت :
            </span>
            <span className="dark:text-[var(--color-white)] text-[var(--color-black)]">
              {" "}
              درگاه پرداخت پاسارگاد
            </span>
          </p>
        </div>
      </div>
      <div
        className={`w-full  py-2 px-2 rounded-md ${
          isPaid ? "bg-green-500 " : " bg-red-500"
        } `}
      >
        <p className="text-[var(--color-black)] text-center dark:text-[var(--color-white)]">
          {isPaid ? "ارسال شده" : "ارسال نشده"}
        </p>
      </div>

      <div className="flex flex-col  gap-3">
        <h3 className="mb-4 text-[var(--color-black)] dark:text-[var(--color-white)] text-xl">
          خلاصه خرید
        </h3>
        <div className="flex justify-between">
          <p className="text-[var(--color-gray-card)]">قیمت محصولات :</p>
          <span className="text-[var(--color-black)] dark:text-[var(--color-white)]">
            {price} تومان
          </span>
        </div>
        <div className="flex justify-between">
          <p className="text-[var(--color-gray-card)]">هزینه ارسال :</p>
          <span className="text-[var(--color-black)] dark:text-[var(--color-white)]">
            {tax} تومان{" "}
          </span>
        </div>
        <div className="flex justify-between">
          <p className="text-[var(--color-gray-card)]">مالیات :</p>
          <span className="text-[var(--color-black)] dark:text-[var(--color-white)]">
            {m} تومان
          </span>
        </div>
        <div className="flex justify-between">
          <p className="text-[var(--color-gray-card)]">مبلغ نهایی :</p>
          <span className="text-[var(--color-black)] dark:text-[var(--color-white)]">
            {finalPrice} تومان
          </span>
        </div>
      </div>

      {!isPaid && (
        <Button className="bg-[var(--color-pink-primary)] rounded-full py-2 px-8 cursor-pointer hover:bg-pink-400">
          پرداخت
        </Button>
      )}
    </div>
  );
};

export default CheckoutDetails;
