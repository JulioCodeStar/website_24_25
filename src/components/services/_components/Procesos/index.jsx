/* eslint-disable @next/next/no-img-element */
const sections = [
  {
    count: "01",
    title: "Get Appoiment",
    description:
      "Labore irure enim aliqua sit mollit enim amet Lorem Lorem quis duis cillum.",
    imageUrl: "https://placehold.co/600x400",
    imagePosition: "left",
  },
  {
    count: "02",
    title: "Start Check-Up",
    description:
      "Consequat mollit excepteur adipisicing sit cupidatat est laborum sit.",
    imageUrl: "https://placehold.co/600x400",
    imagePosition: "right",
  },
  {
    count: "03",
    title: "Enjoy Healthy Life",
    description:
      "Labore nulla eu sit cillum do.",
    imageUrl: "https://placehold.co/600x400",
    imagePosition: "left",
  },

];

export default function ProcesosSection() {
  return (
    <section className="relative py-16 lg:py-28 bg-[#F4F3F8]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-6">
        <h5 className="text-2xl font-medium text-blue-600">Procesos</h5>
        <h2 className="text-3xl lg:text-5xl text-mons font-semibold leading-tight text-center pb-7">
          Anim labore dolore adipisicing enim.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <span className="text-[70px] text-black/10 font-extrabold">{section.count}</span>
              <div className="flex flex-col gap-3 items-center text-center">
                <div className="bg-white rounded-3xl p-3">
                  <img src={section.imageUrl} alt="" className="rounded-3xl" />
                </div>
                <h4 className="text-mons font-semibold text-xl">{section.title}</h4>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="relative py-16 lg:py-28 bg-[#F4F3F8]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-6 pb-6">
          <h5 className="text-2xl font-medium text-blue-600">
            Procesos
          </h5>
          <h2 className="text-3xl lg:text-5xl text-mons font-semibold leading-tight text-center pb-7">
            Anim labore dolore adipisicing enim.
          </h2>
        </div>
        <div className="space-y-24">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`flex flex-col gap-8 ${
                section.imagePosition === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } items-center`}
            >
              <div className="flex-1">
                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                  <img
                    src={section.imageUrl}
                    alt={section.title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */
}
