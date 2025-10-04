import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import MainLayout from "../layouts/MainLayout";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <MainLayout>
      <div className="flex w-full max-w-5xl bg-black">
        <div className="flex-1">
          <img
            src="https://picsum.photos/800/600"
            alt="login"
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-lg font-bold mb-6">ورود</h2>

          <Input
            type="text"
            label="نام کاربری"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="نام و نام خانوادگی"
          />

          <Input
            type="password"
            label="رمز عبور"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••"
          />

          <button className="mt-4 w-full bg-[var(--color-brand)] card-custom py-2 rounded">
            ورود
          </button>

          <p className="mt-4 text-sm">
            عضو نیستید؟{" "}
            <Link to="/register" className="text-pink-500">
              ثبت نام
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
