// components/ModernInteriorDesign.jsx
"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section className="min-h-screen mt-5 bg-white font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative container mx-auto lg:pb-64">
        {/* Background Images */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute left-0 top-10 z-0"
        >
          <Image
            src="/yellow.png"
            alt="Yellow background shape"
            width={960}
            height={804}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute right-0 top-40 z-0"
        >
          <Image
            src="/gray.png"
            alt="Gray background shape"
            width={780}
            height={600}
          />
        </motion.div>

        {/* Background Text Shape */}
        <motion.span
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-10 -right-16 rotate-90 text-7xl font-bold text-black/10 whitespace-nowrap hidden md:block"
        >
          Modern Interior
        </motion.span>

        {/* Content Wrapper */}
        <div className="relative ps-[130px] pe-[577px] z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="pt-[136px] font-['Roxborough_CF'] font-bold text-[102px] leading-[113%] tracking-[-0.02em]"
          >
            Modern Interior Design Service
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-['Visby_CF'] font-medium text-[20px] leading-[34px] mt-10 pe-[290px]"
          >
            Interiorfirm is an acclaimed multidisciplinary studio specializing
            in interior architecture, interior design and decor that redefines
            laid-back luxury.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-[90px] flex items-center px-6 py-3 bg-[#28887A] text-white text-lg font-medium rounded-md shadow-lg hover:bg-[#34495e] transition duration-300"
              aria-label="Explore Interior Services"
            >
              Explore Now
              <ArrowRight className="w-5 h-5 ml-2 z-[222222222]" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-[150px] grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        {/* Left Column - Image Gallery */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-col items-center lg:items-start space-y-6"
        >
          <div className="flex space-x-[60px]">
            <motion.div whileHover={{ scale: 1.05 }} className="ms-[60px]">
              <Image
                src="/unsplash_pdZ2BwpLyis.png"
                alt="Interior showcase image 1"
                width={240}
                height={438}
                className="z-1"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-[87px]">
              <Image
                src="/unsplash_7pCFUybP_P8.png"
                alt="Interior showcase image 2"
                width={240}
                height={438}
                className=""
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex justify-center mt-[100px] ms-[500px] space-x-12 lg:space-x-20"
        >
          <motion.div
            whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <div className="font-['Visby_CF'] font-bold text-[94px] leading-[124px] tracking-[-1px]">24</div>
            <div className="font-['Visby_CF'] font-medium text-[24px] leading-[32px] tracking-[1px]">
              Years of experience
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="font-['Visby_CF'] font-bold text-[94px] leading-[124px] tracking-[-1px]">162</div>
            <div className="font-['Visby_CF'] font-medium text-[24px] leading-[32px] tracking-[1px]">
              Projects completed
            </div>
          </motion.div>
        </motion.div>
        <br />
        {/* Right Column (Logo + Lamp + Newsletter stacked) */}
        <div className="flex">
          {/* Logo & Lamp */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="flex items-center space-x-12"
          >
            <motion.div
              whileHover={{ rotate: 5 }}
              className="relative border-2 border-gray-300 rounded-full p-2 flex items-center justify-center bg-white shadow-md"
            >
              <Image
                src="/herologo.png"
                alt="Interior firm logo"
                width={132}
                height={200}
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="w-[200px] h-[200px] flex items-center justify-center  "
            >
              <Image
                src="/lamp.png"
                alt="Decorative lamp"
                width={200}
                height={200}
              />
            </motion.div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
            className="ms-[600px] "
          >
            <h2 className=" text-[#2c3e50] mb-6 font-['Roxborough_CF'] font-bold text-[42px] leading-[46px] tracking-[-0.02em] text-center ">
              Make your dream home.
            </h2>
            <form className="flex ">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your email address"
                className=" px-4 py-3 border border-gray-300 rounded-md focus:ring-[#5ab1bb] focus:border-[#5ab1bb] outline-none"
                required
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              
                className=" flex justify-center items-center "
              >
               <a href="" className="bg-[#28887A] font-medium rounded-md shadow-lg hover:bg-[#34495e] transition duration-300 text-white px-[35px] py-[16px] font-['Visby_CF'] font-semibold text-[15px] leading-[20px] tracking-[0] text-center">
                     Let talk
               </a>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
