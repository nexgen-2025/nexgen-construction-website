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
    desc: "A modern commercial building designed with a focus on functionality and aesthetics. Nexgen handled the entire project from structural works, civil construction, interior fit-outs, to finishing, ensuring a high-quality workspace for the client.",
    img: "/vimala/elevation2.jpg",
  },
  {
    id: 2,
    name: "Zaheer",
    desc: "A contemporary commercial complex featuring open-plan office spaces and retail areas. Nexgen provided end-to-end construction services including architectural planning, structural execution, and interior detailing to deliver a fully functional commercial hub.",
    img: "/zaheer/elevation1.jpg",
  },
  {
    id: 3,
    name: "Mickal",
    desc: "A modern multi-use commercial property optimized for efficiency and natural lighting. Nexgen managed all stages of construction from foundation to finishing, including interiors, electrical works, and quality control to meet client expectations.",
    img: "/mickal/elevation1.jpg",
  },
  {
    id: 4,
    name: "Rizwan",
    desc: "A high-rise commercial building designed for urban business needs. Nexgen executed complete construction services, including reinforced concrete frameworks, facade installation, and interior fit-outs, delivering a professional and durable structure.",
    img: "/rizwan_bank/elevation1.jpg",
  },
  {
    id: 5,
    name: "Aslam",
    desc: "A premium commercial facility incorporating modern design and practical workspace solutions. Nexgen handled all aspects of construction, from civil works to interiors and finishing, ensuring a high-standard, fully operational building for the client.",
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
                {/* Button stays at bottom
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => router.push("/projects")}
                    className="px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition"
                  >
                    View Project
                  </button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
