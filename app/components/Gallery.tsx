"use client";
import React, { useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Before & After",
  "Residential",
  "Commercial",
  "Interiors",
];

const projects = [
  {
    id: 1,
    category: "Before & After",
    before: "/before1.jpg",
    after: "/after1.jpg",
    title: "Villa Renovation - Coimbatore",
  },
  {
    id: 2,
    category: "Residential",
    img: "/residential1.jpg",
    title: "Luxury Apartment - Chennai",
  },
  {
    id: 3,
    category: "Commercial",
    img: "/commercial1.jpg",
    title: "Corporate Office - Bangalore",
  },
  {
    id: 4,
    category: "Interiors",
    img: "/interior1.jpg",
    title: "Modern Living Room - Hyderabad",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-red-600">Gallery</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore our completed and ongoing projects — from design concepts to
          full-scale construction.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeCategory === cat
                ? "bg-red-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            {/* Before/After case */}
            {project.before && project.after ? (
              <div className="grid grid-cols-2 gap-1">
                <div className="relative w-full h-52">
                  <Image
                    src={project.before}
                    alt="Before"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Before
                  </span>
                </div>
                <div className="relative w-full h-52">
                  <Image
                    src={project.after}
                    alt="After"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-green-600/80 text-white text-xs px-2 py-1 rounded">
                    After
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-60">
                <Image
                  src={project.img!}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
