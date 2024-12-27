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
    question: "¿Cuál es el proceso de elaboración? ",
    answer:
      "Seguimos un proceso meticuloso de 6 pasos que incluye: evaluación inicial, toma de medidas y molde, pruebas de alineación, ajustes finales, entrega y seguimiento post entrega.",
  },
  {
    question: "¿La prótesis incluye rehabilitación?",
    answer:
      "Sí, nuestro proceso incluye rehabilitación tanto pre como post protésica para garantizar los mejores resultados y adaptación.",
  },
  {
    question: "¿La prótesis requiere mantenimiento?",
    answer:
      "Sí, recomendamos revisiones periódicas para asegurar el óptimo funcionamiento y durabilidad de su prótesis. El programa de mantenimiento se establece según su tipo de prótesis y nivel de actividad.",
  },
  {
    question: "¿Cómo sé qué tipo de prótesis es la adecuada para mí? ",
    answer:
      "Nuestro equipo de especialistas realiza una evaluación completa considerando su nivel de amputación, estilo de vida, actividades diarias y objetivos personales para recomendar la mejor opción.",
  },
  {
    question: "¿Puedo hacer deporte con mi prótesis?",
    answer:
      "Sí, ofrecemos prótesis especializadas para actividades específicas. Durante su evaluación, discutiremos sus objetivos deportivos para determinar la mejor solución.",
  },
  {
    question: "¿Cuánto tiempo toma adaptarse a una nueva prótesis?",
    answer:
      "El tiempo de adaptación varía según cada persona, pero generalmente toma entre 4-8 semanas. Nuestro programa de rehabilitación está diseñado para optimizar este proceso.",
  },
  {
    question: "¿Con qué frecuencia necesito reemplazar mi prótesis?",
    answer:
      "La durabilidad depende de varios factores como el tipo de prótesis, nivel de actividad y cuidado. Generalmente, se recomienda una evaluación cada 3-5 años para considerar un reemplazo.",
  },
];

export default function FaqServicesSection() {
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
