"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeaderBanner from "./header-baner";
import MenuMobile from "./menu-mobile";
import MenuItems from "./menuItems";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollingUp = currentScrollY < lastScrollY;
    const scrollThreshold = 100; // Adjust this value as needed

    if (currentScrollY <= scrollThreshold) {
      setIsFixed(false);
      controls.start("visible");
    } else if (scrollingUp) {
      setIsFixed(true);
      controls.start("visible");
    } else {
      controls.start("hidden");
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Ensure the menu is visible when the component mounts
    controls.start("visible");
  }, [controls]);

  const variants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    hidden: { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <>
      <HeaderBanner id="header-banner" />
      <motion.section
        initial="visible"
        animate={controls}
        variants={variants}
        className={`z-50 bg-white ${isFixed ? "fixed top-0 left-0 right-0 shadow-lg" : "relative"}`}
      >
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center justify-between gap-2 p-4 xl:py-5">
            <img
              src="/img/encabezado.png"
              alt="Logo Principal"
              className="w-24 md:w-32"
            />
            <MenuItems />
            <div className="flex items-center gap-1">
              <Button className="bg-device-600 hover:bg-device-500 rounded-full p-6">
                Contáctenos
              </Button>
              <MenuMobile />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

