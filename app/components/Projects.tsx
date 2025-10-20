"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    name: "Vimala Teacher",
    desc: "A premium residential villa development featuring 4-bedroom luxury homes with landscaped gardens, and contemporary architecture. Nexgen delivered full-scale construction including structural works, interiors, and finishing with premium-grade materials to ensure durability and elegance.",
    img: "/vimala/elevation2.jpg",
  },
  {
    id: 2,
    name: "Zaheer",
    desc: "Inspired by Mediterranean-style living, this project included design and execution of resort-style residences with waterfront views. Our team handled complete civil construction, facade treatments, and interior fit-outs, bringing modern aesthetics blended with natural surroundings.",
    img: "/zaheer/elevation1.jpg",
  },
  {
    id: 3,
    name: "Mickal",
    desc: "A contemporary residential apartment complex built to maximize space efficiency and natural light. Nexgen was responsible for architectural planning, structural execution, and turnkey interiors including modular kitchens, smart storage solutions, and modern design finishes.",
    img: "/mickal/elevation1.jpg",
  },
  {
    id: 4,
    name: "Rizwan",
    desc: "High-rise luxury apartments designed for urban living in downtown. The project highlights included reinforced concrete frameworks, high-quality glass facade systems, and premium interiors. Our project management team ensured timely delivery with sustainable construction practices.",
    img: "/rizwan_bank/elevation1.jpg",
  },
  {
    id: 5,
    name: "Aslam",
    desc: "Exclusive beachfront villas offering private pools, landscaped outdoor areas, and bespoke interior solutions. Nexgen executed structural works, villa customization, and luxury interior detailing, ensuring a seamless blend of comfort, style, and durability for coastal living.",
    img: "/royal_cycle/elevation2.jpg",
  },
];

const Projects = () => {
  const router = useRouter();

  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 bg-white">
      {/* Section Heading */}
      <div className="mb-10 text-center md:text-left">
        <p className="text-sm text-gray-500">Highlighted Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Recent Projects
        </h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="flex flex-col h-full rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-xl transition">
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                {/* Flex-1 ensures the paragraph takes remaining space */}
                <p className="text-sm text-gray-600 flex-1 leading-relaxed">
                  {project.desc}
                </p>

                {/* Button stays at bottom */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => router.push("/projects")}
                    className="px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
