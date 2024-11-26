/* eslint-disable @next/next/no-img-element */
import { CgMenu } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MenuMobile() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:hidden cursor-pointer">
            <CgMenu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <img
                src="/img/encabezado.png"
                alt="Logo Principal"
                className="w-24 md:w-32"
              />
            </SheetTitle>
          </SheetHeader>
          <hr className="mt-8"/>
          <div className="py-12">
            <Accordion type="single" collapsible className="space-y-2">
              {/* INICIO (Enlace Directo) */}

              <Link href="/" className="block px-3 py-2">
                INICIO
              </Link>

              {/* NOSOTROS (Enlace Directo) */}

              <Link href="/" className="block px-3 py-2">
                NOSOTROS
              </Link>

              {/* SERVICIOS (Con Submenús) */}
              <AccordionItem value="servicios">
                <AccordionTrigger className="text-[16px] px-3 py-2">
                  SERVICIOS
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion
                    type="single"
                    collapsible
                    className="space-y-2 mt-2 ml-4"
                  >
                    {/* Sub-Item: Consultoría */}
                    <AccordionItem value="consultoria">
                      <AccordionTrigger className="flex items-center px-3 py-2 rounded-md">
                        Prótesis de Pierna
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 mt-2 ml-4">
                          <li>
                            <Link
                              href="/"
                              className="block px-3 py-2 "
                            >
                              Prótesis Transfemoral
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/"
                              className="block px-3 py-2"
                            >
                              Prótesis Transtibial
                            </Link>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Sub-Item: Desarrollo */}
                    <AccordionItem value="desarrollo">
                      <AccordionTrigger className="flex items-center px-3 py-2 rounded-md">
                        Prótesis Biónicas
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 mt-2 ml-4">
                          <li>
                            <Link
                              href="/"
                              className="block px-3 py-2"
                            >
                              Mano Parcial Biónicas
                            </Link>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Sub-Item: Soporte */}
                    <AccordionItem value="soporte">
                      <AccordionTrigger className="flex items-center px-3 py-2 rounded-md">
                        Estéticas
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 mt-2 ml-4">
                          <li>
                            <Link
                              href="/"
                              className="block px-3 py-2"
                            >
                              Mano Completa Estética
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/"
                              className="block px-3 py-2"
                            >
                              Falange Total
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/"
                              className="block px-3 py-2"
                            >
                              Prótesis de Oído
                            </Link>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

              {/* BLOG (Enlace Directo) */}
              <Link href="/" className="block px-3 py-2">
                BLOG
              </Link>

              {/* CONTACTO (Enlace Directo) */}

              <Link href="/" className="block px-3 py-2">
                CONTACTO
              </Link>
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
