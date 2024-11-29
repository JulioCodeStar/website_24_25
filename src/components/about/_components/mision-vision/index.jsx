/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Smartphone, MessageSquare } from "lucide-react";

export default function MissionVisionSection() {
  const features = [
    {
      icon: <FileText />,
      title: "Misión",
      description:
        "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
    },
    {
      icon: <Smartphone />,
      title: "Visión",
      description:
        "This Design System and UI kit is coming with full-responsive screens for tablet and mobile devices.",
    },
    {
      icon: <MessageSquare />,
      title: "Valores",
      description:
        "On mobile, customers can send text, or audio messages to agents, like using any messaging app",
    },
  ];

  return (
    <section className="relative py-16 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col gap-5 items-center">
            <h3 className="text-lg lg:text-2xl font-medium tracking-wider text-blue-700">
              Mision & Visión
            </h3>
            <h2 className="mt-2 text-3xl font-bold text-center text-mons lg:text-5xl">
              Nuestro Objectivo con los Clientes
            </h2>
            <div className="grid gap-12 lg:grid-cols-2 mt-10">
                <div className="space-y-6 pt-8">
                    {features.map((feature) => (
                        <Card key={feature.title} className="border-none shadow-none">
                        <CardHeader className="space-y-1 pb-2">
                            <CardTitle className="flex items-center gap-2 text-xl">
                            {feature.icon}
                            {feature.title}
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
                    <img
                    src="https://placehold.co/260x332/png"
                    alt="Office desk setup"
                    className="rounded-lg object-cover w-full h-full"
                    />
                    <img
                    src="https://placehold.co/280x198/png"
                    alt="Team meeting"
                    className="rounded-lg object-cover w-full h-[150px]"
                    />
                </div>
                <div className="grid gap-4">
                    <img
                    src="https://placehold.co/280x198/png"
                    alt="Minimal desk with notebook"
                    className="rounded-lg object-cover w-full h-[150px]"
                    />
                    <img
                    src="https://placehold.co/260x332/png"
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
