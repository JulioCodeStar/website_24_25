/* eslint-disable @next/next/no-img-element */
import { FaCheck } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative bg-[#F4F3F8] shadow-black">
      <div className="hidden lg:bg-[url('/img/shape10.png')] absolute top-0 right-0 w-[378px] h-[350px] bg-no-repeat"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 py-16 gap-4 md:gap-8 lg:p-[120px]">
        <img src="https://placehold.co/600x600" alt="" />
        <div className="flex flex-col gap-5 md:ms-5">
          <h5 className=" lg:text-2xl font-medium text-blue-600">Sobre Nosotros</h5>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl lg:text-5xl text-mons font-semibold leading-tight">
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
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
                <FaCheck className="text-device-900" />
              </div>
              <p>Incididunt cillum esse ipsum ipsum.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
                <FaCheck className="text-device-900" />
              </div>
              <p>Incididunt cillum esse ipsum ipsum.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
                <FaCheck className="text-device-900" />
              </div>
              <p>Incididunt cillum esse ipsum ipsum.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
                <FaCheck className="text-device-900" />
              </div>
              <p>Incididunt cillum esse ipsum ipsum.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
                <FaCheck className="text-device-900" />
              </div>
              <p>Incididunt cillum esse ipsum ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
