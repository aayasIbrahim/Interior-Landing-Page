"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Utility: ArrowLink Component ---
interface ArrowLinkProps {
  href: string;
  text: string;
  className?: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ href, text, className = "" }) => (
  <motion.a
    href={href}
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`group flex items-center text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-700 transition-all duration-300 px-6 py-2 rounded-md font-medium ${className}`}
  >
    <span className="mr-2">{text}</span>
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </motion.a>
);

// --- Main Component ---
const DesignIntroSection: React.FC = () => {
  const COLORS = {
    sand: "#FCE5C2",
    teal: "#2c757a",
    darkText: "#1C2333",
    lightGray: "#F3F3F3",
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        
        {/* --- Headline --- */}
        <motion.div
          className="relative z-10 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // animate only once, when 30% visible
        >
          <h1 className="font-roxborough font-bold text-[82px] leading-[1.16] tracking-normal text-right">
            Providing Innovative <br className="sm:hidden" />
            <span className="text-teal-600">Interior Design</span>.
          </h1>
        </motion.div>

        {/* --- Grid Content --- */}
        <div className="grid lg:grid-cols-2 gap-12 relative z-20 pt-10">
          
          {/* Left Column: Image/Shapes */}
          <div className="relative h-96 lg:h-auto min-h-[400px]">
            
            {/* Background Rectangle */}
            <motion.div
              className="absolute w-[85%] h-[75%] rounded-xl shadow-xl rotate-1"
              style={{ top: "0", left: "0", backgroundColor: COLORS.lightGray }}
              initial={{ opacity: 0, x: -80, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="p-8 text-xl font-bold text-gray-500">Project Showcase 1</div>
            </motion.div>

            {/* Foreground Rectangle */}
            <motion.div
              className="absolute w-[70%] h-[70%] rounded-xl shadow-2xl border-4 border-white -rotate-1"
              style={{ top: "20%", left: "25%", backgroundColor: COLORS.lightGray }}
              initial={{ opacity: 0, x: 80, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="p-8">
                <p className="text-xl font-bold text-gray-700">Detailed View</p>
              </div>
            </motion.div>

            {/* Bottom-right Circle Accent */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: "600px",
                height: "600px",
                background: `radial-gradient(circle, ${COLORS.sand} 0%, ${COLORS.sand}aa 80%)`,
                right: "-40%",
                bottom: "-40%",
                zIndex: 1,
                opacity: 0.8,
              }}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Right Column: Text + CTA */}
          <motion.div
            className="flex flex-col justify-end z-[1999999]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="p-8 sm:p-12 rounded-lg relative shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{ backgroundColor: COLORS.sand }}
            >
              <p className="text-base text-gray-800 leading-relaxed mb-8 font-sans">
                Since 1999, we have been providing great flooring solutions and exceptional customer service 
                for homeowners and commercial clients. Among flooring materials, none is more 
                elegant and luxurious than natural stone.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <motion.a
                  href="#"
                  style={{ backgroundColor: COLORS.teal }}
                  className="inline-flex items-center px-8 py-3 text-base font-medium rounded-md shadow-lg text-white hover:bg-[#245f62] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  About Us
                </motion.a>

                <ArrowLink href="#" text="View Our Portfolio" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignIntroSection;
