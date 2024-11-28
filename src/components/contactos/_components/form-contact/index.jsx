/* eslint-disable @next/next/no-img-element */
import Formulario from "./form";


export default function FormContact() {
  return (
    <section className="relative w-full py-16">
        <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
                <div className="lg:col-span-2">
                    <h5 className="text-3xl md:text-4xl pb-7 font-semibold text-mons">Envíanos un Mensaje</h5>
                    <Formulario />
                </div>
                <figure className="relative">
                    <img src="https://placehold.co/416x657/png" alt="Imagen Formulario de Contacto" className="rounded-2xl"/>
                </figure>
            </div>
        </div>
    </section>
  )
}
