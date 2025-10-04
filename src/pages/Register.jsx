import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex w-full max-w-5xl bg-black">
      <div className="flex-1">
        <img
          src="https://picsum.photos/800/600"
          alt="register"
          className="rounded-lg"
        />
      </div>
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-lg font-bold mb-6">ثبت نام</h2>

        <input
          type="text"
          placeholder="نام خود را وارد نمایید"
          className="mb-4 w-full rounded bg-zinc-900 px-3 py-2 text-sm text-white"
        />
        <input
          type="email"
          placeholder="ایمیل خود را وارد نمایید"
          className="mb-4 w-full rounded bg-zinc-900 px-3 py-2 text-sm text-white"
        />
        <input
          type="password"
          placeholder="رمز عبور خود را وارد نمایید"
          className="mb-4 w-full rounded bg-zinc-900 px-3 py-2 text-sm text-white"
        />
        <input
          type="password"
          placeholder="رمز عبور خود را دوباره وارد نمایید"
          className="mb-4 w-full rounded bg-zinc-900 px-3 py-2 text-sm text-white"
        />

        <button className="bg-pink-600 hover:bg-pink-700 rounded px-4 py-2">
          ثبت نام
        </button>

        <p className="mt-4 text-sm">
          عضو هستید؟{" "}
          <Link to="/login" className="text-pink-500">
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
