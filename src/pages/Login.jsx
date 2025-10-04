import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(form)
  };

  return (
    <div className="flex w-full max-w-5xl bg-black">
      <form className="w-2/3 p-8 flex flex-col justify-center">
        <h2 className="text-lg font-bold mb-6">ورود</h2>

        <Input
          type="text"
          label="نام و نام خانوادگی"
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

        <Button
          className="mt-4 w-full bg-[var(--color-pink-primary)] card-custom py-2 rounded text-white"
          type="submit"
          onClick={handleClick}
          disabled={false}
        >
          ورود
        </Button>

        <p className="mt-4 text-sm">
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
