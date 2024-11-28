/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import CardInfo from "./card-info";

export default function HeroSections() {
  return (
    <>
      <section className="bg-transparent relative w-full py-20 flex justify-center flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 max-w-[1320px] w-full">
          <div className="flex flex-col gap-2 lg:w-1/2 p-3 lg:text-left">
            <h1 className="text-lg lg:text-xl text-blue-700 mb-4">
              Ortesis y Prótesis a Medida en Lima, Perú
            </h1>
            <h2 className="text-5xl lg:text-6xl font-bold">
              Recuperemos juntos{" "}
              <span className="underline leading-tight underline-offset-8 text-device-800 font-normal">
              Tu confianza con una Prótesis
              </span>
            </h2>
            <p className="text text-gray-700 text-base mt-6 leading-relaxed">
            La integración de diferentes especialidades en la elaboración de prótesis es fundamental para que nuestros pacientes puedan adaptarse mejor a su prótesis.
            </p>
            <Button className="w-2/5 mt-9 py-6 bg-blue-800 hover:bg-blue-600 rounded-full lg:mx-0">
              Contáctenos
            </Button>
          </div>
          <div className="flex px-2 justify-center lg:w-1/2 w-full">
            <img
              src="https://placehold.co/600x500"
              alt="Logo Hero"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <CardInfo />
      </section>
    </>
  );
}
