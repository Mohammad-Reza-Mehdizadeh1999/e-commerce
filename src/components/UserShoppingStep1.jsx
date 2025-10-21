import Input from "./ui/Input";

const UserShoppingStep1 = ({
  handleAddressChange,
  handleCityChange,
  handleCountryChange,
  handlePostcodeChange,
  step,
  setStep,
  address,
  city,
  country,
  postcode,
}) => {
  const handleStep = () => {
    setStep(2);
  };
  return (
    <div className="flex flex-col gap-20 items-center min-h-screen mt-10">
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-[16px]">خلاصه خرید</div>
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

      <div className=" flex flex-col  ">
        <div className=""></div>
        <form className="flex flex-col gap-4 w-[640px]">
          <h2 className="font-semibold">خرید</h2>
          <Input
            label="آدرس"
            name="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="آدرس را وارد کنید"
            required
          />
          <Input
            label="شهر"
            name="city"
            value={city}
            onChange={handleCityChange}
            placeholder="شهر را وارد کنید"
            required
          />
          <Input
            label="کشور"
            name="country"
            value={country}
            onChange={handleCountryChange}
            placeholder="کشور را وارد کنید"
            required
          />
          <Input
            label="کدپستی"
            name="postcode"
            value={postcode}
            onChange={handlePostcodeChange}
            placeholder="کدپستی را وارد کنید"
            required
          />
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[#999FA6]">روش پرداخت</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" className="accent-pink-600" />
              <p>درگاه پرداخت پاسارگاد</p>
            </div>
          </div>
          <button
            onClick={handleStep}
            className="bg-[#DB2777] rounded-4xl h-[48px] cursor-pointer"
          >
            ادامه
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserShoppingStep1;
