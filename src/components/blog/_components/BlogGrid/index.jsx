/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ModernPagination } from "./pagination";

const blogs = [
  {
    img: "https://placehold.co/920x613/jpg",
    date: "12 Jan 2022",
    ncoment: "03 Comt",
    title: "How do Inherited Retinal of Diseases Happen?",
    description:
      "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "/blog/dsdsdfdsfdsds",
  },
  {
    img: "https://placehold.co/920x613/jpg",
    date: "11 Jan 2022",
    ncoment: "0 Comt",
    title: "Prepare to Speak with Your Eye Specialist.",
    description:
      "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "/blog/dsdsdfdsfdsds",
  },
  {
    img: "https://placehold.co/920x613/jpg",
    date: "11 Jan 2022",
    ncoment: "02 Comt",
    title: "How reliece can help you manage diabetes",
    description:
      "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "/blog/dsdsdfdsfdsds",
  },
  {
    img: "https://placehold.co/920x613/jpg",
    date: "11 Jan 2022",
    ncoment: "02 Comt",
    title: "How reliece can help you manage diabetes",
    description:
      "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "/blog/dsdsdfdsfdsds",
  },
  {
    img: "https://placehold.co/920x613/jpg",
    date: "11 Jan 2022",
    ncoment: "02 Comt",
    title: "How reliece can help you manage diabetes",
    description:
      "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "/blog/dsdsdfdsfdsds",
  },
  {
    img: "https://placehold.co/920x613/jpg",
    date: "11 Jan 2022",
    ncoment: "02 Comt",
    title: "How reliece can help you manage diabetes",
    description:
      "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "/blog/dsdsdfdsfdsds",
  },
];

export default function BlogGrid() {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10;

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {blogs.map((blog, index) => (
            <div key={index} className="w-full bg-white rounded-2xl shadow">
              <a href="#">
                <img
                  className="rounded-t-lg w-full"
                  src={blog.img}
                  alt={blog.title}
                />
              </a>
              <div className="p-5">
                <div className="flex items-center space-x-4 text-gray-500 py-2">
                  <span>{blog.date}</span>
                  <span className="mx-2">|</span>
                  <span>{blog.ncoment}</span>
                </div>
                <a href="#">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-mons">
                    {blog.title}
                  </h5>
                </a>
                <p className="mb-5 font-normal text-gray-400">
                  {blog.description}
                </p>
                <Link
                  href={blog.href}
                  className="flex items-center gap-2 py-3 uppercase text-gray-500 hover:text-device-900 transition-all delay-100"
                >
                  ver más
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <ModernPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
