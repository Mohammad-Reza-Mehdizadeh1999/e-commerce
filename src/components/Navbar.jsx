import React, { useState } from "react";
import {
  FiHome,
  FiUser,
  FiBook,
  FiSettings,
  FiLogOut,
  FiShoppingCart,
} from "react-icons/fi";
import { CiShop } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function RightSidebar() {
  const [expanded, setExpanded] = useState(false);

  const navItemsTop = [
    { id: "home", title: "داشبورد", icon: <FiHome size={20} /> },
    { id: "shop", title: "فروشگاه", icon: <CiShop size={23} /> },
    { id: "basket", title: "سبد خرید", icon: <FiShoppingCart size={20} /> },
    { id: "favourites", title: "علاقه مندی ها", icon: <FaHeart size={20} /> },
  ];

  const navItemsBottom = [
    { id: "login", title: "ورود", icon: <FiHome size={20} /> , to: "/login"},
    { id: "register", title: "ثبت نام", icon: <FiUser size={20} />  , to: "/register"},
  ];

  return (
    <aside
      className={`fixed right-0 top-0 h-full z-50 flex flex-col items-stretch bg-white/80 backdrop-blur-md border-l border-gray-200 dark:bg-slate-900/80 dark:border-slate-700 transition-width duration-300 ease-in-out`}
      style={{ width: expanded ? "14rem" : "3.5rem" }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
      aria-expanded={expanded}
    >
      {/* top spacer (optional logo) */}

      {/* nav items */}
      <nav className="flex-1 overflow-auto py-3">
        <ul className="flex flex-col gap-1 px-1">
          {navItemsTop.map((it) => (
            <li key={it.id}>
              <NavLink
                type="button"
                onClick={it.onClick}
                className={`w-full flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 transition-colors`}
                title={it.title}
              >
                <div className="flex items-center justify-center w-8 h-8">
                  {it.icon}
                </div>
                {/* title shown only when expanded */}
                {expanded && <span className="text-sm">{it.title}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-3">
        <ul className="flex flex-col gap-1 px-1">
          {navItemsBottom.map((it) => (
            <li key={it.id}>
              <NavLink
                type="button"
                onClick={it.onClick}
                className={`w-full flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 transition-colors`}
                title={it.title}
                to={it.to}
              >
                <div className="flex items-center justify-center w-8 h-8">
                  {it.icon}
                </div>
                {/* title shown only when expanded */}
                {expanded && <span className="text-sm">{it.title}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
