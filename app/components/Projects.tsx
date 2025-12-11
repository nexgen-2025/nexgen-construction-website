"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CompletedProjects = [
  {
    id: 1,
    name: "Sabil",
    place: "Housing Board Interior work plan Krishnagiri",
    img: "/ongoing/sabil_housing_board1.png",
  },
  {
    id: 2,
    name: "Residential Building ",
    place: "Near Cambridge school Krishnagiri",
    img: "/ongoing/cambridge_site.jpeg",
  },
  {
    id: 3,
    name: "Gufthar Bhai",
    place: "Housing Board Krishnagiri",
    img: "/ongoing/housing_board.jpeg",
  },
  {
    id: 4,
    name: "Residential Building",
    place: "Collector Office Krishnagiri",
    img: "/ongoing/collector_office.jpeg",
  },
  {
    id: 5,
    name: "Afsar Residential Building",
    place: "Mohan Rao Colony Krishnagiri",
    img: "/ongoing/afsar_mohan_rao.jpeg",
  },
  {
    id: 6,
    name: "Residential Building",
    place: "Fazullah nagar Krishnagiri",
    img: "/ongoing/fazullah_nagar.jpeg",
  },
];

const OngoingProjects = [
  {
    id: 1,
    name: "Mr-sami",
    desc: "A modern commercial building designed with a focus on functionality.",
    img: "/completed/mr-sami.jpeg",
  },
  {
    id: 2,
    name: "Rizwan",
    desc: "A multi-use commercial property optimized for natural lighting.",
    img: "/completed/rizwan.jpeg",
  },
  {
    id: 3,
    name: "Michael",
    desc: "A high-rise commercial building for urban business needs.",
    img: "/completed/michael.jpeg",
  },
  {
    id: 4,
    name: "Residential Building",
    desc: "Premium commercial facility with modern workspace solutions.",
    img: "/completed/mohan_rao.jpeg",
  },
  {
    id: 5,
    name: "Just Baked For U",
    desc: "Modern commercial facility with practical interiors.",
    img: "/completed/just_baked.jpg",
  },
];

const Projects = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 bg-white space-y-20">
      {/* Ongoing Projects */}
      <div>
        <div className="mb-8">
          <p className="text-sm text-gray-500">Work in Progress</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ongoing Projects
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
        >
          {CompletedProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                {/* FIXED IMAGE HEIGHT */}
                <div className="relative w-full h-64">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{project.place}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Completed Projects */}
      <div>
        <div className="mb-8">
          <p className="text-sm text-gray-500">Finished Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Completed Projects
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
        >
          {OngoingProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                {/* FIXED IMAGE HEIGHT */}
                <div className="relative w-full h-64">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
