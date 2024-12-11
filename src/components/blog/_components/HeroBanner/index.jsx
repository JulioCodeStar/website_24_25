import Link from "next/link";
import { ChevronRight } from 'lucide-react';

export default function HeroBannerSection() {
  return (
    <section className="relative h-[300px] w-full overflow-hidden ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080/jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          Blog Grid
        </h1>
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm md:text-base">
          <Link 
            href="/" 
            className="text-device-700 hover:text-device-600"
          >
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Blog Grid</span>
        </nav>
      </div>

    </section>
  )
}
