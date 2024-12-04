/* eslint-disable @next/next/no-img-element */


export default function HeaderSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://placehold.co/1920x1080/png"
          alt="Fondo del Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
    </section>
  )
}
