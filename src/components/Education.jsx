import React, { useRef, useEffect, useState } from "react";
import universityLogo from "../assets/universityLogo.jpeg";
import collegeLogo from "../assets/collegeLogo.jpeg";
import schoolLogo from "../assets/schoolLogo.jpeg";

const education = [
  {
    title: "Bachelor’s Degree",
    subtitle: "YCCE, Nagpur",
    year: "2022 - 2026",
    icon: universityLogo,
    cgpa: "8.23 CGPA",
  },
  {
    title: "Higher Secondary",
    subtitle: "BKV Junior College",
    year: "2020 - 2022",
    icon: collegeLogo,
    cgpa: "88.33%",
  },
  {
    title: "Secondary School",
    subtitle: "ABC School",
    year: "2010 - 2020",
    icon: schoolLogo,
    cgpa: "91.20%",
  },
];

const Education = () => {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".timeline-item");
      if (items.length > 1) {
        const first = items[0].getBoundingClientRect().top;
        const last = items[items.length - 1].getBoundingClientRect().top;
        setLineHeight(last - first);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-semibold text-white mb-16 text-center">Education</h2>

      <div className="relative flex flex-col items-center" ref={containerRef}>
        {/* Timeline Vertical Line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-500 to-purple-600 z-0"
          style={{ top: "60px", height: `${lineHeight}px` }}
        />

        {education.map((item, index) => (
          <div key={index} className="timeline-item relative z-10 mb-28 flex items-center flex-col">
            
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-pink-500 animate-spin-slow">
              <img src={item.icon} alt={item.title} className="w-14 h-14 object-contain" />
            </div>

            {/* Card */}
            <div className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-xl rounded-xl mt-4 p-6 w-[260px] md:w-[280px] text-center">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.subtitle}</p>
              <p className="text-xs text-gray-400 mt-1">{item.year}</p>
              <p className="text-sm text-pink-400 font-medium mt-2">{item.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
