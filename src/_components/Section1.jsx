import React from 'react';

const Section1 = ({ onClick }) => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-4  p-6 md:p-12 xl:p-24 ">
      
      {/* Text Section */}
      <div className="md:w-1/2 w-2/3  xl:w-1/3 text-center xl:text-left order-2 xl:order-1 ">
        {/* Heading Only for Desktop */}
        <h2 className="hidden xl:block text-4xl xl:text-5xl font-bold mb-4 text-gray-600">
          Comprometidos Contigo
        </h2>
        
        <p className="text-gray-600 mb-6 text-sm md:text-base xl:text-lg text-left">
          Trabajamos cada día para ofrecerte el apoyo necesario en tu camino hacia una vida más
          saludable. Nos importa tu salud, y por eso estamos aquí para asegurarnos de que siempre
          tengas acceso a lo que necesitas para sentirte bien y alcanzar tu mejor versión.
        </p>
        
        <button onClick={() => onClick()} className="bg-[#008369] text-white py-4 px-6 rounded-xl hover:bg-green-700 transition">
          CONTÁCTANOS
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full xl:w-1/3 order-1 xl:order-2 relative ">
        {/* Heading Only for Tablet & Mobile */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4 xl:hidden">
          Comprometidos Contigo
        </h2>
        
        <img
          src="/images/DoctorMeeting.jpeg"
          alt="Comprometidos Contigo"
          className="rounded-xl md:w-1/2 w-2/3 xl:w-full object-cover mx-auto h-[250px] md:h-[300px] xl:h-[400px] object-center"
        />
      </div>
    </div>
  );
};

export default Section1;
