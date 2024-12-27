import { cn } from "@/lib/utils"; // Utilidad de ShadCN para concatenar clases (si la usas)
import { Skeleton } from "@/components/ui/skeleton"; // Componente Skeleton de ShadCN

export default function BlogSkeleton() {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {/* Repite Skeleton 6 veces para simular los blogs */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-full bg-white rounded-2xl shadow">
              {/* Imagen */}
              <Skeleton className="rounded-t-lg w-full h-60" />
              <div className="p-5">
                {/* Autor y Fecha */}
                <div className="flex items-center space-x-4 text-gray-500 py-2">
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-4 h-4 mx-2" />
                  <Skeleton className="w-16 h-4" />
                </div>
                {/* Título */}
                <Skeleton className="w-3/4 h-6 mb-4" />
                {/* Extracto */}
                <Skeleton className="w-full h-4 mb-2" />
                <Skeleton className="w-5/6 h-4 mb-5" />
                {/* Botón */}
                <Skeleton className="w-24 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
