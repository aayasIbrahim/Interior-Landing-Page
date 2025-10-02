"use client";

import React from "react";
import { motion, Variants, Transition } from "framer-motion";

// Arc variants
const arcVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  pulse: {
    scale: [1, 1.02, 1],
    rotate: [0, 0.5, -0.5, 0],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

// Transition for staggered arc entrances
const singleArcTransition = (delay: number): Transition => ({
  duration: 1.2,
  ease: "easeOut",
  delay,
});

const UniqueDesignsSectionAnimated = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-x-6">
        {/* Main Title Section */}
        <h1 className="col-span-12 lg:col-span-8 mb-10 cfont-['Roxborough_CF'] font-bold text-[82px] leading-[116%] tracking-[0]">
          We will make <span className="font-extrabold">Unique</span> <br />
          <span className="font-extrabold">Designs</span> for you.
        </h1>

        {/* Graphic Section */}
        <motion.div
          className="col-span-12 bg-gray-200 aspect-[2/1] relative mb-10 overflow-hidden flex items-center justify-center mt-[100px]"
          initial="hidden"
          whileInView="visible"   // 👈 Trigger animation on scroll
          viewport={{ once: true, amount: 0.6 }} // 60% visible holey trigger hobe
        >
          <div className="relative w-3/5 h-4/5">
            {/* Top-left arc */}
            <motion.div
              className="absolute top-0 left-0 w-1/2 h-1/2 
                         border-b-8 border-r-8 border-white 
                         rounded-br-full transform translate-x-1/4 -translate-y-1/4"
              variants={arcVariants}
              transition={singleArcTransition(0.1)}
              whileHover={{ scale: 1.05, rotate: 1 }}
            />

            {/* Bottom-left arc */}
            <motion.div
              className="absolute bottom-0 left-0 w-1/2 h-1/2 
                         border-t-8 border-r-8 border-white 
                         rounded-tr-full transform translate-x-1/4 translate-y-1/4"
              variants={arcVariants}
              transition={singleArcTransition(0.4)}
              whileHover={{ scale: 1.05, rotate: -1 }}
            />

            {/* Top-right arc */}
            <motion.div
              className="absolute top-0 right-0 w-1/2 h-1/2 
                         border-b-8 border-l-8 border-white 
                         rounded-bl-full transform -translate-x-1/4 -translate-y-1/4"
              variants={arcVariants}
              transition={singleArcTransition(0.7)}
              whileHover={{ scale: 1.05, rotate: -1 }}
            />

            {/* Bottom-right arc */}
            <motion.div
              className="absolute bottom-0 right-0 w-1/2 h-1/2 
                         border-t-8 border-l-8 border-white 
                         rounded-tl-full transform -translate-x-1/4 translate-y-1/4"
              variants={arcVariants}
              transition={singleArcTransition(1.0)}
              whileHover={{ scale: 1.05, rotate: 1 }}
            />
          </div>
        </motion.div>

        {/* Description */}
        <p className="col-span-12 lg:col-span-8 font-['Visby_CF']  font-medium text-[20px] leading-[100%] tracking-[0]">
          We create designs in a collaborative environment enabling us to
          deliver the client&apos;s ultimate vision. Our designs are current,
          yet still possess a timeless style generating broad market appeal.
        </p>
      </div>
    </section>
  );
};

export default UniqueDesignsSectionAnimated;
 