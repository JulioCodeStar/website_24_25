/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const items = [
  {
    img: "https://placehold.co/400x350/png",
    name: "Paula Patiño",
    job: "Jefa Biomecánica",
  },
  {
    img: "https://placehold.co/400x350/png",
    name: "Noe Colla",
    job: "Desarrollo Tecnológico",
  },
  {
    img: "https://placehold.co/400x350/png",
    name: "Ado Martin",
    job: "Anaplastología",
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full bg-transparent pt-[114px] pb-[100px] px-4">
      <div className="max-w-[1320px] w-full mx-auto flex flex-col items-center gap-5">
        <h5 className="text-2xl font-medium text-blue-600">Nuestro equipo</h5>
        <h1 className="text-3xl lg:text-5xl text-mons font-semibold leading-snug text-center pb-7">
          Conozca a nuestro equipo
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.name} className="w-full bg-white rounded-2xl shadow-xl">
              <div className="p-5">
                <img
                  className="rounded-2xl"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 text-center p-5">
                <h4 className="text-xl text-mons font-semibold">
                    {item.name}
                </h4>
                <p className="mb-3 font-normal text-gray-700 ">
                    {item.job}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
