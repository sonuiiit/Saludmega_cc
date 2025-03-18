import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import axios from 'axios';
export const Section4 = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Send Message Function
  // Send Message Function
// Send Message Function
const sendMessage = async (contactMethod) => {
  const apiUrl = "http://164.90.140.245:8000/api/messages";
  const jwtSecret = "abcdefghijklmnopqrstuvwxyz1234567890";

  // Prepare data with timeStamp and timeZone
  const dataToSend = {
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    timeStamp: new Date().toISOString(),
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  try {
    if (contactMethod === 'email') {
      const response = await axios.post(apiUrl, dataToSend, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtSecret}`,
        }
      });

      if (response.status === 200) {
        alert("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.");
        console.log("Message sent successfully!");
      } else {
        console.error("Failed to send message");
        alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      }
    } else if (contactMethod === "whatsapp") {
      // Open WhatsApp with the default number
      const defaultNumber = "1234567890"; // Replace with the default WhatsApp number
      window.open(`https://wa.me/${defaultNumber}`, "_blank");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un problema al enviar el mensaje. Revisa tu conexión e inténtalo nuevamente.");
  }
};




  return (
    <section className="bg-[#EAEDF0] md:bg-white lg:bg-[#EAEDF0] flex justify-center pt-12 pb-0 lg:pb-12 px-0">
    <div className="flex flex-col-reverse lg:flex-row items-center   w-full lg:mx-24 ">
      {/* Left Side - Image */}
      <div className=" lg:w-1/2  lg:h-[710px] mt-0 md:w-full md:h-[337px] w-full h-[195px]  ">
        <img
          src="/images/WritingPhone.webp"
          alt="Contact Us"
          className="w-full h-full object-cover lg:rounded-l-lg object-[20%_center] max-w-none"
        />
      </div>
  
      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 space-y-8 ">
        <div className="px-4  py-2 space-y-4 md:space-y-6 flex flex-col justify-center items-center lg:items-start ">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#44494A] text-center md:text-left font-poppins">
            Contáctanos
          </h2>
          <p className="text-gray-600 text-[14px] md:text-[18px] text-left font-medium font-lato 
              lg:w-[480px] md:w-[590px] w-full max-w-full flex-wrap leading-tight">
  ¿Tienes preguntas o necesitas más información? Escríbenos y nuestro equipo te responderá lo antes posible.
</p>

        </div>
        <div className="bg-white rounded-r-lg shadow-md">
          <form className="mt-4 md:mt-6 space-y-4 px-4 md:px-8 py-6">
            <div>
              <label className="block text-gray-700 font-medium font-noto">
                Nombre completo<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Ingresa tu nombre aquí"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-primary"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium font-noto">
                Correo electrónico<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Ingresa tu correo aquí"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-primary"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium font-noto">
                Número de teléfono<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ingresa tu número de teléfono aquí"
                required
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-primary"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium font-noto">
                Mensaje o consulta<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí"
                required
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
  
            {/* Buttons */}
            <div className="flex gap-4">
              <button 
                type="button"
                onClick={() => sendMessage("email")}
                className="flex items-center justify-center font-lato  bg-primary text-white font-medium py-3 rounded-xl hover:bg-[#006a55] transition w-[192px] h-[55px]"
              >
                <Mail className="mr-2" /> CORREO
              </button>
              <button 
                type="button"
                onClick={() => sendMessage("whatsapp")}
                className="flex items-center justify-center font-lato  bg-primary text-white font-medium py-3 rounded-xl hover:bg-[#006a55] transition w-[192px] h-[55px]"
              >
                <Mail className="mr-2" /> WHATSAPP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Section4;
