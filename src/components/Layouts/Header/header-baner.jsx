import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";
import Link from "next/link";

export default function HeaderBanner() {
  return (
    <header className="bg-device-950 h-auto py-2 px-4 md:py-4 xl:px-28">
      <div className="flex flex-col items-center justify-center text-white gap-1 md:justify-between md:flex-row">
        <div className="md:hidden flex items-center gap-2">
          <GoHome />
          <span className="text-xs">Sedes: Lima, Arequipa y Chiclayo</span>
        </div>

        {/* md */}
        <div className="hidden md:flex gap-8">
          <div className="flex md:justify-center items-center gap-2">
            <IoTimeOutline />
            <span className="text-[16px]">
              Lunes - Viernes 09:00 - 18:00 / Sabado 09:00 - 13:00
            </span>
          </div>
          <div className="flex md:justify-center items-center gap-2">
            <MdOutlinePhone />
            <span className="text-[16px]">Teléfono: (+51) 922578858</span>
          </div>
          <div className="flex md:justify-center items-center gap-2">
            <GoHome />
            <span className="text-[16px]">Sedes: Lima, Arequipa y Chiclayo</span>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center gap-6">
          <Link href="#" target="_blank">
            <FiFacebook />
          </Link>
          <Link href="#" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="#" target="_blank">
            <FaLinkedinIn />
          </Link>
          <Link href="#" target="_blank">
            <ImYoutube2 />
          </Link>
        </div>
      </div>
    </header>
  );
}
