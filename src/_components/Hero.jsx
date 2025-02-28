import React from "react";

const HeroSection = ({ onClick }) => {
  return (
    <div className="relative w-full xl:h-[100vh] md:[h-80vh] h-[70vh]   flex items-center bg-cover bg-center bg-no-repeat">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block sm:hidden object-[50%_right]"
        style={{
          backgroundImage: `url('/images/FamilyBeach-mobile.png')`,
          backgroundPosition: '25% center' 
        }}
      />

      {/* Tablet Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block lg:hidden"
        style={{
          backgroundImage: `url('/images/FamilyBeach.jpeg')`,
          backgroundPosition: '0% center' 
        }}
      />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block "
        style={{
          backgroundImage: `url('/images/FamilyBeach-desktop.png')`,
        }}
      />

      {/* Content Section */}
      <div className="relative w-full px-6 flex justify-center lg:justify-end lg:mx-20">
        <div className="max-w-lg text-gray-600 text-center lg:text-right flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight " >
            Impulsa Tu <br className="block md:hidden" /> Bienestar
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700 max-w-[280px] sm:max-w-xs md:max-w-md leading-relaxed">
            Dedicados a proteger lo más valioso: tu salud.
          </p>
          <button onClick={() => onClick()} style={{ letterSpacing: "0.2em" }} className="mt-6 bg-gray-500 text-white text-lg px-8 py-4 rounded-xl shadow-md hover:bg-gray-700 transition">
            CONTÁCTANOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
