"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-[#000000] text-white py-20 px-6 md:px-16 font-inter">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative group overflow-hidden rounded-xl shadow-[0_0_20px_#D57A20]">
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2070&auto=format&fit=crop"
            alt="Fitness training"
            className="rounded-xl w-full object-cover h-[420px] md:h-[520px] transform group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="absolute bottom-5 left-5">
            <span className="bg-gradient-to-r from-[#E29C45] to-[#D57A20] text-white text-sm px-4 py-1 rounded-full shadow-md">
              Since 2009
            </span>
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <p className="text-sm tracking-[4px] uppercase text-[#E29C45]">
            Our Story
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Our Fitness Evolution
          </h2>

          <p className="text-gray-300 leading-relaxed">
            At <span className="text-[#E29C45] font-semibold">Musclen</span>, our journey began
            with a simple vision — to create a space where people of all fitness levels could
            come together to transform their lives through strength, community, and motivation.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Founded in 2009, we’ve grown from a small local gym into a thriving fitness hub,
            dedicated to helping individuals achieve their personal wellness goals. Every rep
            and every story fuels our passion to make fitness a lifestyle.
          </p>

          <div>
            <p className="font-semibold text-gray-400 text-sm">Founder of Musclen</p>
            <p className="font-bold text-white text-lg tracking-wide">
              Marvin McKinney
            </p>
          </div>

          {/* Buttons & Badge */}
          <div className="flex items-center gap-6 flex-wrap mt-6">
            <button className="relative group bg-gradient-to-r from-[#E29C45] to-[#D57A20] text-black px-6 py-2.5 rounded-full font-semibold overflow-hidden transition hover:scale-105 duration-300">
              <span className="relative z-10 text-white">About Us</span>
            </button>

            <div className="border border-[#E29C45] text-[#E29C45] px-8 py-5 rounded-xl text-center hover:bg-[#E29C45]/10 transition duration-300">
              <h3 className="text-4xl font-bold leading-none">24+</h3>
              <p className="text-sm mt-1 opacity-90 font-medium">
                Worldwide Fitness Centers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
