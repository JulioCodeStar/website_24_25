/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import HeaderBanner from "./header-baner";
import MenuMobile from "./menu-mobile";
import { useGetMenuItemsQuery } from "@/store/services/menuItems/menuApi";
import MenuItems from "./menuItems";

export default function Header() {
  return (
    <>
      <HeaderBanner />
      <section className="relative w-full">
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
      </section>
    </>
  );
}
