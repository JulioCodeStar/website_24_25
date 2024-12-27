import Image from "next/image";
import { FaCheck } from "react-icons/fa";

/* eslint-disable @next/next/no-img-element */
const items = [
  {
    title: "Innovación",
    description: "Buscamos constantemente nuevas soluciones y tecnologías para mejorar nuestros productos.",
  },
  {
    title: "Empatía",
    description: "Comprendemos las necesidades individuales de cada paciente.",
  },
  {
    title: "Excelencia",
    description: "Nos comprometemos con los más altos estándares de calidad en cada prótesis.",
  },
  {
    title: "Integridad",
    description: "Actuamos con transparencia y ética en cada proceso.",
  },
  {
    title: "Compromiso Social",
    description: "Trabajamos por una sociedad más inclusiva y accesible.",
  }
];

export default function ValoresSection({ data }) {
  return (
    <section className="relative bg-[#F4F3F8] shadow-black w-full py-16 lg:py-24 lg:px-[120px] ">
      <div className="hidden lg:block bg-[url('/img/shape10.png')] absolute top-0 right-0 w-[378px] h-[350px] bg-no-repeat"></div>
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 px-6 gap-8 lg:gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src={data?.img ? data.img : "https://placehold.co/600/png"}
            width={600}
            height={600}
            alt="Imagen de Valores"
            className="w-full max-w-[600px] h-auto"
          />
        </div>
        <div className="flex flex-col gap-5 md:ms-5 md:text-left">
          <h1 className="text-lg lg:text-2xl font-medium text-blue-600">
            {data.etiqueta}
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl lg:text-5xl text-mons font-semibold leading-loose">
              {data.titulo}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-mons pt-4">
            {data.List.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex justify-center items-center bg-white rounded-full h-8 w-8 shadow-md">
                    <FaCheck className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
                <p className="text-gray-600 ml-11 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
