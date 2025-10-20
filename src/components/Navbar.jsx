import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handlenav = () => {
    setNav(!nav);
  };
  const navItems = [
  { label: "Home", path: "/" },
  { label: "Our Apps", path: "/apps" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

  return (
    <>
      {/* 🔹 Top Navbar */}
      <div className=" font-[Poppins] flex justify-between items-center md:px-16 px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Wellnex <span className="text-[#34C759]">Systems</span>
          </h1>
        </div>

        {/* Desktop Menu */}
       <ul className="hidden md:flex gap-10 text-lg font-medium text-white">
  {navItems.map((item, index) => (
    <Link
      to={item.path}
      key={index}
      className="relative group cursor-pointer hover:text-[#34C759] transition-all"
    >
      {item.label}
    </Link>
  ))}
</ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex">
          <i
            className="ri-menu-3-line text-3xl text-white cursor-pointer hover:text-[#34C759] transition-all"
            onClick={handlenav}
          ></i>
        </div>
      </div>

      {/* 🔹 Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-gradient-to-b from-[#0A0A0A]/95 to-[#0F1A10]/95 backdrop-blur-xl shadow-2xl border-l border-white/10 z-50 transform transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Wellnex <span className="text-[#34C759]">Systems</span>
          </h2>
          <i
            className="ri-close-line text-3xl text-white cursor-pointer hover:text-[#34C759] transition-all"
            onClick={handlenav}
          ></i>
        </div>

      <ul className="hidden md:flex gap-10 text-lg font-medium text-white">
  {navItems.map((item, index) => (
    <Link
      to={item.path}
      key={index}
      className="relative group cursor-pointer hover:text-[#34C759] transition-all"
    >
      {item.label}
    </Link>
  ))}
</ul>

        {/* CTA Button */}
        <div className="px-8 mt-8">
          <button className="w-full bg-gradient-to-r from-[#34C759] to-[#2ca44e] text-white py-3 rounded-full font-semibold hover:scale-[1.02] transition-all shadow-md">
            Join the Movement
          </button>
        </div>

        <div className="absolute bottom-6 left-0 w-full text-center text-gray-400 text-sm">
          © 2025 Wellnex Systems
        </div>
      </div>

      {/* 🔹 Overlay Background */}
      {nav && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-[2px]"
          onClick={handlenav}
        ></div>
      )}
    </>
  );
};

export default Navbar;
