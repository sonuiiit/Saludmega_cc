import React from "react";

const HeroSection = ({ onClick }) => {
  return (
    <div className="relative w-full xl:h-screen md:h-[80vh] h-[70vh] flex items-center bg-cover bg-center bg-no-repeat">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block sm:hidden object-[50%_right]"
        style={{
          backgroundImage: `url('/images/FamilyBeach-tm.webp')`,
          backgroundPosition: "50% center top -50px",
        }}
      />

      {/* Tablet Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block lg:hidden"
        style={{
          backgroundImage: `url('/images/FamilyBeach-tm.webp')`,
          backgroundPosition: "0% center",
        }}
      />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: `url('/images/FamilyBeach-desktop.webp')`,
        }}
      />

      {/* Content Section */}
      <div className="relative w-full px-6 flex justify-center lg:justify-end lg:mx-20 md:-top-8 top-0 lg:top-12">
        <div className="max-w-lg text-gray-600 text-center lg:text-right flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-4xl font-bold leading-tight font-poppins text-[#44494A]">
            Impulsa Tu <br className="block md:hidden" /> Bienestar
          </h1>
          <p className="mt-3 text-lg md:text-lg text-gray-700 max-w-[280px] sm:max-w-xs md:max-w-md leading-relaxed">
            Dedicados a proteger lo más valioso: tu salud.
          </p>
          <button
            onClick={() => onClick()}
            style={{ letterSpacing: "0.2em" }}
            className="mt-10 md:mt-6 font-lato text-white text-lg px-8 py-4 rounded-xl shadow-md 
            transition border border-gray-400 
            sm:bg-[#43525DE5] sm:border-none backdrop-blur-none 
            bg-[#43525DE5] bg-opacity-50  hover:bg-opacity-80 w-[250px] h-[78px]"
          >
            CONTÁCTANOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
