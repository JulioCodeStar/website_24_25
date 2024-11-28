/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeaderBanner from "./header-baner";
import MenuMobile from "./menu-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import HeaderBackground from "./header-background";
import { HeroSection, CardInfoSection } from "@/components/home";

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
          <div className="hidden lg:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`text-lg ${navigationMenuTriggerStyle()}`}
                    >
                      Inicio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/nosotros" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-[18px]`}
                    >
                      Nosotros
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[18px]">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-full flex-wrap gap-8 p-6 bg-white rounded-lg shadow-md lg:w-[800px]">
                      {/* Columna 1 - Prótesis de Pierna */}
                      <div className="flex-1 min-w-[200px] p-2 border-r-2">
                        <Link href="#">
                          <h4 className="mb-4 text-lg font-semibold text-gray-800">
                            Prótesis de Pierna
                          </h4>
                        </Link>
                        <ul className="space-y-4">
                          <li>
                            <a
                              href="#"
                              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
                            >
                              <span className="text-xl">🛒</span>
                              <span>Prótesis Transfemoral</span>
                            </a>
                            <p className="text-sm text-gray-500">
                              Prótesis por encima de la rodilla.
                            </p>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
                            >
                              <span className="text-xl">📱</span>
                              <span>Prótesis Transtibial</span>
                            </a>
                            <p className="text-sm text-gray-500">
                              Prótesis por debajo de la rodilla.
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Columna 2 - Prótesis Biónicas */}
                      <div className="flex-1 min-w-[200px] p-2 border-r-2">
                        <Link href="#">
                          <h4 className="mb-4 text-lg font-semibold text-gray-800">
                            Prótesis Biónicas
                          </h4>
                        </Link>
                        <ul className="space-y-4">
                          <li>
                            <a
                              href="#"
                              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
                            >
                              <span className="text-xl">💻</span>
                              <span>Mano Parcial Biónicas</span>
                            </a>
                            <p className="text-sm text-gray-500">
                              Integrate Strapi with your favorite tools.
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Columna 3 - Prótesis Estéticas */}
                      <div className="flex-1 min-w-[200px] p-2">
                        <Link href="#">
                          <h4 className="mb-4 text-lg font-semibold text-gray-800">
                            Prótesis Estéticas
                          </h4>
                        </Link>
                        <ul className="space-y-4">
                          <li>
                            <a
                              href="#"
                              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
                            >
                              <span className="text-xl">🏦</span>
                              <span>Mano Completa Estéticas</span>
                            </a>
                            <p className="text-sm text-gray-500">
                              Build trustful relations with your customers.
                            </p>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
                            >
                              <span className="text-xl">🔧</span>
                              <span>Falange Total</span>
                            </a>
                            <p className="text-sm text-gray-500">
                              Stand out with exceptional B2B content.
                            </p>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
                            >
                              <span className="text-xl">🎮</span>
                              <span>Prótesis de Oídos</span>
                            </a>
                            <p className="text-sm text-gray-500">
                              Create and manage content on any platform.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-[18px]`}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contactos" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-[18px]`}
                    >
                      Contactos
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

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
