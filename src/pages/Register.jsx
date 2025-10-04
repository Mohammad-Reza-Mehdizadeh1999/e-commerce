import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    try {

      toast.success(`خوش آمدی ${data.username} 🙂`);
      console.log("فرم ثبت‌نام:", data);
    } catch (err) {
      toast.error("خطا در ثبت‌نام — لطفاً دوباره تلاش کنید");
    }
  };

  const onInvalid = (formErrors) => {
    Object.values(formErrors).forEach((err) => {
      const msg = err?.message ?? "فیلد نامعتبر";
      toast.error(msg);
    });
  };

  return (
    <div className="flex w-full max-w-5xl bg-black">
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        className="w-2/3 p-8 flex flex-col justify-center"
      >
        <h2 className="text-lg font-bold mb-6">ثبت نام</h2>

        {/* username */}
        <Controller
          name="username"
          control={control}
          rules={{
            required: "نام و نام خانوادگی الزامی است",
            minLength: { value: 3, message: "حداقل ۳ کاراکتر وارد کنید" },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="نام و نام خانوادگی"
              placeholder="نام و نام خانوادگی"
            />
          )}
        />

        {/* email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "ایمیل الزامی است",
            pattern: {
              value:
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "ایمیل وارد شده معتبر نیست",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="ایمیل"
              placeholder="ایمیل"
            />
          )}
        />

        {/* password */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "رمز عبور الزامی است",
            minLength: { value: 6, message: "رمز باید حداقل ۶ کاراکتر باشد" },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="رمز عبور"
              placeholder="••••••"
            />
          )}
        />

        {/* confirmPassword */}
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "تکرار رمز عبور الزامی است",
            validate: (value) =>
              value === getValues("password") || "رمزها مطابقت ندارند",
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="تکرار رمز عبور"
              placeholder="••••••"
            />
          )}
        />

        <Button
          className="mt-4 w-full bg-[var(--color-pink-primary)] card-custom py-2 rounded text-white"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "در حال ارسال..." : "ثبت نام"}
        </Button>

        <p className="mt-4 text-sm">
          عضو هستید ؟
          <Link to="/login" className="text-pink-500">
            {`       ورود`}
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

export default Register;
