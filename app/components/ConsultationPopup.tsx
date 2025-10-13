"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

interface ConsultationPopupProps {
  showPopup: boolean;
  onClose: () => void;
}

interface Web3FormResponse {
  success: boolean;
  message?: string;
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({
  showPopup,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);

  if (!showPopup) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // keep form reference
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const toastId = toast.loading("Sending...");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          subject: "New Consultation Form Submission",
          form_name: "Consultation Form",
        }),
      });

      let result: Web3FormResponse = { success: false };

      // Try parsing JSON safely
      try {
        result = (await res.json()) as Web3FormResponse;
      } catch {
        // ignore parse errors
      }

      if (result.success) {
        toast.success(result.message || "Message sent successfully!", {
          id: toastId,
        });
        form.reset();
        setTimeout(onClose, 1400);
      } else {
        toast.error(result.message || "Failed to send message", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80 backdrop-blur-sm"></div>

      <div
        className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center animate-fadeIn z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
          aria-label="Close consultation popup"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🎉 Get a Free Consultation
        </h2>
        <p className="text-gray-600 mb-6">
          Let us help you grow your business with expert solutions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <input
            type="hidden"
            name="access_key"
            value="a3653936-b6a6-479e-8456-2e30a5458c49"
          />

          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={loading}
              className="peer w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-black"
              placeholder="Your Name"
              aria-label="Your name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled={loading}
              className="peer w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-black"
              placeholder="Your Email"
              aria-label="Your email"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Get Free Consultation"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPopup;
