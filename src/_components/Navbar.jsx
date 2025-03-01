import React from 'react';
import { Menu, Mail } from 'lucide-react';

export default function Navbar({ onClick }) {
  return (
    <div className="flex items-center justify-between px-4 xl:mx-4 md:mx-8 mt-2 relative">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        {/* Hamburger Menu: Only Visible on Mobile (sm), Hidden on md+ */}
        <div className="sm:flex md:hidden items-center">
          <Menu className="text-gray-600 w-6 h-6 relative top-1" />
        </div>

        {/* Logo and 'Inicio' Text */}
        <div className="flex items-center gap-2">
          <div className="w-28 h-[55px] md:w-32 xl:w-36 flex items-center">
            {/* Mobile Logo */}
            <img
              src={'/images/Isologo.png'}
              alt="Mobile Logo"
              className="w-full h-full p-2 object-contain block sm:block md:hidden"
            />
            {/* Desktop Logo */}
            <img
              src={'/images/Logo.png'}
              alt="Logo"
              className="w-full h-full object-contain hidden md:block mb-2"
            />
          </div>

          {/* 'Inicio' Text: Hidden on Mobile, Shown on md+ */}
          <div className="hidden md:block text-lg md:text-xl xl:text-2xl font-semibold ml-2 text-gray-500 leading-none relative ">
            Inicio
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="flex-shrink-0">
        {/* Mobile Icon Button */}
        <button
          onClick={() => onClick()}
          className="bg-[#008369] sm:flex md:hidden w-12 h-12 rounded-2xl text-white flex items-center justify-center"
        >
          <Mail className="w-5 h-5" />
        </button>

        {/* Full Button for Tablet and Desktop */}
        <button
          onClick={() => onClick()}
          className="hidden md:block bg-[#008369] p-2 w-32 md:w-40 xl:w-44 mb-2 h-12 rounded-2xl text-white tracking-widest"
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
}
