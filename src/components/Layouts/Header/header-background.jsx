/* eslint-disable @next/next/no-img-element */

export default function HeaderBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <img
        src="/img/shapeBack3.png" // La imagen en formato PNG
        alt="Background"
        className="object-cover w-full h-full"
      />
    </div>
  )
}
