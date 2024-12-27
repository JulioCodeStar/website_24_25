/* eslint-disable @next/next/no-img-element */

import { FaCheck } from "react-icons/fa";

const items = [
  {
    title: "Personalización",
  },
  {
    title: "Funcionalidad",
  },
  {
    title: "Comodidad",
  },
];

export default function InfoSection() {
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
            Mollit dolore
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl lg:text-5xl text-mons font-semibold leading-relaxed">
              ¿Que es un prótesis de pierna?
            </h2>
          </div>
          <p className="leading-snug text-[#676767] py-5">
            Una prótesis de pierna es un dispositivo médico personalizado diseñado para reemplazar una extremidad inferior perdida. Utilizamos tecnología de vanguardia para crear prótesis que no solo restauran la función, sino que también mejoran significativamente la calidad de vida de nuestros pacientes.
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
  )
}
