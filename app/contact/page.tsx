"use client";
import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
      <WhatsappIcon />
    </main>
  );
};

export default ContactPage;
