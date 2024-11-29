import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin } from 'lucide-react'

const elementosTab = [
  {
    id: "sede-lima",
    titulo: "Sede de Lima",
    descripcion: "Nuestra sede principal en la capital del Perú.",
    direccion: "Av. Javier Prado Este 1066, San Isidro, Lima",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7502837377515!2d-77.07165472493972!3d-11.9917732882407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf294ecde16d%3A0x85afc65f98495700!2sKYP%20Bioingenier%C3%ADa%20-%20Pr%C3%B3tesis%20de%20pierna%2C%20brazo%20y%20est%C3%A9tica!5e0!3m2!1ses!2spe!4v1732813342395!5m2!1ses!2spe"
  },
  {
    id: "sede-arequipa",
    titulo: "Sede de Arequipa",
    descripcion: "Nuestra sede en la Ciudad Blanca.",
    direccion: "Av. Ejercito 710, Yanahuara, Arequipa",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3839335743176!2d-71.55299368521286!3d-16.39957388866979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a59aaaaaaa9%3A0x7ea3f592b3a9b0fa!2sAv.%20Ej%C3%A9rcito%20710%2C%20Arequipa%2004013%2C%20Per%C3%BA!5e0!3m2!1ses!2s!4v1625234567890!5m2!1ses!2s"
  },
  {
    id: "sede-chiclayo",
    titulo: "Sede de Chiclayo",
    descripcion: "Nuestra sede en la Ciudad de la Amistad.",
    direccion: "Av. Balta 1400, Chiclayo, Lambayeque",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7034134921087!2d-79.84149768525357!3d-6.770279195115775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef2356732d6f%3A0xf4e3748a4f4b6c17!2sAv%20Luis%20Gonzales%201309%2C%20Chiclayo%2014001%2C%20Per%C3%BA!5e0!3m2!1ses!2s!4v1625234567891!5m2!1ses!2s"
  },
]

export default function MapsSection() {
  return (
    <section className="relative w-full py-16 bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-mons text-center mb-8">Nuestras Sedes</h2>
        <Tabs defaultValue="sede-lima" className="flex flex-col lg:flex-row">
          <TabsList className="flex-col h-auto justify-start lg:w-1/4 mb-6 lg:mb-0 lg:mr-6 bg-white rounded-lg shadow-md">
            {elementosTab.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="w-full justify-start px-4 py-3 text-left data-[state=active]:bg-blue-700 data-[state=active]:text-primary-foreground rounded-md transition-all duration-200 ease-in-out"
              >
                <MapPin className="w-5 h-5 mr-2 inline-block" />
                {tab.titulo}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-grow lg:w-3/4">
            {elementosTab.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl">{tab.titulo}</CardTitle>
                    <CardDescription>{tab.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-w-16 h-80">
                      <iframe
                        src={tab.mapa}
                        className="w-full h-full"
                        style={{ border: 0 }}
                        height={1000}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="p-4 bg-gray-100">
                      <p className="text-sm text-gray-600">
                        <MapPin className="w-4 h-4 inline-block mr-1" />
                        {tab.direccion}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

