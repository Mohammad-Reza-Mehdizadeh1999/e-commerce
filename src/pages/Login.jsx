import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (data) => {
    try {

      toast.success(`خوش آمدید ${data.username} 🙂`);
      console.log("فرم ارسال شد:", data);
    } catch (err) {

      toast.error("خطا در ورود :( لطفاً مجدداً تلاش کنید");
    }
  };

  const onInvalid = (formErrors) => {
    Object.entries(formErrors).forEach(([key, err]) => {
      const msg = err?.message ?? "فیلد نامعتبر";
      toast.error(msg);
    });
  };

  return (
    <div className="flex items-center justify-center text-center mx-auto w-full max-w-5xl bg-black h-screen">

      <form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        className="w-2/3 p-8 flex flex-col justify-center"
      >
        <h2 className="text-lg font-bold mb-6 text-white">ورود</h2>

        {/* username */}
        <Controller
          name="username"
          control={control}
          rules={{
            required: "نام کاربری الزامی است",
            minLength: {
              value: 3,
              message: "نام کاربری باید حداقل 3 کاراکتر باشد",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="نام و نام خانوادگی"
              placeholder="نام و نام خانوادگی"
              className=""
            />
          )}
        />

        {/* password */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "رمز عبور الزامی است",
            minLength: {
              value: 6,
              message: "رمز عبور باید حداقل 6 کاراکتر باشد",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="رمز عبور"
              placeholder="••••••"
              className=""
            />
          )}
        />

        <Button
          className="mt-4 w-full bg-[var(--color-pink-primary)] card-custom py-2 rounded text-white"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "در حال ارسال..." : "ورود"}
        </Button>

        <p className="mt-4 text-sm text-white">
          عضو نیستید ؟
          <Link to="/register" className="text-pink-500">
            {`      ثبت نام`}
          </Link>
        </p>
      </form>

      <div className="">
        <img
          src="/public/auth-light.png"
          alt="login"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default Login;
