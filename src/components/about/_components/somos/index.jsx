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
];

export default function SomosSection() {
  return (
    <section className="relative py-16 lg:py-28 ">
      <div className="hidden lg:block bg-[url('/img/shape35.png')] absolute top-0 right-0 w-[699px] h-[341px] bg-no-repeat"></div>
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-8 lg:gap-12 items-center">
        <div className="relative">
          <div className="hidden lg:block bg-[url('/img/shape26.png')] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[965px] h-[820px] bg-no-repeat"></div>
          <figure className="relative ld:ml-7 items-center">
            <img src="https://placehold.co/600x562/png" alt="Imagen Personas" />
          </figure>
        </div>
        <div className="flex flex-col gap-5 md:ms-5 md:text-left bg-white">
          <h1 className="text-lg lg:text-2xl font-medium text-blue-600">
            KYP Bioingeniería
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl lg:text-5xl text-mons font-semibold leading-relaxed">
              Innovando en Prótesis en Perú desde 2018
            </h2>
          </div>
          <p className="leading-snug text-[#676767] py-5">
            KYP Bioingeniería nació con la visión de mejorar la calidad de vida
            de las personas con discapacidad física, enfocándose en brindar
            soluciones innovadoras y personalizadas. Desde sus inicios, la
            empresa ha trabajado para posicionarse como un referente en el
            sector de prótesis en Perú. Con un enfoque en la excelencia y la
            innovación tecnológica, KYP Bioingeniería ha ampliado su alcance,
            ofreciendo prótesis de pierna, brazo y estéticas a pacientes de todo
            el país. Su trayectoria se caracteriza por un compromiso constante
            con la mejora continua, logrando combinar la tecnología avanzada con
            un trato humano y empático que distingue a la empresa.
          </p>

          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.title} className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-device-50 rounded-full flex items-center justify-center">
                  <div className="text-device-900">
                    <FaCheck />
                  </div>
                </div>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
