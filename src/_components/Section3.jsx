import React from 'react';

export const Section3 = () => {
  return (
    <div className="relative  ">
      {/* Positioned Text Over Image with Glassy Green Effect */}
      <div className="bg-[#00836999]/50 border border-[#1B7568]/30 text-white px-4 py-2 md:px-8 md:py-4 rounded-2xl flex flex-col 
                      md:w-84 w-54 h-24 md:h-36 backdrop-blur-md absolute top-[4px] left-[16px] md:top-5 md:left-5 lg:top-24 lg:left-48 xl:top-8 xl:left-60 gap-1 shadow-lg">
        <span className="lg:text-[48px] text-[36px] font-bold text-[#D9D9D9] font-lato">1500+</span>
        <span className="md:text-[20px] lg:text-[24px] text-[16px] text-md font-medium text-white font-poppins">Pacientes satisfechos</span>
      </div>

      {/* Image */}
      <img src={'/images/WomanDoctor.webp'} alt='Woman Doctor' className="w-full object-cover xl:h-[600px] " />

    </div>
  );
};
