"use client";
import React from "react";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaSpotify,
} from "react-icons/fa";

export default function TrustedBySection() {
  return (
    <section className="bg-[#0B0B0B] text-gray-400 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 md:gap-16 text-gray-500 text-2xl opacity-80 flex-wrap">
        {/* Title */}
        <span className="text-[13px] uppercase tracking-[3px] text-gray-500">
          Trusted by Top Companies
        </span>

        {/* Icons */}
        <FaApple className="hover:text-white transition duration-300" />
        <FaGoogle className="hover:text-white transition duration-300" />
        <FaAmazon className="hover:text-white transition duration-300" />
        <FaMicrosoft className="hover:text-white transition duration-300" />
        <FaSpotify className="hover:text-white transition duration-300" />

        {/* Optional Text */}
        <span className="text-[12px] text-gray-600">and more...</span>
      </div>
    </section>
  );
}
