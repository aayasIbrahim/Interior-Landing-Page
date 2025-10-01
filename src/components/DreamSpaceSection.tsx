// components/DreamSpaceSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

// --- Types ---

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  showLine?: boolean;
}

// Motion variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const lineVariants: Variants = {
  hidden: { width: 0 },
  hover: {
    width: "5rem",
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// --- Feature Card component ---
const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
  showLine = false,
}) => {
  return (
    <motion.div
      className="flex flex-col items-start p-8 bg-teal-100 rounded-lg shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-lg"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
    >
      {imageSrc && (
        <div className="mb-6">
          <Image
            src={imageSrc}
            alt={title}
            width={115}
            height={104}
            className="object-contain"
          />
        </div>
      )}
      <h3 className="font-['Visby_CF'] font-semibold text-[32px] leading-[64px] tracking-[0px] mb-2">
        {title}
      </h3>
      <p className="text-gray-600 font-['Visby_CF'] font-medium text-[20px] leading-[30px] tracking-[1px] mb-3">
        {description}
      </p>

      {showLine && (
        <motion.div
          className="h-1 bg-teal-500 rounded-full mt-auto"
          variants={lineVariants}
          initial="hidden"
          whileHover="hover" // ← make sure parent motion.div has hover state
        />
      )}
    </motion.div>
  );
};

// --- Feature Type ---
interface Feature {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  showLine?: boolean;
}

// --- Main Section ---
const DreamSpaceSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      imageSrc: "/card/vector1-1.png",
      title: "Smooth workflow",
      description: "We deliver the final work with great professional way.",
      showLine: false,
    },
    {
      id: 2,
      imageSrc: "/card/vector1-2.png",
      title: "Professionalism",
      description: "We deliver the final work with great professional way.",
      showLine: true,
    },
    {
      id: 3,
      imageSrc: "/card/vector1-3.png",
      title: "Trusted platform",
      description: "We deliver the final work with great professional way.",
      showLine: false,
    },
  ];

  return (
    <section className="relative py-20 bg-teal-500 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#fcf5f4] opacity-70 rounded-bl-[200px] z-0"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Heading */}
        <h2 className="font-['Roxborough_CF'] font-bold text-[82px] leading-[116%] tracking-[0%] pt-[100px] pb-[100px]">
          Create your <br />
          Dream Space.
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map(({ id, imageSrc, title, description, showLine }) => (
            <FeatureCard
              key={id}
              imageSrc={imageSrc}
              title={title}
              description={description}
              showLine={showLine}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamSpaceSection;
