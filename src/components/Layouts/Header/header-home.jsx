/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from "@/components/ui/button";
import HeaderBanner from "./header-baner";
import MenuMobile from "./menu-mobile";
import HeaderBackground from "./header-background";
import { HeroSection } from "@/components/home";
import MenuItems from "./menuItems";

export default function Header() {
  return (
    <>
      <HeaderBanner />
      <section className="relative w-full py-2 px-4 xl:py-5 xl:px-24">
        <HeaderBackground />
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4 p-4">
          {/* Logo */}
          <img
            src="/img/encabezado.png"
            alt="Logo Principal"
            className="w-24 md:w-32"
          />

          {/* Menú de Navegación para Pantallas Grandes */}
          <MenuItems />

          {/* Botón de Contacto y Menú Móvil */}
          <div className="flex items-center gap-4">
            <Button className="bg-device-600 hover:bg-device-500 rounded-full p-6">
              Contáctenos
            </Button>
            <MenuMobile />
          </div>
        </div>

        <HeroSection />
      </section>
    </>
  );
}
