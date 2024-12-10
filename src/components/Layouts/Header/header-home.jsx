/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HeaderBanner from "./header-baner";
import MenuMobile from "./menu-mobile";
import HeaderBackground from "./header-background";
import { HeroSection } from "@/components/home";
import MenuItems from "./menuItems";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detecta si se ha hecho scroll (ajustar 50px según necesites)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderBanner id="header-banner-home" />
      {/* Header Sticky */}
      <section
        className={`${
          isScrolled ? "sticky top-0 z-50 bg-white shadow-lg" : "relative"
        } bg-transparent transition-all duration-300 ease-in-out`}
      >
        <div className="relative w-full py-2 px-4 lg:py-5 xl:px-24"> {/*  */}
          <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4">
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
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full">
        <HeaderBackground />
        <div className="max-w-[1320px] mx-auto px-4 py-12">
          <HeroSection />
        </div>
      </section>
    </>
  );
}
