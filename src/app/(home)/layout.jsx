"use client";

import { Header, Footer, HeaderHome } from "@/components/Layouts/";
import { usePathname } from "next/navigation";;

export default function HomeLayout({ children }) {

  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main className="min-h-screen flex flex-col justify-between relative text-mons">
      {
        isHome ? (
          <HeaderHome />
        ) : (
          <Header />
        )
      }
      
      <div className="flex-grow relative">{children}</div>
      <Footer />
    </main>
  );
}