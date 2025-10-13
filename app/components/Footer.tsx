"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-[#331417] text-[#D5B594] pt-16 pb-8 px-6 md:px-12 overflow-hidden">
      {/* Gradient overlay for vibe */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C191F]/40 via-transparent to-[#401E23]/30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <Image
            src="/logo-bg.jpg" // Replace with your logo path
            alt="NexGen Logo"
            width={150} // Adjust width
            height={50} // Adjust height
            className="object-contain"
          />
          <p className="mt-4 text-sm text-[#FDFCFB]/80 leading-relaxed max-w-sm">
            Empowering businesses with innovative design, architecture, and
            digital solutions that turn your dream projects into reality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-[#FDFCFB]/90">
            <li className="hover:text-[#FFD700] transition">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#FFD700] transition">
              <a href="#">About Us</a>
            </li>
            <li className="hover:text-[#FFD700] transition">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-[#FFD700] transition">
              <a href="#">Projects</a>
            </li>
            <li className="hover:text-[#FFD700] transition">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
            Our Services
          </h3>
          <ul className="space-y-3 text-[#FDFCFB]/90">
            <li className="hover:text-[#FFD700] transition">
              <a href="#">Architecture Design</a>
            </li>
            <li className="hover:text-[#FFD700] transition">
              <a href="#">Interior Solutions</a>
            </li>
            <li className="hover:text-[#FFD700] transition">
              <a href="#">Civil Engineering</a>
            </li>
            <li className="hover:text-[#FFD700] transition">
              <a href="#">Digital Branding</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
            Stay Updated
          </h3>
          <p className="text-sm text-[#FDFCFB]/80 mb-4">
            Subscribe to our newsletter to get the latest updates, insights, and
            offers.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-xl bg-[#401E23]/70 border border-[#D5B594]/30 text-[#FDFCFB] placeholder-[#D5B594]/60 focus:outline-none focus:ring-2 focus:ring-[#D5B594]"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-gradient-to-r from-[#D5B594] to-[#3C191F] text-[#FDFCFB] rounded-xl font-medium shadow-lg hover:scale-105 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        className="my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-[#D5B594]/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#FDFCFB]/70">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#D5B594]">Nexgen</span>. All
          rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#FFD700] transition">
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/nexgen_constructions_devlopers/"
            className="hover:text-[#FFD700] transition"
          >
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-[#FFD700] transition">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-[#FFD700] transition">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
