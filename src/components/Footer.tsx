
"use client";
import React from "react";

// --- Types ---
interface FooterColumnProps {
  title: string;
  links: string[];
}

interface FooterData {
  title: string;
  links: string[];
}

// --- Footer Column Component ---
const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-bold text-gray-800 mb-6">{title}</h4>
    <ul className="space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-base"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Footer Component ---
const Footer: React.FC = () => {
  const footerData: FooterData[] = [
    {
      title: "Company",
      links: ["Career", "About Us", "Blog", "Feature", "Story"],
    },
    {
      title: "Design",
      links: ["2D Designer", "3D Designer", "Collabration", "Tools", "Important Link"],
    },
    {
      title: "Links",
      links: ["Projects", "Contact", "Send Email", "Fiveer", "upWork"],
    },
    {
      title: "Material",
      links: ["Company Profile", "Asset", "Location Map", "Estimate Cost", "Default Quotation"],
    },
  ];

  return (
    <footer className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">
          {/* Left Block: Logo and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-serif font-extrabold text-gray-900 mb-6">
              interiorfirm
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Interiorfirm is an acclaimed multidisciplinary studio specializing in
              interior architecture, interior design.
            </p>
          </div>

          {/* Navigation Columns */}
          {footerData.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; Copyright 2021 Interiorfirm — All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
