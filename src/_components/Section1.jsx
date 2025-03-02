import React from 'react';

const Section1 = ({ onClick }) => {
  return (
    <div className=" flex flex-col lg:flex-row items-center justify-center gap-4 p-6 md:p-12 lg:p-24 md:mx-16 lg:mx-0">
      
      {/* Text Section */}
      <div className="  w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mr-0 lg:mr-16 ">
        {/* Heading Only for Desktop */}
        <h2 className="hidden lg:block text-4xl lg:text-5xl font-bold text-gray-600 lg:mb-8">
          Comprometidos Contigo
        </h2>
        
        <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg text-left">
          Trabajamos cada día para ofrecerte el apoyo necesario en tu camino hacia una vida más
          saludable. Nos importa tu salud, y por eso estamos aquí para asegurarnos de que siempre
          tengas acceso a lo que necesitas para sentirte bien y alcanzar tu mejor versión.
        </p>
        
        <button 
          onClick={() => onClick()} 
          className="bg-primary text-white py-4 px-6 rounded-xl hover:bg-primary transition"
        >
          CONTÁCTANOS
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 order-1 xl:order-2 relative">
        {/* Heading Only for Tablet & Mobile */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4 lg:hidden">
          Comprometidos Contigo
        </h2>
        
        <img
          src="/images/DoctorMeeting.webp"
          alt="Comprometidos Contigo"
          className="rounded-xl w-full sm:w-full lg:w-full object-cover mx-auto 
                     h-[250px] sm:h-[400px] lg:h-[400px] object-center 
                     sm:mx-2 "
        />
      </div>
    </div>
  );
};

export default Section1;
