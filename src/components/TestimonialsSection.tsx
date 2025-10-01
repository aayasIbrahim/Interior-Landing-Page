"use client"
import React, { useState } from "react";

const testimonials = [
  {
    name: "Jordyn Dorwart",
    feedback:
      "Amazing fast and reliable customer support! The team is willing to go the extra mile for customer service!",
  },
  {
    name: "Alex Johnson",
    feedback:
      "The experience has been seamless. Beautiful design, easy to use, and excellent customer support.",
  },
  {
    name: "Sophia Martinez",
    feedback:
      "Truly impressed! They delivered more than I expected. Highly recommend their services.",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-6xl md:text-7xl font-serif font-extrabold text-gray-900 leading-tight max-w-lg">
            Our Customers <br />
            Feedback.
          </h2>
          <span className="text-[12rem] font-serif font-bold text-gray-100 leading-none -mt-10 hidden md:block select-none">
            ’’
          </span>
        </div>

        {/* Testimonial Card */}
        <div className="relative flex flex-col md:flex-row items-stretch bg-white rounded-lg overflow-hidden shadow-xl md:shadow-none">
          {/* Left Image/Profile Placeholder */}
          <div className="relative w-full md:w-1/3 min-h-[300px] bg-[#f0f0f0] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#f0f0f0]">
              <div className="absolute -bottom-1/2 -left-1/2 w-full h-[150%] bg-white rounded-tl-[50%]"></div>
            </div>
            {/* Put image later */}
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3 p-10 md:p-16 flex flex-col justify-center bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {testimonials[activeIndex].name}
            </h3>

            <blockquote className="text-3xl font-serif italic text-gray-800 leading-relaxed mb-8">
              "{testimonials[activeIndex].feedback}"
            </blockquote>

            <p className="text-xl font-medium text-gray-500 mb-8">
              {testimonials[activeIndex].name}
            </p>

            {/* Navigation Dots (Best Practice Version) */}
            <div className="flex space-x-3 justify-end md:justify-start">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                  onClick={() => setActiveIndex(index)}
                  className={`w-8 h-1 rounded-full transition-all duration-300 focus:outline-none ${
                    index === activeIndex
                      ? "bg-teal-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
