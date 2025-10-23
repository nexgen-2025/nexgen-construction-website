"use client";
import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Before & After", "Residential", "Interiors"];

const projects = [
  {
    id: 1,
    category: "Before & After",
    before: "/hero7.jpg",
    after: "/hero5.jpg",
    title: "Before & After",
  },
  {
    id: 2,
    category: "Residential",
    img: "/vimala/elevation2.jpg",
    title: "Vimala Teacher",
  },
  {
    id: 3,
    category: "Interiors",
    img: "/mickal/elevation1.jpg",
    title: "Mickal",
  },
  {
    id: 4,
    category: "Residential",
    img: "/royal_cycle/elevation2.jpg",
    title: "Ajmeer",
  },
  {
    id: 5,
    category: "Residential",
    img: "/nisar/elevation3.jpg",
    title: "Nisar",
  },
];

// Background hero images
const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];
const placeholder = "/placeholder.jpg";

// Background image fallback with Next.js Image
const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="relative w-full h-full">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover opacity-50"
        onError={() => setImgSrc(placeholder)}
      />
    </div>
  );
};

// Animations
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-[#FDFCFB] text-[#3A3A3A] min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Header */}
      <section className="relative w-full h-[50vh] flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden bg-[#FFF8F0]">
        {/* Moving Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="flex w-[200%] h-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...images, ...images].map((src, i) => (
              <div key={i} className="relative flex-1 h-full">
                <ImageWithFallback src={src} alt={`bg-${i}`} />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Strong Text Overlay */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>

        {/* Foreground Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerParent}
          className="relative z-10 max-w-3xl px-6 md:px-12 flex flex-col justify-center items-center space-y-4"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#FFDAB9] drop-shadow-2xl"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[#FDFCFB]/90 max-w-2xl text-center text-lg md:text-xl drop-shadow-lg"
          >
            Explore before & after transformations, residential builds,
            commercial spaces, and stunning interiors.
          </motion.p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <div className="flex justify-center gap-3 mt-8 mb-10 flex-wrap">
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
      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              {/* Before/After */}
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer + WhatsApp */}
      <Footer />
      <WhatsappIcon />
    </main>
  );
};

export default GalleryPage;
