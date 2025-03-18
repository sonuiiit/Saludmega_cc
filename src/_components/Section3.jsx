import React from 'react';

export const Section3 = () => {
  return (
    <div className="relative lg:h-[750px] md:h-[485px] h-[285px] border-4s">
      {/* Positioned Text Over Image with Glassy Green Effect */}
      <div className="bg-[#00836999]/50 border border-[#1B7568]/30 text-white px-4  md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-2xl flex flex-col justify-center -space-y-2
                      md:w-76 w-54 h-24 md:h-28 backdrop-blur-md absolute top-[4px] left-[16px] md:top-8 md:left-24 lg:top-20 lg:left-72  ">
        <span className="lg:text-[48px] text-[36px] font-bold text-[#D9D9D9] font-lato">1500+</span>
        <span className="md:text-[20px] lg:text-[24px] text-[16px] text-md font-medium text-white font-poppins">Pacientes satisfechos</span>
      </div>

      {/* Image */}
      <img src={'/images/WomanDoctor.webp'} alt='Woman Doctor' className="w-full h-full object-cover" />

    </div>
  );
};
