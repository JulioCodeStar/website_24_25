/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import CardInfo from "./card-info";
import Image from "next/image";
import Link from "next/link";

export default function HeroSections({ data }) {

  return (
    <>
      <section className="bg-[url('/img/img_hero.png')] bg-no-repeat bg-cover bg-bottom relative w-full py-16 flex justify-center flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 max-w-[1320px] w-full">
          <div className="flex flex-col gap-2 lg:w-1/2 p-3 lg:text-left">
            <h1 className="text-lg lg:text-xl text-blue-700 mb-4">
              {data.etiqueta}
            </h1>
            <h2 className="text-5xl lg:text-6xl font-bold">
              {data.Titulo_1}{" "}
              <span className="underline leading-tight underline-offset-8 text-device-800 font-normal">
                {data.Titulo_2}
              </span>
            </h2>
            <p className="text text-gray-700 text-base mt-6 leading-relaxed">
              {data.description}
            </p>
            {
              data.Boton.map((boton) => (
                <Button key={boton.id} className="w-2/5 mt-9 py-6 bg-blue-800 hover:bg-blue-600 rounded-full lg:mx-0" asChild>
                  <Link href={boton.url}>{boton.title}</Link>
                </Button>
              ))
            }
            
          </div>
          <div className="flex px-2 justify-center lg:w-1/2 w-full">
            {data.imagen ? (
              <Image
                src={data.imagen}
                alt="Logo Hero"
                className="max-w-full h-auto"
              />
            ) : (
              <img
                src="https://placehold.co/600x500"
                alt="Logo Hero"
                className="max-w-full h-auto"
              />
            )}
          </div>
        </div>
        <CardInfo />
      </section>
    </>
  );
}
