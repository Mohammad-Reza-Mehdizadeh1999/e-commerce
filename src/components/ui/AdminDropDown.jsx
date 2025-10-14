import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import toast from "react-hot-toast";
import { logOutUser } from "../../api/requests/logout";

export default function AdminDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 1, title: "داشبورد", to: "/admin/dashboard" },
    { id: 2, title: "محصول جدید", to: "/admin/create-product" },
    { id: 3, title: "مدیریت کاربران", to: "/admin/all-users" },
    { id: 4, title: "سفارشات", to: "/admin/orders" },
    { id: 6, title: "خروج از حساب", to: "/login" },
  ];


    const handleDropDownClick = async (item) => {
    if(item.title === "خروج از حساب"){
      try{
        const data = await logOutUser()
        if(data.status === 200){
          toast.success("با موفقیت از حساب خود خارج شدید")
          localStorage.clear()
        }
        
      } catch (err) {
        toast.error("خروج از حساب با مشکل مواجه شد")
      }
    }
  }

  return (
    <div
      className="flex flex-col justify-center items-center gap-1.5 text-[var(--color-black)] dark:text-[var(--color-white)] relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`absolute bottom-10 w-[170px] bg-[#111] rounded-xl border border-gray-700 p-3 
        text-[var(--color-black)] dark:text-[var(--color-white)] 
        transition-all duration-300 ease-in-out origin-bottom z-50
        ${isOpen ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-3 scale-y-0"} `}
      >
        <div className="flex flex-col space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              onClick={() => {
                handleDropDownClick(item)
                setIsOpen(false)}}
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

      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="flex items-center justify-center gap-1 text-sm font-medium">
          ادمین
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
