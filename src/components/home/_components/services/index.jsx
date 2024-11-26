/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "Prótesis de Miembro Inferior",
    description: "Amet sit id reprehenderit cupidatat dolore culpa minim officia cillum duis reprehenderit deserunt sint.",
    href: "/",
    cta: "Ver más",
    background: <img src="https://placehold.co/600/png" className="absolute opacity-60" />,
    className: "#",
  },
  {
    Icon: InputIcon,
    name: "Prótesis de Miembro Superior",
    description: "Amet sit id reprehenderit cupidatat dolore culpa minim officia cillum duis reprehenderit deserunt sint.",
    href: "#",
    cta: "Ver más",
    background: <img src="https://placehold.co/600/png" alt="ms" className="absolute opacity-60" />,
    className: "",
  },
  {
    Icon: GlobeIcon,
    name: "Prótesis Estéticas",
    description: "Amet sit id reprehenderit cupidatat dolore culpa minim officia cillum duis reprehenderit deserunt sint.",
    href: "#",
    cta: "Ver más",
    background: <img src="https://placehold.co/600/png" className="absolute opacity-60" />,
    className: "¿",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-28">
      <div className="flex flex-col justify-center items-center gap-6 px-4 lg:px-[120px]">
        <h5 className="text-2xl font-medium text-blue-600">
          Nuestros Servicios
        </h5>
        <h1 className="text-2xl lg:text-5xl text-mons font-semibold leading-tight text-center pb-7">
          Ofrecemos Servicios según <br /> tus necesidades
        </h1>
        <BentoGrid className="grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
