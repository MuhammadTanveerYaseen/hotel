// src/app/components/HeroSection.tsx
"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Experience luxury like never before.",
        "Your perfect getaway awaits!",
        "Unwind in our exquisite rooms.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center bg-light overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="w-full text-black z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Hotel One Multan
        </h1>
        <div className="flex flex-col items-start justify-start mb-8 mt-8 w-full lg:w-9/12 lg:left-0">
          <h3 className = "font-bold text-3xl ">"Experience the epitome of luxury and comfort at Hotel One Multan. Here’s what awaits you:"</h3>
          <div ref={typedRef} className="text-4xl font-extrabold text-yellow-700 animate-fade-in"></div>
          <p className="text-lg italic text-blue-700"><a href ="#location">123 Luxury Lane, Multan, Pakistan</a></p>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-yellow-500 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:bg-purple-700 transition-transform duration-300 hover:scale-105">
            <a href="#price">Book Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;