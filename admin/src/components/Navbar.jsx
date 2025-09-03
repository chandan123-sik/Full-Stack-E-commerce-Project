import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-[4%] py-3">
        <img
          className="w-[max(10%,80px)] hover:opacity-90 transition"
          src={assets.logo}
          alt="logo"
        />
        <button
          onClick={() => setToken("")}
          className="rounded-full text-white px-5 py-2 sm:px-7 sm:py-2 text-xs sm:text-sm font-medium transition hover:-translate-y-[1px] hover:shadow-lg bg-slate-900"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
