import React from "react";
import acmLogo from "../assets/acmLogo.png";
import lakshyaLogo from "../assets/lakshyaLogo.jpeg";
import iruLogo from "../assets/iruLogo.jpeg";

const experiences = [
  {
    logo: acmLogo,
    org: "ACM YCCE",
    role: "Secretary",
    duration: "July 2025 - Present",
  },
  {
    logo: lakshyaLogo,
    org: "Lakshya YCCE",
    role: "Curation Team",
    duration: "July 2024 - Feb 2025",
  },
  {
    logo: iruLogo,
    org: "IRU YCCE",
    role: "Curation Team",
    duration: "Oct 2023 - Jan 2024",
  },
];

const ExtraCurricular = () => {
  return (
    <section className="text-white py-16 px-6">
      <h2 className="my-20 text-center text-4xl">Extra Curricular</h2>

      <div className="w-full flex justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-16 max-w-6xl w-full">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-2xl 
                         transition-all duration-300
                         bg-transparent hover:bg-gradient-to-br from-[#3c3a3a] to-[#2d2d2d]
                         hover:shadow-lg"
            >
              <img
                src={item.logo}
                alt={item.org}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-cyan-400 text-lg font-semibold">{item.org}</h3>
                <p className="text-white font-medium">{item.role}</p>
                <p className="text-gray-400 italic text-sm">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ExtraCurricular