/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Smartphone, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function MissionVisionSection({ data }) {

  return (
    <section className="relative py-16 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col gap-5 items-center">
          <h3 className="text-lg lg:text-2xl font-medium tracking-wider text-blue-700">
            {data.etiqueta}
          </h3>
          <h2 className="mt-2 text-3xl font-bold text-center text-mons lg:text-5xl">
            {data.titulo}
          </h2>
          <div className="grid gap-12 lg:grid-cols-2 mt-10">
            <div className="space-y-6 pt-8">
              {data.ListItem.map((feature) => (
                <Card key={feature.id} className="border-none shadow-none">
                  <CardHeader className="space-y-1 pb-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <FileText />
                      {feature.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {feature.description}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <Image
                  src="https://placehold.co/260x332/png"
                  width={260}
                  height={332}
                  alt="Office desk setup"
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="https://placehold.co/280x198/png"
                  width={280}
                  height={198}
                  alt="Team meeting"
                  className="rounded-lg object-cover w-full h-[150px]"
                />
              </div>
              <div className="grid gap-4">
                <Image
                  src="https://placehold.co/280x198/png"
                  width={280}
                  height={198}
                  alt="Minimal desk with notebook"
                  className="rounded-lg object-cover w-full h-[150px]"
                />
                <Image
                  src="https://placehold.co/260x332/png"
                  width={260}
                  height={332}
                  alt="Modern workspace"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
