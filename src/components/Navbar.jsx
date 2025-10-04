import React, { useState } from 'react';
import { FiHome, FiUser, FiBook, FiSettings, FiLogOut } from 'react-icons/fi';

// RightSidebar component
// Usage: <RightSidebar items={items} />
// items: [{ id, title, icon: <FiHome />, onClick }]

export default function RightSidebar({ items }) {
  const [expanded, setExpanded] = useState(false);

  // sensible default items if none provided
  const defaultItems = [
    { id: 'home', title: 'خانه', icon: <FiHome size={20} /> },
    { id: 'profile', title: 'پروفایل', icon: <FiUser size={20} /> },
    { id: 'courses', title: 'دوره‌ها', icon: <FiBook size={20} /> },
    { id: 'settings', title: 'تنظیمات', icon: <FiSettings size={20} /> },
    { id: 'logout', title: 'خروج', icon: <FiLogOut size={20} /> },
  ];

  const navItems = items && items.length ? items : defaultItems;

  return (
    <aside
      className={`fixed right-0 top-0 h-full z-50 flex flex-col items-stretch bg-white/80 backdrop-blur-md border-l border-gray-200 dark:bg-slate-900/80 dark:border-slate-700 transition-width duration-300 ease-in-out`} 
      style={{ width: expanded ? '14rem' : '3.5rem' }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
      aria-expanded={expanded}
    >
      {/* top spacer (optional logo) */}
      <div className="flex items-center justify-center h-16 border-b border-gray-100 dark:border-slate-700">
        <div className="flex items-center gap-3 pl-2 pr-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800">
            {/* small logo or icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3v18" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 12h18" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {expanded && <span className="text-sm font-medium">قاب سمت راست</span>}
        </div>
      </div>

      {/* nav items */}
      <nav className="flex-1 overflow-auto py-3">
        <ul className="flex flex-col gap-1 px-1">
          {navItems.map((it) => (
            <li key={it.id}>
              <button
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
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-100 dark:border-slate-700 p-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-800" />
          {expanded && (
            <div className="flex flex-col">
              <span className="text-sm">نام کاربر</span>
              <button className="text-xs text-gray-500">مشاهده پروفایل</button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

