/* eslint-disable @next/next/no-img-element */
import { FaCheck } from "react-icons/fa";

const items = [
  {
    title: "Ambulance Services",
  },
  {
    title: "Oxizen on Wheel",
  },
  {
    title: "Pharmacy on Clinic",
  },
  {
    title: "On duty Doctors",
  },
  {
    title: "24/7 Medical Emergency",
  },
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
            <h1 className="text-3xl lg:text-5xl text-mons font-semibold leading-relaxed">
              Prótesis de Miembro Superiores e Inferiores
            </h1>
            <p className="text-mons font-medium">
              Culpa cupidatat cupidatat mollit ut sit do non enim ex deserunt
              fugiat deserunt.
            </p>
          </div>
          <p className="leading-snug text-[#676767] py-5">
            Laboris exercitation qui ea cillum voluptate culpa elit. Est duis et
            ea veniam aute velit consectetur mollit do laboris occaecat commodo
            nostrud et. Dolor velit in nisi adipisicing proident. Elit aute eu
            sunt sunt ipsum nisi occaecat.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-mons font-medium">
            {items.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
                  <FaCheck className="text-device-900" />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
