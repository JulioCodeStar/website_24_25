/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useBlogData } from "@/hooks/Blog/simpleBlog";

const categories = [
  "Cardiology",
  "Dental Clinic",
  "Neurosurgery",
  "Medical",
  "Pediatrics",
  "Modern Laboratory",
];

const archives = [
  "Diciembre 2023",
  "Noviembre 2023",
  "Octubre 2023",
  "Septiembre 2023",
  "Agosto 2023",
  "Junio 2023",
];

export default function SimpleBlog() {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  const { data: blog, loading, error } = useBlogData(slug);

  return (
    <section className="relative py-28 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Categories</h2>
                <ul className="space-y-4">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link
                        href="#"
                        className="flex items-center text-gray-700 hover:text-primary"
                      >
                        <span className="text-primary">›</span>
                        <span className="ml-2">{category}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Archivos</h2>
                <ul className="space-y-4">
                  {archives.map((category) => (
                    <li key={category}>
                      <Link
                        href="#"
                        className="flex items-center text-gray-700 hover:text-primary"
                      >
                        <span className="text-primary">›</span>
                        <span className="ml-2">{category}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Archivos</h2>
                <ul className="space-y-4">
                  {archives.map((category) => (
                    <li key={category}>
                      <Link
                        href="#"
                        className="flex items-center text-gray-700 hover:text-primary"
                      >
                        <span className="text-primary">›</span>
                        <span className="ml-2">{category}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Card className="overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <CardContent className="p-0">
              {
                blog?.featured_image?.formats?.large?.url ?
                (
                  <Image
                    src={blog?.featured_image?.formats?.large?.url}
                    width={1000}
                    height={400}
                    alt={blog?.title || "Blog image"}
                    className="w-full"
                  />
                ): (
                  <p>No image available</p>
                )
              }
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                  <span>{blog?.author}</span>
                  <span>{new Date(blog?.date).toLocaleDateString()}</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  {blog?.title}
                </h1>
                <div
                  className="content mt-6 leading-7"
                  dangerouslySetInnerHTML={{ __html: blog?.content_editor }}
                />
                {/* <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  What Causes Inherited Retinal Diseases?
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Fugiat voluptate Lorem velit excepteur nostrud laborum Lorem
                  deserunt labore ut anim cillum velit. Tempor irure fugiat ut
                  consequat laboris ex ea eu sit. Elit officia ut magna
                  consequat cillum incididunt ut Lorem fugiat Lorem voluptate
                  et.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Elit aliqua cupidatat aliqua nisi laborum. Adipisicing
                  exercitation sit in pariatur occaecat veniam quis. Lorem ipsum
                  aute culpa labore officia elit magna esse velit mollit
                  reprehenderit adipisicing. Officia Lorem non est Lorem. Irure
                  ullamco ad eu reprehenderit dolor excepteur est. Ea mollit sit
                  deserunt sint. Laboris tempor amet laborum occaecat pariatur
                  ipsum.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Minim consectetur nostrud ex nisi ea esse sunt et ullamco. Est
                  irure minim quis nisi irure nisi do in ad quis. Cillum labore
                  cupidatat proident dolor elit velit. Ad amet amet ullamco est
                  pariatur nisi laboris quis aliquip enim. Sunt aliquip irure
                  laborum commodo magna irure dolore in cillum do ea.
                </p>
                <h2 className="mt-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Results Are Easy To Obtain
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Minim consectetur nostrud ex nisi ea esse sunt et ullamco. Est
                  irure minim quis nisi irure nisi do in ad quis. Cillum labore
                  cupidatat proident dolor elit velit. Ad amet amet ullamco est
                  pariatur nisi laboris quis aliquip enim. Sunt aliquip irure
                  laborum commodo magna irure dolore in cillum do ea.
                </p>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <figure className="relative rounded-xl">
                    <img src="https://placehold.co/319x198/jpg" alt="" />
                  </figure>
                  <figure className="relative rounded-xl">
                    <img src="https://placehold.co/319x198/jpg" alt="" />
                  </figure>
                </div>
                <blockquote className="relative p-7 m-6">
                  <span className="icon-[tabler--quote] text-base-300/80 absolute -start-3 -top-3 size-16 rotate-180 rtl:rotate-0"></span>

                  <div className="relative z-[1]">
                    <p className="text-base-content/90 text-lg">
                      <em>
                        The blockquote element is ideal for showcasing
                        well-known quotes within content. It(&apos)s commonly
                        used for testimonials, reviews, and notable quotes in
                        articles.
                      </em>
                    </p>
                  </div>
                </blockquote> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
