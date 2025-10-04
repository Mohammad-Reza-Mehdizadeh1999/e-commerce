import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Login = () => {
  const [form, setForm] = useState({ username: "", email: "" , password: "" , confirmPassword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex w-full max-w-5xl bg-black">
      <form className="w-2/3 p-8 flex flex-col justify-center">
        <h2 className="text-lg font-bold mb-6">ثبت نام</h2>

        <Input
          type="text"
          label="نام و نام خانوادگی"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="نام و نام خانوادگی"
        />

        <Input
          type="text"
          label="ایمیل"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ایمیل"
        />

        <Input
          type="password"
          label="رمز عبور"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••"
        />

        <Input
          type="password"
          label="تکرار رمز عبور"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="••••••"
        />

        <Button
          className="mt-4 w-full bg-[var(--color-pink-primary)] card-custom py-2 rounded text-white"
          type="submit"
          onClick={handleClick}
          disabled={false}
        >
          ورود
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

export default Login;
