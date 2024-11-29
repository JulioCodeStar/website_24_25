/* eslint-disable @next/next/no-img-element */
"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const items = [
  {
    title: "Calidad",
    description:
      "Te brindamos la mejor calidad en cada uno de nuestros productos y servicios",
  },
  {
    title: "Confianza",
    description:
      "Nos encargamos de darte la seguridad y confianza en cada producto o servicio.",
  },
  {
    title: "Garantía",
    description:
      "La satisfacción de que lo adquirido es un producto mezcla de calidad, confianza, dedicación y de alta garantía.",
  },
];

export default function HabilitySection() {
  const [process, setProcess] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProcess(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-16 lg:py-28 bg-[#F4F3F8]">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 px-8 gap-8 lg:gap-12 items-center">
        {/* Columna Izquierda - Habilidades */}
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg lg:text-2xl font-medium tracking-wider text-blue-700">
              Nuestra Área de Habilidades
            </h3>
            <h2 className="mt-2  text-3xl font-bold text-mons lg:text-5xl">
              Nos Caracterizamos
              <br />
              Por Tener
            </h2>
          </div>

          <div className="space-y-6">
            {items.map((items) => (
              <div key={items.title} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-mons uppercase">
                    {items.title}
                  </h4>
                  <span className="text-sm font-medium text-gray-500">
                    100%
                  </span>
                </div>
                <Progress value={process} className="h-2 bg-gray-100" />
                <p className="text-sm text-gray-600">
                    {items.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha - Imagen */}
        <div className="relative">
          <div className="aspect-square rounded-full bg-teal-500 absolute inset-0 z-0" />
          <div className="relative z-10">
            <img
              src="https://placehold.co/600/png"
              alt="Profesional ejecutivo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
