"use client";
import React, { useState } from "react";
import { LayoutGrid, GripVertical } from "lucide-react";

const images = [
  "/images/project-hero1.png",
  "/images/project-hero2.png",
  "/images/project-hero3.png",
  "/images/project-hero4.png",
];

const AmazingProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-6xl md:text-7xl font-serif font-extrabold text-gray-800 mb-20 text-center leading-tight">
          Amazing Projects from <br />
          Talented Interior Architects!
        </h2>
      </div>

      {/* Project Display Area */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[500px] md:h-[600px] bg-gray-200 rounded-lg shadow-xl overflow-hidden flex items-center justify-center">
        {/* Project Image */}
        <div
          className="w-full h-full bg-cover bg-center rounded-lg transition-all duration-500"
          style={{ backgroundImage: `url('${images[currentIndex]}')` }}
        ></div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(index)}
              className={`w-2 h-10 rounded-full cursor-pointer transition-colors ${
                currentIndex === index ? "bg-teal-500" : "bg-gray-400 hover:bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom Description Section */}
      <div className="relative mt-20 pt-20 pb-16 bg-[#FFE08A] rounded-tr-[200px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="w-full md:w-2/3 mb-10 md:mb-0 pr-0 md:pr-12 lg:pr-20">
            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6 flex items-center">
              Modern Style.
              <span className="ml-6 px-4 py-2 bg-blue-600 text-white text-lg font-mono rounded-md shadow-md flex items-center space-x-2">
                <LayoutGrid className="w-5 h-5" /> <span>1440</span>
                <GripVertical className="w-5 h-5" /> <span>580</span>
              </span>
            </h3>
            <p className="text-gray-800 leading-relaxed max-w-lg">
              The modernist movement began to take shape when it shifted away from traditional construction and design 
              elements such as wood, stone, and brick and toward industrial materials like glass, steel, and concrete.
            </p>
          </div>

          {/* Right Button */}
          <div className="w-full md:w-1/3 flex justify-start md:justify-end">
            <button className="px-8 py-4 bg-[#28887A] text-white text-lg font-medium rounded-md shadow-lg hover:bg-gray-700 transition duration-300">
              Explore →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazingProjectsSection;
