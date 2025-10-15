"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1920&auto=format&fit=crop"
        alt="Gym background"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.35]"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col justify-center">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-0">
          {/* Left Text - already lowered */}
          <div className="text-white max-w-md md:pt-28 pt-12">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Liftline — a space built for serious training, real transformation, and a community
              that pushes each other to rise higher every single day.
            </p>

            {/* Members */}
           {/* Members (exact pill style) */}
<div className="relative inline-flex items-center rounded-full bg-neutral-900/70 backdrop-blur-sm px-3 py-2 border border-white/15 shadow-[0_6px_18px_rgba(0,0,0,.45)] overflow-hidden">
  {/* glossy top highlight */}
  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />

  {/* Avatars */}
  <div className="flex items-center pl-0.5">
    <img
      src="https://randomuser.me/api/portraits/women/65.jpg"
      alt="Member 1"
      className="w-8 h-8 rounded-full ring-2 ring-white shadow-[0_0_6px_rgba(0,0,0,.35)]"
    />
    <img
      src="https://randomuser.me/api/portraits/men/75.jpg"
      alt="Member 2"
      className="w-8 h-8 rounded-full ring-2 ring-white -ml-3 shadow-[0_0_6px_rgba(0,0,0,.35)]"
    />
  </div>

  {/* Text + Stars */}
  <div className="ml-2 leading-none">
    <div className="text-[13px] text-gray-100 font-medium">
      <span className="text-white font-semibold">2k+</span> Members
    </div>
    <div className="mt-1 flex gap-0.5 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
          <path d="M12 2l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.1 1.11-6.47-4.7-4.58 6.49-.94L12 2z" />
        </svg>
      ))}
    </div>
  </div>
</div>

          </div>

          {/* Right Heading (unchanged) */}
          <div className="text-right">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05] text-white mb-10 md:mb-14">
              UNLEASH YOUR <br />
              POTENTIAL
            </h1>
          </div>
        </div>

        {/* Bottom Row — moved slightly up */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-[-1rem] md:mt-[-2rem]">
          <div></div>
          <div className="flex items-center gap-4 md:pr-10">
            <p className="text-gray-400 text-sm md:text-base">
              <span className="text-[#E1912F]">*</span> First week free — no strings attached.
            </p>
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#E1912F] hover:text-black transition-all duration-300">
              Start Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
