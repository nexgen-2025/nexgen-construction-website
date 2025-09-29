"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Images array
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

// Placeholder image if any image fails to load
const placeholder = "/placeholder.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// Image component with fallback
const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={1920}
      height={1080}
      className="w-full h-full object-cover opacity-50"
      onError={() => setImgSrc(placeholder)}
    />
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center px-6 md:px-12 overflow-hidden bg-[#331417]">
      {/* Moving Background Image Wall */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex w-[200%] h-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="relative flex-1 h-full">
              <ImageWithFallback src={src} alt={`bg-${i}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Logo Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C191F]/30 via-[#401E23]/20 to-[#D5B594]/10 mix-blend-multiply"></div>

      {/* Foreground Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl items-center relative z-10 text-center md:text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerParent}
          className="flex flex-col justify-center space-y-6 bg-[#401E23]/60 p-8 rounded-xl"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-[#D5B594] drop-shadow-lg break-words"
          >
            Empower Your <span className="text-[#FFD700]">Dream Projects</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-2xl font-medium text-[#FDFCFB] max-w-md"
          >
            We provide complete architecture, interior, and civil solutions —
            from concept to completion.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeUp} className="mt-6">
            <button className="px-8 py-4 bg-gradient-to-r from-[#D5B594] to-[#3C191F] text-[#FDFCFB] font-semibold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg relative overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition duration-300 rounded-2xl"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
