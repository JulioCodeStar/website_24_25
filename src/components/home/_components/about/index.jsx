/* eslint-disable @next/next/no-img-element */
import { FaCheck } from "react-icons/fa";

const items = [
  {
    title: "Personalización Total",
  },
  {
    title: "Materiales de Alta Calidad",
  },
  {
    title: "Equipo Profesional Especializado",
  },
  {
    title: "Tecnología Avanzada",
  },
  {
    title: "Servicio Integral de Rehabilitación",
  },
  {
    title: "Atención Rápida y Eficiente",
  }
];

export default function About() {
  return (
    <section className="relative bg-[#F4F3F8] shadow-black w-full py-16 lg:py-24 lg:px-[120px] ">
      <div className="hidden lg:block bg-[url('/img/shape10.png')] absolute top-0 right-0 w-[378px] h-[350px] bg-no-repeat"></div>
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 px-6 gap-8 lg:gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="https://placehold.co/600x600"
            alt=""
            className="w-full max-w-[600px] h-auto"
          />
        </div>
        <div className="flex flex-col gap-5 md:ms-5 md:text-left">
          <h5 className="text-lg lg:text-2xl font-medium text-blue-600">
            Sobre Nosotros
          </h5>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl lg:text-5xl text-mons font-semibold leading-relaxed">
              Somos el Primer Centro Ortoprotésico en Lima
            </h2>
            <h3 className="text-mons font-medium">
              Ofrecemos servicios integrales de apoyo emocional y rehabilitación para optimizar el uso de tu prótesis.
            </h3>
          </div>
          <p className="leading-snug text-[#676767] py-5">
            Nos motiva ofrecer a las personas amputadas confianza, tranquilidad y una nueva oportunidad para avanzar con seguridad, a través de prótesis personalizadas que les devuelvan su independencia.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-mons font-medium">
            {items.map((item) => (
              <ul key={item.title} className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
                  <FaCheck className="" />
                </div>
                <p>{item.title}</p>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
