import Input from "../components/ui/Input";

export default function UserProfileUpdate() {
  return (
    <div className="min-h-screen flex flex-col mt-12 items-center p-4">
      <form className="w-full max-w-md text-right">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">
          بروز‌رسانی پروفایل
        </h2>

        <Input
          label="نام"
          name="name"
          placeholder="نام خود را وارد نمایید"
          className="bg-transparent  border-gray-700 focus:ring-pink-500"
        />

        <Input
          label="ایمیل"
          name="email"
          type="email"
          placeholder="ایمیل خود را وارد نمایید"
          className="bg-transparent  border-gray-700 focus:ring-pink-500"
        />

        <Input
          label="رمزعبور"
          name="password"
          type="password"
          placeholder="رمزعبور خود را وارد نمایید"
          className="bg-transparent  border-gray-700 focus:ring-pink-500"
        />

        <Input
          label="تکرار رمزعبور"
          name="confirmPassword"
          type="password"
          placeholder="تکرار رمزعبور خود را وارد نمایید"
          className="bg-transparent  border-gray-700 focus:ring-pink-500"
        />

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-md text-sm"
          >
            سفارشات من
          </button>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-md text-sm"
          >
            بروز‌رسانی
          </button>
        </div>
      </form>
    </div>
  );
}
