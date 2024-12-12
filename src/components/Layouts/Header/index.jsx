"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HeaderBanner from "./header-baner";
import MenuMobile from "./menu-mobile";
import MenuItems from "./menuItems";
import { usePrefetch } from "@/store/services/menuItems/menuApi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);
  const prefetchMenuItems = usePrefetch("getMenuItems");


  useEffect(() => {
    // Prefetch del menú al cargar el componente
    prefetchMenuItems();
  }, [prefetchMenuItems]);
  

  useEffect(() => {
    const banner = document.getElementById("header-banner");
    if (banner) {
      setBannerHeight(banner.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > bannerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bannerHeight]);

  return (
    <>
      <HeaderBanner id="header-banner" />
      <section
        className={`sticky transition-all duration-300 ease-in-out z-50 bg-white ${
          isScrolled
            ? "top-0 shadow-lg"
            : `top-[${bannerHeight}px] `
        }`}
        style={{ top: isScrolled ? 0 : bannerHeight }}
      >
        <div className="max-w-[1320px] mx-auto">
          <div
            className={`flex items-center justify-between gap-2 p-4 xl:py-5 transition-all duration-300 ease-in-out ${
              isScrolled ? "py-4" : "py-2"
            }`}
          >
            <img
              src="/img/encabezado.png"
              alt="Logo Principal"
              className="w-24 md:w-32"
            />
            <MenuItems />
            <div className="flex items-center gap-1">
              <Button
                className={`bg-device-600 hover:bg-device-500 rounded-full transition-all duration-300 ease-in-out ${
                  isScrolled ? "p-6 text-sm" : "p-6"
                }`}
              >
                Contáctenos
              </Button>

              <MenuMobile />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
