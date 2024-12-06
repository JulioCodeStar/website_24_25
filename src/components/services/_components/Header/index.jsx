/* eslint-disable @next/next/no-img-element */


export default function HeaderSection() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen overflow-hidden">
      <img
        src="https://placehold.co/1920x1080/png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
    </section>
  )
}
