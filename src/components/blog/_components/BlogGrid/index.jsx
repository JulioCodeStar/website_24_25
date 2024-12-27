/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import configAxios from "@/api/config/config-axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { ModernPagination } from "./pagination";
import BlogSkeleton from "./blog-skeleton";

export default function BlogGrid() {
  const [blogData, setBlogData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const fetchBlogData = async (page) => {
    try {
      const res = await configAxios.get(
        `blogs?pagination[page]=${page}&pagination[pageSize]=${pageSize}&fields[0]=date&fields[1]=title&fields[2]=author&fields[3]=excert&fields[4]=slug&populate=*`
      );
      console.log(res.data);
      
      setBlogData(res.data.data);
    } catch (error) {
      console.log("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogData(currentPage);
  }, [currentPage]);

  const totalPages = blogData?.meta?.pagination?.pageCount || 1;

  if (!blogData) {
    return <BlogSkeleton />;
  }

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {blogData?.map((blog) => (
            <div key={blog.id} className="w-full bg-white rounded-2xl shadow">
              <a href="#">
                <Image
                  className="rounded-t-lg w-full h-60 object-cover"
                  src={blog.featured_image ? blog.featured_image.formats.small.url : "https://placehold.co/920x613/jpg"}
                  height={240}
                  width={920}
                  alt={blog.title}
                />
              </a>
              <div className="p-5">
                <div className="flex items-center space-x-4 text-gray-500 py-2">
                  <span>{blog.author}</span>
                  <span className="mx-2">|</span>
                  <span>{blog.date}</span>
                </div>
                <a href="#">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-mons">
                    {blog.title}
                  </h5>
                </a>
                <p className="mb-5 font-normal text-gray-400">
                  {blog.excert}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
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
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
}
