import React from "react";
import Image from "next/image";

const About = () => {
  const stats = [
    { number: "70+", label: "Satisfied Customers" },
    { number: "10+", label: "Ongoing Projects" },
    { number: "30+", label: "Years of Experience" },
    { number: "70+", label: "Projects Delivered" },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Stats */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B1A1E] mb-8">
            Your Trusted Construction Advisors
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-md p-6 text-center transition hover:scale-105 ${
                  index === 1
                    ? "bg-[#3B1A1E] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-2xl md:text-3xl font-extrabold mb-1">
                  {item.number}
                </p>
                <p className="text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/hero2.jpg"
            alt="Modern Building"
            width={400}
            height={200}
            className="rounded-xl shadow-lg w-full h-48 object-cover"
          />
          <Image
            src="/hero3.jpg"
            alt="Happy Family"
            width={400}
            height={200}
            className="rounded-xl shadow-lg w-full h-48 object-cover"
          />
          <Image
            src="/hero1.jpg"
            alt="Construction Work"
            width={800}
            height={400}
            className="rounded-xl shadow-lg w-full h-48 object-cover col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
