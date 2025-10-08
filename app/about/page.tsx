"use client";
import React, { useState } from "react";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import WhatsappIcon from "../components/WhatsappIcon";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Motion-enabled Next.js Image
const MotionImage = motion(Image);

// Hero background images
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

// Motion variants
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
      width={1200}
      height={800}
      className="w-full h-full object-cover opacity-50"
      onError={() => setImgSrc(placeholder)}
    />
  );
};

const Page = () => {
  return (
    <main className="bg-[#FDFCFB] text-[#3A3A3A] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden bg-[#FFF8F0]">
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

        {/* Strong Overlay */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>

        {/* Floating Blurred Circles */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-[#D5B594]/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-36 h-36 bg-[#FFDAB9]/20 rounded-full blur-2xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Foreground Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerParent}
          className="relative z-10 max-w-3xl flex flex-col justify-center items-center space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold text-[#FFDAB9] drop-shadow-2xl leading-tight"
          >
            About Us
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[#FDFCFB]/90 text-lg md:text-xl mt-4 leading-relaxed drop-shadow-lg max-w-2xl text-center"
          >
            At our core, we design spaces that inspire and function perfectly.
            From residential homes to commercial buildings, every project
            reflects our commitment to creativity, quality, and sustainability.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 -mt-24 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <MotionImage
            src="/hero3.jpg"
            alt="Our Story"
            width={600}
            height={400}
            className="w-full rounded-3xl shadow-lg object-cover border border-[#D5B594]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-extrabold text-[#D5B594]">
              Our Story
            </h2>
            <p className="text-[#7A7A7A] leading-relaxed">
              Founded with a passion for creating elegant, functional spaces.
              Our architects, engineers, and designers transform ideas into
              reality with attention to every detail.
            </p>
            <p className="text-[#7A7A7A] leading-relaxed">
              We focus on creativity, precision, and sustainability, ensuring
              every project reflects our dedication to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-10 rounded-3xl bg-[#FFDAB9]/40 shadow hover:shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-3xl font-bold text-[#D5B594] mb-4">
              Our Mission
            </h3>
            <p className="text-[#7A7A7A] leading-relaxed">
              To provide comprehensive, end-to-end construction solutions,
              transforming every project from concept to completion with
              excellence in design, interior, exterior, and structural
              execution, ensuring quality, functionality, and client
              satisfaction at every step.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-10 rounded-3xl bg-[#FFDAB9]/30 shadow hover:shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-3xl font-bold text-[#D5B594] mb-4">
              Our Vision
            </h3>
            <p className="text-[#7A7A7A] leading-relaxed">
              To be recognized as a leading turnkey construction and design
              firm, delivering modern, innovative, and complete architectural,
              interior, and exterior solutions that exceed client expectations
              and set new standards in the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-[#D5B594] mb-12 text-center"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Asief", role: "CEO", img: "/hero1.jpg" },
            { name: "Kaif", role: "Architect", img: "/hero2.jpg" },
            { name: "Aadil", role: "Lead Designer", img: "/hero4.jpg" },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-[#FFF8F0] p-6 rounded-3xl shadow hover:shadow-lg text-center transition-transform hover:scale-105"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-[#D5B594]"
              />
              <h4 className="text-xl font-bold text-[#D5B594]">
                {member.name}
              </h4>
              <p className="text-[#7A7A7A]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services & Projects */}
      <Services />
      <Projects />

      {/* Footer */}
      <Footer />
      <WhatsappIcon />
    </main>
  );
};

export default Page;
