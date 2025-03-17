import React from "react";
import { Menu, Mail } from "lucide-react";

export default function Navbar({ onClick }) {
  return (
    <div className="flex items-center justify-between  h-[74px] md:mx-16 ml-8 ">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        {/* Hamburger Menu: Only Visible on Mobile (sm), Hidden on md+ */}
        <div className="flex md:hidden items-center">
          <Menu className="text-gray-600 w-[40px] h-[40px] relative " />
        </div>

        {/* Logo and 'Inicio' Text */}
        <div className="flex items-center gap-2 relative ">
          <div className="  flex items-center">
            {/* Mobile Logo */}
            <img
              src={"/images/Isologo.png"}
              alt="Mobile Logo"
              className="w-full p-2 h-[55px] object-contain -top-1 relative block md:hidden"
            />
            {/* Desktop Logo */}
            <img
              src={"/images/Logo.png"}
              alt="Logo"
              className="w-[166px] h-[60px] object-contain hidden md:block mb-2"
            />
          </div>

          {/* 'Inicio' Text: Hidden on Mobile, Shown on md+ */}
          <button className="hidden font-poppins md:block text-[20px] w-[55px] h-[28px]  font-semibold ml-2 top-1 text-[#43525D] leading-none relative">
            Inicio
          </button>
        </div>
      </div>

      {/* Contact Button */}
      <div className="flex-shrink-0">
        {/* Mobile Icon Button */}
        <button
          onClick={() => onClick()}
          className="bg-primary flex md:hidden absolute top-0 right-0  w-[74px] h-[74px]  items-center justify-center rounded-l-lg text-white"
        >
          <Mail className="w-[50px] h-[50px] p-2" />
        </button>

        {/* Full Button for Tablet and Desktop */}
        <button
          onClick={() => onClick()}
          className="hidden md:block font-poppins bg-primary p-4 w-[216px] h-[60px] rounded-2xl text-white tracking-widest"
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
}
