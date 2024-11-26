/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import CardInfo from "./card-info";

export default function HeroSections() {
  return (
    <>
      <section className="shadow-md bg-transparent relative w-full grid grid-cols-1 lg:grid-cols-2 gap-5 py-20 px-2 lg:px-[120px]">
        <div className="flex flex-col justify-center gap-2 p-3">
          <div className="subheading text-lg mb-4">
            Transformamos Vidas con Tecnología Innovadora.
          </div>
          <h2 className="text-6xl font-bold leading-tight">
            Recupera{" "}
            <span className="underline underline-offset-8 text-device-800 font-normal">
              Tu Confianza.
            </span>
          </h2>
          <p className="text text-gray-700 text-base mt-6 leading-relaxed">
            Pariatur ad occaecat ullamco cillum aliquip in consequat qui sint
            pariatur esse sunt reprehenderit in. Duis laborum fugiat in officia
            esse ut.
          </p>
          <Button className="w-2/5 mt-9 py-7 bg-blue-800 hover:bg-blue-600 rounded-full">
            Contáctenos
          </Button>
        </div>
        <div className="flex justify-center">
          <img src="https://placehold.co/600x500" alt="Logo Hero" />
        </div>
        <CardInfo />
      </section>
    </>
  );
}
