"use client";
import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import Contact from "../components/Contact";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        toast.success("Your message has been sent 🎉");
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (error) {
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

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
