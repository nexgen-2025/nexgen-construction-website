"use client";
import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
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
    } catch {
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 relative z-50">
      {/* Toast */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#c0a060] uppercase tracking-widest">
            Let’s Build Together
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-[#f8f8f8] drop-shadow-[0_0_10px_rgba(192,160,96,0.3)]">
            Contact Nexgen
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1e293b] rounded-xl p-8 shadow-lg shadow-[0_0_15px_rgba(192,160,96,0.25)]">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value="a3653936-b6a6-479e-8456-2e30a5458c49"
              />

              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded-md bg-[#0f172a] border border-[#c0a060] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c0a060]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-md bg-[#0f172a] border border-[#c0a060] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c0a060]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full p-3 rounded-md bg-[#0f172a] border border-[#c0a060] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c0a060]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full p-3 rounded-md bg-[#0f172a] border border-[#c0a060] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c0a060]"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#c0a060] to-[#ffd700] text-black font-bold rounded-md hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 space-y-4 text-gray-300">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#c0a060]" /> +91 63848 77853
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#c0a060]" />{" "}
                nexgenconstructionsmk@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#c0a060]" /> Nexgen #1/134/6,
                Rayakottai Road GPS Tower,(Opp. Balaji Bhawan) Krishanagiri
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg shadow-[0_0_15px_rgba(192,160,96,0.25)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.74373883848!2d78.21146507483355!3d12.533128287743445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3500187ae53b%3A0x3315ad96e6cf43fe!2sBengaluru!5e0!3m2!1sen!2sin!4v1755332298504!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="w-full min-h-[400px] border-0"
              loading="lazy"
              title="Nexgen Location Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
