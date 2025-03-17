import React from "react";

const Section1 = ({ onClick }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-nowrap items-center lg:mx-24 justify-center lg:space-x-10 p-6 lg:h-[750px] md:h-[848px] h-[835px]">
      {/* Text Section */}
      <div
        className="w-full lg:w-1/2 order-2 lg:order-1 
                   flex flex-col items-center text-center 
                   lg:items-start lg:text-left"
      >
        {/* Heading Only for Desktop */}
 <h2 className="hidden font-poppins lg:block lg:w-[512px] lg:h-[106px] text-[48px] lg:text-5xl font-bold text-[#44494A] lg:mb-8">
  <span className="block">Comprometidos</span>
  <span className="block lg:mt-2">Contigo</span>
</h2>





<p className="text-gray-600 md:text-[18px] lg:text-[20px] text-[16px] font-lato font-normal mb-2 
              w-[360px] md:w-[585px] lg:w-[525px] max-w-full text-left mt-2">
  Trabajamos cada día para ofrecerte el apoyo necesario en tu camino hacia una vida más
  saludable. Nos importa tu salud, y por eso estamos aquí para asegurarnos de que siempre
  tengas acceso a lo que necesitas para sentirte bien y alcanzar tu mejor versión.
</p>



    <div className="  md:w-[586px]  
                      lg:w-[511px]  w-[360px] flex justify-center md:justify-start ">
        <button
          onClick={() => onClick()}
          className="bg-primary   text-[20px] font-[600] text-white py-4 px-6 rounded-xl hover:bg-primary transition w-[226px] h-[80px]"
        >
          CONTÁCTANOS
        </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 order-1 xl:order-2 relative">
        {/* Heading Only for Tablet & Mobile */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8 lg:hidden ">
          Comprometidos Contigo
        </h2>

        <img
          src="/images/DoctorMeeting.webp"
          alt="Comprometidos Contigo"
          className="rounded-xl object-cover mx-auto 
                     md:w-[585px] md:h-[465px] object-center 
                     lg:w-[525px] lg:h-[465px] w-[360px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default Section1;
