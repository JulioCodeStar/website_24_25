import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin } from 'lucide-react'

export default function MapsSection({ data }) {
  
  return (
    <section className="relative w-full py-16 bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-mons text-center mb-8">Nuestras Sedes</h2>
        <Tabs defaultValue="sede-lima" className="flex flex-col lg:flex-row">
          <TabsList className="flex-col h-auto justify-start lg:w-1/4 mb-6 lg:mb-0 lg:mr-6 bg-white rounded-lg shadow-md">
            {data.Maps.map((tab) => (
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
            {data.Maps.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl">{tab.titulo}</CardTitle>
                    <CardDescription>{tab.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-w-16 h-80">
                      <iframe
                        src={tab.link_iframe_maps}
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

