/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  HelpCircle,
  FileImage,
  Gift,
  Zap,
  Users,
  Settings,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatInterface() {
  const [activeCard, setActiveCard] = useState(0);

  const menuItems = [
    {
      title: "Desarticulado de Cadera",
      icon: <MessageCircle className="w-5 h-5" />,
      description: "Tiempo de elaboración: 45 días",
      content: "Prótesis de pierna de diseñado para para la ",
      image: "https://placehold.co/400x400",
      action: "Explorar Crispy Bird",
    },
    {
      title: "Transfemoral",
      icon: <HelpCircle className="w-5 h-5" />,
      description: "Tiempo de elaboración: 35 días",
      content:
        "Comunícate de forma más personal con mensajes de voz. Graba y envía audio fácilmente, perfecto para cuando escribir no es conveniente.",
      image: "https://placehold.co/600x400",
      action: "Probar mensajes de voz",
    },
    {
      title: "Desarticulado de Rodilla",
      icon: <FileImage className="w-5 h-5" />,
      description: "Tiempo de elaboración: 35 días",
      content:
        "Comparte fácilmente archivos e imágenes con tus contactos. Soporta una amplia variedad de formatos y permite previsualizaciones rápidas.",
      image: "https://placehold.co/600x400",
      action: "Compartir archivos",
    },
    {
      title: "Transtibial",
      icon: <Gift className="w-5 h-5" />,
      description: "Tiempo de elaboración: 30 días",
      content:
        "Haz tus conversaciones más divertidas con GIFs y videos. Busca y envía contenido multimedia directamente desde la aplicación.",
      image: "https://placehold.co/600x400",
      action: "Explorar GIFs y videos",
    },
    {
      title: "SYME",
      icon: <Zap className="w-5 h-5" />,
      description: "Tiempo de elaboración: 30 días",
      content:
        "Crea y utiliza respuestas rápidas personalizadas para ahorrar tiempo en tus conversaciones más frecuentes.",
      image: "https://placehold.co/600x400",
      action: "Configurar respuestas rápidas",
    },
    {
      title: "Chopart",
      icon: <Users className="w-5 h-5" />,
      description: "Tiempo de elaboración: 25 días",
      content:
        "Crea y gestiona chats grupales con funciones avanzadas como roles, encuestas y eventos compartidos.",
      image: "https://placehold.co/600x400",
      action: "Crear chat grupal",
    },
  ];

  useEffect(() => {
    setActiveCard(0);
  }, []);

  return (
    <div className="relative bg-gray-50 py-16 lg:py-28">
      <div className="max-w-[1320px] mx-auto ">
        <h3 className="text-mons font-bold text-2xl px-8 pb-8">
          Realizamos diferentes tipos de prótesis de pierna de acuerdo al nivel de
          amputación
        </h3>
        <div className="w-full grid md:grid-cols-[1fr,2fr] gap-8">
          {/* Left Side - Menu Cards (Vertical Scroll) */}
          <div className="relative space-y-8 px-8">
            <div className="pr-4 space-y-4 custom-scrollbar overflow-y-auto max-h-[calc(100vh-6rem)]">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`p-4 hover:shadow-lg transition-shadow cursor-pointer ${
                      activeCard === index ? "border-blue-500 border-2" : ""
                    }`}
                    onClick={() => setActiveCard(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* shadow-[0_3px_10px_rgb(0,0,0,0.2)] */}
            <Card className="px-8 h-full py-8">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={menuItems[activeCard].title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <Card>
                        <CardContent className="p-0">
                          <img
                            src={menuItems[activeCard].image}
                            alt={menuItems[activeCard].title}
                            className="w-full h-[400px] object-cover rounded-t-lg"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={menuItems[activeCard].title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {menuItems[activeCard].title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {menuItems[activeCard].content}
                      </p>
                      <Button className="w-full md:w-auto">
                        {menuItems[activeCard].action}
                      </Button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
