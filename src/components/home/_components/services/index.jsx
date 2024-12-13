/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "Prótesis de Miembro Inferior",
    description:
      "Fabricamos prótesis personalizadas de alta tecnología para extremidades inferiores, garantizando máxima comodidad y movilidad en tu día a día. Cada prótesis se adapta perfectamente a tu anatomía y estilo de vida.",
    href: "#",
    cta: "Ver más",
    background: (
      <img
        src="https://placehold.co/600x600/png"
        className="absolute opacity-60"
      />
    ),
    className: "",
  },
  {
    Icon: InputIcon,
    name: "Prótesis de Miembro Superior",
    description:
      "Desarrollamos prótesis de brazo y mano con tecnología avanzada, diseñadas para recuperar la funcionalidad y naturalidad de tus movimientos. Cada prótesis está personalizada para tu máximo confort.",
    href: "#",
    cta: "Ver más",
    background: (
      <img
        src="https://placehold.co/600x600/png"
        alt="ms"
        className="absolute opacity-60"
      />
    ),
    className: "",
  },
  {
    Icon: GlobeIcon,
    name: "Prótesis Estéticas",
    description:
      "Creamos prótesis estéticas de aspecto totalmente natural, reproduciendo fielmente el color, textura y detalles de tu piel. Una solución personalizada que combina belleza y comodidad.",
    href: "#",
    cta: "Ver más",
    background: (
      <img
        src="https://placehold.co/600x600/png"
        className="absolute opacity-60"
      />
    ),
    className: "",
  },
];

export default function Services({ data }) {
  const background = (
    
    <img
      src="https://placehold.co/600x600/png"
      className="absolute opacity-60"
    />
  );

  return (
    <section className="bg-white py-28">
      <div className="max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-6 px-6">
        <h5 className="text-2xl font-medium text-blue-600">{data.etiqueta}</h5>
        <h2 className="text-3xl lg:text-5xl text-mons font-semibold leading-tight text-center pb-7">
          {data.titulo}
        </h2>
        <BentoGrid className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.Card_Info.map((feature) => (
            <BentoCard
              key={feature.id}
              description={feature.descripcion}
              name={feature.titulo}
              href={feature.url}
              Icon={GlobeIcon}
              cta={"Ver más"}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
