/* eslint-disable @next/next/no-img-element */
import Formulario from "./form";


export default function FormContact() {
  return (
    <section className="relative w-full py-16">
        <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-4">
                <div className="lg:col-span-2 p-6">
                    <h5 className="text-3xl md:text-4xl pb-7 font-semibold text-mons">Envíanos un Mensaje</h5>
                    <Formulario />
                </div>
                <figure className="relative lg:col-span-2">
                    <img src="https://placehold.co/600/png" alt="Imagen Formulario de Contacto" className="rounded-2xl w-full"/>
                </figure>
            </div>
        </div>
    </section>
  )
}
