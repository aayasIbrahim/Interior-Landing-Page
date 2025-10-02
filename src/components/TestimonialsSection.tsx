"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        
        {/* Header with fade-in */}
        <motion.div
          className="flex justify-between items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-6xl md:text-7xl font-serif font-extrabold text-gray-900 leading-tight max-w-lg">
            Our Customers <br />
            Feedback.
          </h2>
          <Image src="/Vector.png" alt="vector" width={224} height={190} />
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          className="relative flex flex-col md:flex-row items-stretch bg-white rounded-lg overflow-hidden shadow-xl md:shadow-none mt-[100px]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Image */}
          <div className="relative w-full flex items-center justify-center">
            <Image src="/client.png" alt="client" width={265} height={400} />
          </div>

          {/* Right Content with AnimatePresence */}
          <div className="w-full md:w-2/3 p-10 md:p-16 flex flex-col justify-center bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex} // important for AnimatePresence
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {testimonials[activeIndex].name}
                </h3>

                <blockquote className="text-3xl font-serif italic text-gray-800 leading-relaxed mb-8">
                  {testimonials[activeIndex].feedback}
                </blockquote>

                <p className="text-xl font-medium text-gray-500 mb-8">
                  {testimonials[activeIndex].name}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex space-x-3 justify-end md:justify-start">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-8 h-1 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    index === activeIndex
                      ? "bg-teal-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
