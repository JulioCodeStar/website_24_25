/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function About({ data }) {

  return (
    <section className="relative bg-[#F4F3F8] shadow-black w-full py-16 lg:py-24 lg:px-[120px] ">
      <div className="hidden lg:block bg-[url('/img/shape10.png')] absolute top-0 right-0 w-[378px] h-[350px] bg-no-repeat"></div>
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 px-6 gap-8 lg:gap-12 items-center">
        <div className="flex justify-center">
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
        <div className="flex flex-col gap-5 md:ms-5 md:text-left">
          <h5 className="text-lg lg:text-2xl font-medium text-blue-600">
            {data.etiqueta}
          </h5>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl lg:text-5xl text-mons font-semibold leading-relaxed">
              {data.titulo}
            </h2>
            <h3 className="text-mons font-medium">{data.subtitle}</h3>
          </div>
          <p className="leading-snug text-[#676767] py-5">{data.description}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-mons font-medium">
            {data.List.map((item) => (
              <ul key={item.id} className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
                  <FaCheck className="" />
                </div>
                <p>{item.title}</p>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
