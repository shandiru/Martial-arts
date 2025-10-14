"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔹 Change background color on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-[0_2px_20px_rgba(225,145,47,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-wide">
          Lift<span className="text-[#E1912F]">line</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-[#E1912F] transition">
              About
            </a>
          </li>
          <li>
            <a href="#classes" className="hover:text-[#E1912F] transition">
              Classes
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-[#E1912F] transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="#locations" className="hover:text-[#E1912F] transition">
              Locations
            </a>
          </li>
        </ul>

        {/* Join Button (Desktop) */}
        <div className="hidden md:flex">
          <button className="bg-gradient-to-r from-[#E1912F] to-[#D57A20] text-black px-6 py-2 rounded-full font-semibold hover:shadow-[0_0_20px_#E1912F] hover:scale-105 transition-all duration-300">
            Join Today
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 absolute top-full left-0 w-full flex flex-col items-center gap-6 py-6 text-white font-medium transition-all duration-300">
          <a
            href="#about"
            onClick={toggleMenu}
            className="hover:text-[#E1912F] transition"
          >
            About
          </a>
          <a
            href="#classes"
            onClick={toggleMenu}
            className="hover:text-[#E1912F] transition"
          >
            Classes
          </a>
          <a
            href="#pricing"
            onClick={toggleMenu}
            className="hover:text-[#E1912F] transition"
          >
            Pricing
          </a>
          <a
            href="#locations"
            onClick={toggleMenu}
            className="hover:text-[#E1912F] transition"
          >
            Locations
          </a>

          <button
            onClick={toggleMenu}
            className="bg-gradient-to-r from-[#E1912F] to-[#D57A20] text-black px-6 py-2 rounded-full font-semibold hover:shadow-[0_0_20px_#E1912F] hover:scale-105 transition-all duration-300"
          >
            Join Today
          </button>
        </div>
      )}
    </nav>
  );
}
