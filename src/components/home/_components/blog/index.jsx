/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const blogs = [
  {
    img: "https://placehold.co/920x613/jpg",
    date: "12 Jan 2022",
    ncoment: "03 Comt",
    title: "How do Inherited Retinal of Diseases Happen?",
    description:
      "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "#",
  },
  {
    img: "https://placehold.co/920x613/jpg",
    date: "11 Jan 2022",
    ncoment: "0 Comt",
    title: "Prepare to Speak with Your Eye Specialist.",
    description:
      "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "#",
  },
  {
    img: "https://placehold.co/920x613/jpg",
    date: "11 Jan 2022",
    ncoment: "02 Comt",
    title: "How reliece can help you manage diabetes",
    description:
      "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#F4F3F8] py-28">
      <div className="max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-6 px-6">
        <h5 className="text-2xl font-medium text-blue-600">Nuestro Blog</h5>
        <h1 className="text-3xl lg:text-5xl text-mons font-semibold leading-tight text-center pb-7">
          Artículos recientes sobre prótesis y <br /> sus usuario
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="w-full bg-white rounded-2xl shadow"
            >
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
      </div>
    </section>
  );
}
