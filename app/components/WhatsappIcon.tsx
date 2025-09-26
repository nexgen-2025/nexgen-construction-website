"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/916384877853"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      style={{
        animation: "bounce 1.5s infinite",
      }}
    >
      <FaWhatsapp size={30} />
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsappIcon;
