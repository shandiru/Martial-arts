"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3"
        alt="Gym background"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.35] scale-105 transition-transform duration-[5000ms] ease-out"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95"></div>

      {/* Glow Accent */}
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#E1912F]/20 blur-[120px] rounded-full"></div>
      <div className="absolute top-20 -left-20 w-[300px] h-[300px] bg-[#D57A20]/15 blur-[100px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]">
          UNLEASH YOUR <br />
          <span className="bg-gradient-to-r from-[#E1912F] to-[#D57A20] bg-clip-text text-transparent">
            POTENTIAL
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mb-10 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Liftline — a space built for serious training, real transformation, and a community
          that pushes each other to rise higher every single day.
        </p>

        {/* Members + Button Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Members */}
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Member 1"
              className="w-10 h-10 rounded-full border-2 border-[#E1912F] shadow-[0_0_10px_#E1912F]"
            />
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Member 2"
              className="w-10 h-10 rounded-full border-2 border-[#E1912F] -ml-4 shadow-[0_0_10px_#E1912F]"
            />
            <span className="ml-3 text-sm md:text-base text-gray-300 font-medium">
              <span className="text-[#E1912F] font-semibold">2k+</span> Members{" "}
              <span className="text-[#E1912F]">★★★★★</span>
            </span>
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[#E1912F] to-[#D57A20] hover:shadow-[0_0_25px_#E1912F] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Start Explore
          </button>
        </div>

        {/* Note */}
        <p className="text-gray-400 text-sm mt-6">
          <span className="text-[#E1912F]">*</span> First week free — no strings attached.
        </p>
      </div>
    </section>
  );
}
