"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es Next.js?",
    answer:
      "Next.js es un framework de React que permite funcionalidades como renderizado del lado del servidor y generación de sitios estáticos para aplicaciones web basadas en React.",
  },
  {
    question: "¿Cómo instalo Tailwind CSS en mi proyecto Next.js?",
    answer:
      "Puedes instalar Tailwind CSS en tu proyecto Next.js ejecutando 'npm install tailwindcss postcss autoprefixer', luego inicializando Tailwind con 'npx tailwindcss init -p', y finalmente configurando tus archivos de configuración.",
  },
  {
    question: "¿Qué es shadcn/ui?",
    answer:
      "shadcn/ui es una colección de componentes de interfaz de usuario reutilizables y accesibles, construidos con Radix UI y Tailwind CSS, diseñados para ser fácilmente personalizables e integrables en proyectos de React.",
  },
  {
    question: "¿Puedo usar TypeScript con Next.js?",
    answer:
      "Sí, Next.js tiene soporte integrado para TypeScript. Puedes comenzar a usar TypeScript en tu proyecto Next.js simplemente cambiando tus archivos .js a .ts o .tsx.",
  },
  {
    question: "¿Cómo puedo desplegar mi aplicación Next.js?",
    answer:
      "Hay varias formas de desplegar una aplicación Next.js. Una de las más sencillas es usar Vercel, la plataforma creada por los creadores de Next.js. También puedes desplegar en otras plataformas como Netlify, AWS, o tu propio servidor.",
  },
];

export default function FaqsSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (value) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section className="relative w-full pt-[114px] pb-[100px] px-4">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center gap-5 pb-8">
          <h5 className="text-2xl font-medium text-blue-600">FAQS</h5>
          <h1 className="text-3xl lg:text-5xl text-mons font-semibold leading-snug text-center pb-7">
            Preguntas Frecuentes
          </h1>
        </div>

        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <AccordionTrigger
                onClick={() => toggleItem(`item-${index}`)}
                className="px-6 py-4 text-left text-lg font-medium text-mons hover:text-blue-700 transition-colors duration-300"
              >
                {faq.question}
              </AccordionTrigger>
              <AnimatePresence>
                {openItems.includes(`item-${index}`) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AccordionContent className="px-6 pb-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
