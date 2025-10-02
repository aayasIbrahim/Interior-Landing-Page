import React from "react";
import Image from "next/image";

const CallToAction = () => {
  return (
    // Outer container: Softer background for a premium look.
    <div className="bg-yellow-300 relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Content Area */}
        <div className="relative z-10 max-w-lg lg:max-w-2xl text-center lg:text-left mb-10 lg:mb-0">
          {/* Headline: Deeper, richer text color and clearer structure */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#1C2333] leading-tight mb-6 tracking-tight">
            <span className="block">Interested in</span>
            <span className="block">Working with Us?</span>
          </h2>

          {/* Body Text: Improved line height for readability */}
          <p className="text-xl text-gray-700 leading-relaxed mb-12 lg:pr-12">
            Do you have a passion for creating beautiful and functional spaces?
            If you are interested in working with us, please visit our website
            and fill out the application form.
          </p>

          {/* Button and Link/Arrow Group */}
          <div className="flex items-center justify-center lg:justify-start space-x-6">
            <a
              href="#"
              // Updated Button: Stronger teal, hover effect, and shadow for pop.
              className="inline-flex items-center px-10 py-4 border border-transparent text-lg font-semibold rounded-lg shadow-xl text-white bg-[#00A79D] hover:bg-[#008A82] transition duration-300 transform hover:scale-105"
            >
              Explore
            </a>

            {/* The arrow is now part of a linked text for better context */}
            <a
              href="#"
              className="flex items-center text-gray-800 hover:text-[#00A79D] transition duration-300 group"
            >
              <span className="text-base font-medium mr-2">View Openings</span>
              {/* Simple Right Arrow Icon */}
              <svg
                className="h-5 w-5 text-gray-500 group-hover:text-[#00A79D] transition-all group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Background Shapes/Graphics - Simplified and modern look */}
        {/* Using a subtle, large circle element for visual interest */}
        <div className="hidden lg:block absolute right-0 top-0 w-3/5 h-full ">
          {/* Large, soft gray shape that sits behind the content */}
          <div className="absolute right-[-20%] top-[-20%] w-[1200px] h-[1200px] bg-gray-100 rounded-full transform translate-x-1/4">
            <Image src="/client.png" alt="client" width={500} height={500} className="mt-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
