import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const itemBase =
  "flex items-center gap-3 px-4 py-3 rounded-xl border transition shadow-sm";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r bg-white/60 backdrop-blur">
      <div className="flex flex-col gap-3 pt-6 px-4 text-[15px]">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `${itemBase} ${
              isActive
                ? "bg-violet-100/70 text-violet-700 border-violet-300"
                : "border-slate-200 hover:bg-slate-50 hover:border-violet-200"
            }`
          }
        >
          <img className="w-5 h-5 opacity-80" src={assets.add_icon} alt="" />
          <p className="hidden md:block font-medium">Add items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${itemBase} ${
              isActive
                ? "bg-violet-100/70 text-violet-700 border-violet-300"
                : "border-slate-200 hover:bg-slate-50 hover:border-violet-200"
            }`
          }
        >
          <img className="w-5 h-5 opacity-80" src={assets.order_icon} alt="" />
          <p className="hidden md:block font-medium">List items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${itemBase} ${
              isActive
                ? "bg-violet-100/70 text-violet-700 border-violet-300"
                : "border-slate-200 hover:bg-slate-50 hover:border-violet-200"
            }`
          }
        >
          <img className="w-5 h-5 opacity-80" src={assets.order_icon} alt="" />
          <p className="hidden md:block font-medium">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
