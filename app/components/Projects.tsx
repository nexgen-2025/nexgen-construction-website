"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    name: "Sobha Heartland II Villas",
    desc: "4 Bedroom Villas for Rent in Al Barsha, 1 Villas, Al Barsha 1, Al Barsha",
    price: "$189",
    rating: "4.83",
    img: "/hero3.jpg",
  },
  {
    id: 2,
    name: "Mykonos Damac Lagoons",
    desc: "2 Bedroom Apartment for Rent in Bilqas Residence, Palm Jumeirah",
    price: "$560",
    rating: "4.87",
    img: "/hero1.jpg",
  },
  {
    id: 3,
    name: "Verdana 2 Residence",
    desc: "1 Bedroom Apartment for Rent in Continental Tower, Dubai Marina",
    price: "$231",
    rating: "4.44",
    img: "/hero2.jpg",
  },
  {
    id: 4,
    name: "JK Skyline Towers",
    desc: "Luxury 3BHK Apartments in Downtown Dubai with city views.",
    price: "$450",
    rating: "4.91",
    img: "/hero4.jpg",
  },
  {
    id: 5,
    name: "Palm Beach Villas",
    desc: "Exclusive beachfront villas with private pools and gardens.",
    price: "$720",
    rating: "4.95",
    img: "/hero8.jpg",
  },
];

const Projects = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 bg-white">
      {/* Section Heading */}
      <div className="mb-10">
        <p className="text-sm text-gray-500">Best projects of the year</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our recent projects
        </h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
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
            <div className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition">
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
              <div className="p-6 flex flex-col justify-between h-[260px]">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {project.price}
                      <span className="text-gray-500 text-sm">/night</span>
                    </p>
                    <p className="text-sm text-gray-500">⭐ {project.rating}</p>
                  </div>
                  <button className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition">
                    Book Now
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
