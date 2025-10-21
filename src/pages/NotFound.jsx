import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 dark:bg-black  dark:text-white text-center w-full overflow-hidden relative">

      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <h1 className="text-[120px] font-extrabold text-pink-500 drop-shadow-lg animate-bounce">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4 animate-fadeIn">
        صفحه‌ای که دنبالش هستی پیدا نشد 😕
      </h2>

      <p className="text-gray-400 mt-3 max-w-md animate-fadeIn delay-200">
        ممکنه آدرس اشتباه باشه یا این صفحه حذف شده باشه.  
        لطفاً به صفحه اصلی برگرد.
      </p>

      <Link
        to="/home"
        className="mt-8 bg-pink-600 z-20 hover:bg-pink-700 transition-all text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-pink-500/30 animate-float"
      >
        بازگشت به صفحه اصلی
      </Link>

      <div className="absolute bottom-10 right-10 w-[150px] h-[150px] bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
    </div>
  );
}
