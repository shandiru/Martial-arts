"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    src: "https://images.unsplash.com/photo-1727717768632-f4241a128f50?q=80&w=2889&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "HIIT RUSH",
    angle: "6deg",
  },
  {
    src: "https://images.unsplash.com/photo-1727400068319-565c56633dc3?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "COMBATLINE",
    angle: "3deg",
  },
  {
    src: "https://images.unsplash.com/photo-1726551195764-f98a8e8a57c3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "POWERLIFT",
    angle: "-3deg",
  },
  {
    src: "https://images.unsplash.com/photo-1727775805114-a87c6bcaf9db?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "ZEN FLOW",
    angle: "-6deg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    rotate: custom.angle,
    y: 0,
    transition: {
      delay: custom.index * 0.15,
      duration: 0.4,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
};

export default function ChooseYourChallenge() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <p className="uppercase text-[#E1912F] text-sm tracking-[4px] mb-2">
          Classes
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Choose Your Challenge
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          From sweat-dripping cardio to raw strength and technique — pick your
          grind and go all in.
        </p>
      </div>

      {/* Cards */}
      <div className="relative flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {cards.map((card, i) => {
          const isActive = activeIndex === i;
          return (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-2xl border-[3px] border-[#E1912F]/40 shadow-[0_0_25px_#E1912F30] bg-[#111] cursor-pointer group transition-all duration-500 ${
                isActive ? "scale-105" : ""
              }`}
              custom={{ index: i, angle: card.angle }}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                y: -5,
                boxShadow: "0 20px 35px rgba(225,145,47,0.4)",
                transition: { duration: 0.3, type: "spring", stiffness: 150 },
              }}
              onClick={() => handleTouch(i)} // ✅ Works for mobile tap
            >
              {/* Image */}
              <img
                src={card.src}
                alt={card.title}
                className="w-[270px] h-[380px] md:w-[300px] md:h-[420px] object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent rounded-2xl transition-all duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              ></div>

              {/* Hidden Title + Button */}
              <div
                className={`absolute inset-0 flex flex-col justify-end items-start p-6 transition-all duration-500 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-bold tracking-wide mb-3">
                  {card.title}
                </h3>
                <button className="bg-[#E1912F] hover:bg-[#ffb347] text-black text-sm font-semibold px-4 py-2 rounded-full shadow-md transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
