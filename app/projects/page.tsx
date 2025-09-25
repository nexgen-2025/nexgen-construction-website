"use client";
import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import Projects from "../components/Projects";
import { motion, Variants } from "framer-motion";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
  "/hero8.jpg",
  "/hero9.jpg",
];

const placeholder = "/placeholder.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-cover opacity-50"
      onError={() => setImgSrc(placeholder)}
    />
  );
};

const page = () => {
  return (
    <main className="bg-[#FDFCFB] text-[#3A3A3A] min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Header for Projects */}
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
                <div className="absolute inset-0 bg-black/20"></div>{" "}
                {/* dim images */}
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
            Our Projects
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[#FDFCFB]/90 max-w-2xl text-center text-lg md:text-xl drop-shadow-lg"
          >
            Explore some of our recent works in residential, commercial, and
            luxury spaces. Each project reflects our attention to detail,
            design, and quality.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <Footer />
      <WhatsappIcon />
    </main>
  );
};

export default page;
