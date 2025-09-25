"use client";
import React from "react";
import { Home, Building, RefreshCcw, Layers, Layout } from "lucide-react";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Residential Construction",
    description:
      "From luxurious villas to modern apartments, we handle every aspect of residential construction — foundation, structure, interiors, and finishing — ensuring your dream home comes to life with precision and style.",
    icon: <Home size={36} />,
    image: "/hero1.jpg",
  },
  {
    title: "Commercial Construction",
    description:
      "We deliver top-notch commercial construction solutions including offices, retail spaces, and complexes with professional design, durable structures, and timely execution to boost business functionality.",
    icon: <Building size={36} />,
    image: "/hero2.jpg",
  },
  {
    title: "Remodelling & Renovation",
    description:
      "Transform your existing property with innovative remodelling and renovation services. We revamp interiors, optimize layouts, and refresh aesthetics while keeping structural integrity intact.",
    icon: <RefreshCcw size={36} />,
    image: "/hero3.jpg",
  },
  {
    title: "Excavation & Interiors",
    description:
      "Complete excavation, site preparation, and interior design services tailored to your project. From groundwork to stylish interiors, we provide an end-to-end solution.",
    icon: <Layers size={36} />,
    image: "/hero4.jpg",
  },
  {
    title: "Architecture & Planning",
    description:
      "Comprehensive architectural services covering planning, conceptualization, and execution. We create functional, aesthetic, and sustainable spaces that reflect your vision.",
    icon: <Layout size={36} />,
    image: "/hero5.jpg",
  },
];

const Services = () => {
  return (
    <section className="relative bg-[#331417] text-[#D5B594] py-20 px-6 md:px-12 overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFD700] mb-4">
          Our Services
        </h2>
        <p className="text-[#FDFCFB]/80 text-lg max-w-2xl mx-auto">
          We provide complete construction and architectural solutions from A to
          Z. Explore our premium services below.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col bg-[#401E23]/70 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer group"
          >
            {/* Image */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#3C191F]/60 via-[#401E23]/30 to-[#D5B594]/10"></div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mt-4 text-[#FFD700]">
              {service.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col items-center text-center p-6">
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-[#FDFCFB]/90 text-sm md:text-base leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-[#D5B594] to-[#3C191F] text-[#FDFCFB] font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
