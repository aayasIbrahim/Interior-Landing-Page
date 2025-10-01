"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Feedbacks", href: "/feedbacks" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-12 py-4 flex justify-between items-center">
        {/* Left - Logo */}
        <Image src="/logo.png" alt="logo" height={17.81} width={125} />

        {/* Middle - Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-4">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group py-2 px-3  hover:text-gray-900 transition font-[VisbyCF]  font-medium text-[18px] leading-[20px] tracking-[0px]"
            >
              {link.name}
              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        {/* Right - Contact button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-[26px] py-[16px] font-['Visby_CF'] font-semibold text-[15px] leading-[20px] tracking-[0] text-center  bg-[#28887A] text-white hover:bg-gray-700 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
              
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-6">
            {LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 text-lg hover:text-gray-900 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;










