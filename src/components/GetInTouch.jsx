"use client";
import React from "react";

export default function GetInTouch() {
  return (
    <section className="relative bg-[#000000] text-[#f3f2f0] py-24 px-6 md:px-12 overflow-hidden">
      {/* Subtle Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#0c0c0c] to-[#000000] opacity-95"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#E1912F]/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Gym training area with fitness equipment"
              className="w-full max-w-[480px] h-[300px] md:h-[360px] object-cover rounded-xl border border-[#2b2b2b] shadow-[0_0_40px_rgba(225,145,47,0.25)] transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            GET IN{" "}
            <span className="bg-gradient-to-r from-[#E1912F] to-[#D57A20] bg-clip-text text-transparent">
              TOUCH
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
            Have questions or ready to start your transformation? <br />
            Reach out to our team — let’s build your next fitness journey together.
          </p>

          {/* Call to Action Button */}
          <button className="relative inline-flex items-center justify-center mt-2 px-8 py-3 font-semibold rounded-full text-black text-base overflow-hidden transition-all duration-500 bg-gradient-to-r from-[#E1912F] to-[#D57A20] hover:shadow-[0_0_25px_#E1912F] hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
