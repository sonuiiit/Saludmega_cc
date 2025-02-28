import React from 'react';

export const Section3 = () => {
  return (
    <div className="relative  ">
      {/* Positioned Text Over Image with Glassy Green Effect */}
      <div className="bg-[#1E7869]/50 border border-[#1B7568]/30 text-white px-4 py-2 md:px-8 md:py-6 rounded-2xl flex flex-col 
                      md:w-80 w-60 h-28 md:h-36 backdrop-blur-md absolute top-5 left-5 md:top-5 md:left-5 lg:top-24 lg:left-48 xl:top-8 xl:left-60 gap-2 shadow-lg">
        <span className="text-5xl font-bold text-white">1500+</span>
        <span className="md:text-2xl text-xl font-medium text-white">Pacientes satisfechos</span>
      </div>

      {/* Image */}
      <img src={'/images/WomanDoctor.jpeg'} alt='Woman Doctor' className="w-full object-cover xl:h-[600px] " />

    </div>
  );
};
