import React from "react";

const About = () => {
  const stats = [
    { number: "30+", label: "Satisfied Customers" },
    { number: "5k+", label: "Award Winning" },
    { number: "07+", label: "Years of Experience" },
    { number: "33+", label: "Projects Delivered" },
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
          <img
            src="/hero2.jpg" // Replace with your image
            alt="Modern Building"
            className="rounded-xl shadow-lg w-full h-48 object-cover"
          />
          <img
            src="/hero3.jpg" // Replace with your image
            alt="Happy Family"
            className="rounded-xl shadow-lg w-full h-48 object-cover"
          />
          <img
            src="/hero1.jpg" // Replace with your image
            alt="Construction Work"
            className="rounded-xl shadow-lg w-full h-48 object-cover col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
