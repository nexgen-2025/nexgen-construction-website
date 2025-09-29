"use client";
import React, { useState } from "react";
import Services from "../components/Services";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

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

// ✅ Fixed: Using next/image instead of <img>
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

const ServicesPage = () => {
  return (
    <main className="bg-[#FFF8F0] text-[#3A3A3A] overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
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

        {/* Strong Overlay */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>

        {/* Foreground Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerParent}
          className="relative z-10 max-w-3xl px-6 md:px-12 flex flex-col justify-center items-center space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold text-[#FFDAB9] drop-shadow-2xl"
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[#FDFCFB]/90 text-lg md:text-xl leading-relaxed text-center drop-shadow-lg"
          >
            We provide complete construction and architectural solutions from
            concept to completion. Explore our premium services designed to make
            your projects exceptional.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Footer */}
      <Footer />
      <WhatsappIcon />
    </main>
  );
};

export default ServicesPage;
