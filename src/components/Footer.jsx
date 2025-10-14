"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Lifttline
            </h2>
            <span className="text-[#E1912F] text-lg font-semibold">
              Fitness
            </span>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wide">
            <li>
              <a
                href="#about"
                className="hover:text-[#E1912F] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#classes"
                className="hover:text-[#E1912F] transition-colors"
              >
                Classes
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-[#E1912F] transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#locations"
                className="hover:text-[#E1912F] transition-colors"
              >
                Locations
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#E1912F] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1a1a1a] my-6"></div>

       
      </div>
    </footer>
  );
}
