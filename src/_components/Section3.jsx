import React from 'react';

export const Section3 = () => {
  return (
    <div className="relative  ">
      {/* Positioned Text Over Image with Glassy Green Effect */}
      <div className="bg-[#1E7869]/50 border border-[#1B7568]/30 text-white px-4 py-2 md:px-8 md:py-6 rounded-2xl flex flex-col 
                      md:w-80 w-48 h-20 md:h-32 backdrop-blur-md absolute top-2 left-2 md:top-5 md:left-5 lg:top-24 lg:left-48 xl:top-8 xl:left-60 gap-1 shadow-lg">
        <span className="lg:text-5xl text-4xl font-bold text-white font-poppins">1500+</span>
        <span className="md:text-xl text-md font-medium text-white font-poppins">Pacientes satisfechos</span>
      </div>

      {/* Image */}
      <img src={'/images/WomanDoctor.webp'} alt='Woman Doctor' className="w-full object-cover xl:h-[600px] " />

    </div>
  );
};
