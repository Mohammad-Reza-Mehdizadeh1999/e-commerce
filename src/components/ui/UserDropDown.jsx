import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function UserDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 1, title: "پروفایل", to: "/user/profile-edit" },
    { id: 2, title: "خروج از حساب", to: "/login" },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center gap-1.5 text-[var(--color-black)] dark:text-[var(--color-white)] relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* dropdown menu */}
      <div
        className={`absolute bottom-10 w-[160px] bg-[#111] rounded-xl border border-gray-700 p-3
        text-[var(--color-black)] dark:text-[var(--color-white)] 
        transition-all duration-300 ease-in-out origin-bottom
        ${isOpen ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-3 scale-y-0"} `}
      >
        <div className="flex flex-col space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${
                location.pathname === item.to
                  ? "bg-pink-900 text-pink-300"
                  : "hover:bg-gray-800"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between cursor-pointer select-none">
        <span className="flex items-center justify-center gap-2 text-sm font-medium">
          کاربر
          {isOpen ? (
            <FaChevronUp size={12} className="text-gray-400" />
          ) : (
            <FaChevronDown size={12} className="text-gray-400" />
          )}
        </span>
      </div>
    </div>
  );
}
