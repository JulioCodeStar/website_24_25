/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function HeaderSection() {
  return (
    <section className="relative w-full h-screen">
      <img
        src="https://placehold.co/1920x1080/png"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-center text-white gap-5">
          <h1 className="scroll-m-20 text-4xl lg:text-6xl font-extrabold tracking-tight ">
            Prótesis Transfemoral / Transtibial
          </h1>
          <p className="text-xl text-white/70 ">
            Subtítulo o descripción breve que complementa el título principal
          </p>
        </div>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-white">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-white">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
}
