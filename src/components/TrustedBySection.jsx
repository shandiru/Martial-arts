"use client";
import React from "react";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaSpotify } from "react-icons/fa";

export default function TrustedBySection() {
  return (
    <section className="bg-black text-gray-400 py-8">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
        {/* Title */}
        <h3 className="text-sm uppercase tracking-widest text-gray-500">
          Trusted by Top Companies
        </h3>

        {/* Icons Row */}
        <div className="flex flex-wrap items-center justify-center gap-10 text-3xl text-gray-400 opacity-80">
          <FaApple className="hover:text-white transition duration-300" />
          <FaGoogle className="hover:text-white transition duration-300" />
          <FaAmazon className="hover:text-white transition duration-300" />
          <FaMicrosoft className="hover:text-white transition duration-300" />
          <FaSpotify className="hover:text-white transition duration-300" />
        </div>

        {/* Optional Text */}
        <p className="text-xs text-gray-500 mt-4">And many more...</p>
      </div>
    </section>
  );
}
