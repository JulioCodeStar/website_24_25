/* eslint-disable @next/next/no-img-element */
import { FaLaptopMedical } from "react-icons/fa";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import NumberTicker from "@/components/ui/number-ticker";

const row = [
  {
    Icon: <FaLaptopMedical />,
    title: "Experiencia Comprobada",
    description: "Más de 500 pacientes satisfechos con nuestras prótesis personalizadas de alta calidad.",
  },
  {
    Icon: <FaLaptopMedical />,
    title: "Tecnología Avanzada ",
    description: "Utilizamos las últimas innovaciones en prótesis y sistemas de adaptación para tu máxima comodidad.",
  },
  {
    Icon: <FaLaptopMedical />,
    title: "Atención Personalizada",
    description: "Seguimiento completo y adaptación perfecta de tu prótesis por nuestro equipo especializado.",
  },
  {
    Icon: <FaLaptopMedical />,
    title: "Facilidad de Pago",
    description: "Sistema de pago conveniente: 50% al iniciar y 50% al entregar tu prótesis personalizada.",
  },
];

const counts = [
  {
    title: "10",
    subtitle: "Especialistas",
  },
  {
    title: "500",
    subtitle: "Pacientes Felices",
  },
  {
    title: "3",
    subtitle: "Sedes a nivel Nacional",
  },
  {
    title: "12",
    subtitle: "Aliados que confían",
  },
];

export default function Choose({ data }) {  
  return (
    <>
      <section className="relative pt-[114px] pb-[160px] bg-device-950 w-screen overflow-x-hidden px-3">
        <div className="hidden lg:block bg-[url('https://placehold.co/736x821/svg')] absolute top-0 right-0 w-[calc(50%-224px)] h-full bg-cover bg-no-repeat bg-center"></div>
        <div className="bg-[url('/img/shape12.png')] absolute left-0 bottom-0 w-[490px] h-[570px] bg-no-repeat opacity-70"></div>
        <div className="relative max-w-[1320px] px-[15px] mx-auto w-full">
          <div className="flex flex-wrap mt-[30px] lg:mr-[-calc(-0.5*30px)] lg:ml-[-calc(-0.5*30px)]">
            <div className="lg:w-2/3 md:w-full sm:w-full w-full">
              <div>
                <div className="relative mb-12">
                  <span className="pb-4 text-white text-2xl">
                    {data.etiqueta}
                  </span>
                  <h2 className="text-white text-3xl lg:text-5xl font-bold leading-snug py-4">
                    {data.titulo}
                  </h2>
                </div>
                <div className="flex flex-wrap mt-[30px] lg:mr-[-calc(-0.5*30px)] lg:ml-[-calc(-0.5*30px)]">
                  {row.map((rows) => (
                    <ul
                      key={rows.title}
                      className="lg:w-1/2 md:w-1/2 sm:w-full px-4 w-full"
                    >
                        <li className="relative block pl-[105px] pb-8 mb-8 border-b border-gray-400">
                          <div className="absolute left-0 top-0 text-[80px] text-white transition-all">
                            {rows.Icon}
                          </div>
                          <h3 className="text-2xl font-semibold text-white mb-3">
                            {rows.title}
                          </h3>
                          <p className="text-white text-base">
                            {rows.description}
                          </p>
                        </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative text-center">
        <div className="static max-w-[1320px] px-6 mx-auto">
          <div className="relative z-10 mt-[-105px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[30px]">
              {counts.map((count) => (
                <Card
                  key={count.title}
                  className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl py-4"
                >
                  <CardHeader>
                    <span className="text-5xl text-device-950 font-medium">
                     <NumberTicker value={count.title} />
                    </span>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-center">
                    <span className="text-blue-800 text-base font-medium bg-blue-100 px-14 py-3 rounded-xl">
                      {count.subtitle}
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
