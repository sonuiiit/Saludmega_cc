import React from 'react'

export const Section2 = () => {
  return (
    <div className='bg-[#D3EAE3] overflow-hidden'>
      <div className=" lg:mt-[60px] lg:mb-[60px] md:mt-[76px] md:mb-[76px] mt-[30px] mb-[30px] mx-[11px] md:px-4   ">
        <div className="md:mx-12 rounded-2xl overflow-hidden">
          {/* Heading */}
          <div className="bg-white p-4  ">
            <h2 className="md:text-[40px] text-[30px] font-bold text-center text-primary">
              Facilitamos Tu Bienestar
            </h2>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-10 bg-primary">
            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row xl:flex-col lg:flex-nowrap items-center gap-4">
              <div className="w-full sm:w-1/2 xl:w-full h-64 overflow-hidden rounded-xl">
                <img
                  src="/images/Nurse.webp"
                  alt="Atención Personalizada"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full sm:w-1/2 xl:w-full">
                <h3 className="text-2xl md:text-4xl mb-2 font-bold text-white text-left font-poppins">
                  Atención Personalizada
                </h3>
                <p className="text-white text-md font-light text-left font-lato">
                  Nuestro equipo de profesionales está comprometido en brindarte un trato humano y
                  adaptado a tus necesidades, asegurando una experiencia de cuidado excepcional.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col sm:flex-row-reverse xl:flex-col lg:flex-nowrap items-center gap-4 sm:justify-center">
              <div className="w-full sm:w-1/2 xl:w-full h-64 overflow-hidden rounded-xl">
                <img
                  src="/images/DoctorPatient.webp"
                  alt="Respaldo y Seguridad"
                  className="w-full h-full object-cover rounded-xl object-[40%_left]"
                />
              </div>
              <div className="w-full sm:w-1/2 xl:w-full">
                <h3 className="text-2xl md:text-4xl mb-2 font-bold text-white text-left font-poppins">
                  Respaldo Y Seguridad
                </h3>
                <p className="text-white text-md font-light text-left font-lato">
                  Cuentas con el respaldo de una estructura consolidada en el ámbito de la salud, con
                  procesos avalados por años de experiencia y un enfoque centrado en el bienestar de
                  cada persona.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col sm:flex-row xl:flex-col lg:flex-nowrap items-center gap-4">
              <div className="w-full sm:w-1/2 xl:w-full h-64 overflow-hidden rounded-xl">
                <img
                  src="/images/DoctorPC.webp"
                  alt="Calidad Garantizada"
                  className="w-full h-full object-cover rounded-xl object-[10%_left]"
                />
              </div>
              <div className="w-full sm:w-1/2 xl:w-full">
                <h3 className="text-2xl md:text-4xl mb-2 font-bold text-white text-left font-poppins">
                  Calidad Garantizada
                </h3>
                <p className="text-white text-md font-light text-left font-lato">
                  Ofrecemos productos con altos estándares de calidad, desarrollados con respaldo
                  científico, y te brindamos facilidad de acceso a los medicamentos que necesitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
