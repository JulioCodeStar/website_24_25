/* eslint-disable @next/next/no-img-element */

export default function Choose() {
  return (
    <section className="relative ps-[114px] pt-[160px] bg-device-950">
      <div className="bg-[url('https://placehold.co/736x821/png')] absolute top-0 right-0 w-[calc(50%-224px)] h-[100%] bg-cover bg-no-repeat bg-center"></div>
      <div className="bg-[url('/img/shape12.png')] absolute left-0 bottom-0 w-[490px] h-[570px] bg-no-repeat opacity-70"></div>
      <div className="static max-w-full px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-2/3 md:w-full sm:w-full">
            <div className="container">
              <div className="relative mb-12 ">
                <span className="mb-4 text-white text-2xl">¿Por qué elegirnos?</span>
                <h2 className="text-white text-5xl">Elige lo mejor para tu <br />
                salud</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
