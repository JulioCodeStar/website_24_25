/* eslint-disable @next/next/no-img-element */

const steps = [
  {
    number: "01",
    title: "Schedule Consultation",
    description: "Book your initial consultation with our health experts.",
    image: "https://placehold.co/400/png",
  },
  {
    number: "02",
    title: "Health Assessment",
    description: "Undergo a comprehensive health assessment and screening.",
    image: "https://placehold.co/400/png",
  },
  {
    number: "03",
    title: "Personalized Plan",
    description:
      "Receive a tailored health plan based on your assessment results.",
    image: "https://placehold.co/400/png",
  },
];

export default function ProcesosSection() {
  return (
    <section className="relative py-16 lg:py-28">
      <div className='hidden lg:block bg-[url("/img/shape19.png")] absolute top-0 right-0 w-[460px] h-[568px] bg-no-repeat'></div>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-16">
          <h5 className="text-2xl font-medium text-blue-600">Procesos</h5>
          <h2 className="text-3xl lg:text-5xl text-mons font-semibold leading-tight text-center pb-7">
            Nulla laboris et qui ullamco
          </h2>
        </div>

        {/* <div className="relative">
          <div className="absolute inset-0 hidden lg:block">
            <img
              src="/img/arrowBackground.png"
              alt="Process flow arrow"
              className="w-[1479px] h-[122px] object-cover"
            />
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <div key={step.number} className={`relative`}>
                {/* Card Content */}
                <div className="bg-white rounded-3xl shadow-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col text-center">
                  <div className="aspect-square relative rounded-2xl overflow-hidden mb-6">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg z-20">
                  {step.number}
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
