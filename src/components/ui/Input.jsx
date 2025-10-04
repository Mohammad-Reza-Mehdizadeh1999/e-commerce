import { FiEye, FiEyeOff } from "react-icons/fi";

import { useState } from "react";

export default function Input({
  type = "text",
  label,
  name,
  value,
  onChange,
  placeholder,
  className,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);

  let inputType = type;

  if (type === "password") {
    inputType = showPassword ? "text" : "password";
  }
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 font-medium" htmlFor={name}>
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-white text-black border border-[#CED2D7] rounded-[8px] px-3 py-2 focus:outline-none focus:ring-3 focus:ring-[var(--color-pink-primary)] ${className}`}
          {...rest}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-[var(--color-pink-secondry)] cursor-pointer"
          >
            {showPassword ? <FiEye size={20}/> : <FiEyeOff size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}