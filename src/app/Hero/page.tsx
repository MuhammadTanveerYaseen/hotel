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
        BEST HOTEL BOOKING IN MULTAN
        </h1>
        <div className="flex flex-col items-start justify-start mb-8 mt-8 w-full lg:w-9/12 lg:left-0">
          <h3 className = "font-bold text-3xl ">Experience the epitome of luxury and comfort at Hotel One Multan. Here what awaits you:</h3>
          <div ref={typedRef} className="text-4xl font-extrabold text-yellow-700 animate-fade-in"></div>
          <p className="text-lg italic text-blue-700"><a href ="https://www.google.com/maps/place/Hotel+A-One+Multan/@30.2336532,71.4791438,17z/data=!3m1!4b1!4m9!3m8!1s0x393b35b83ca6d011:0xb5673e124dc11d5d!5m2!4m1!1i2!8m2!3d30.2336532!4d71.4791438!16s%2Fg%2F11tg0cz1sd?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">Hotel Multan A ONE</a></p>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-1 bg-yellow-500 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:bg-purple-700 transition-transform duration-300 hover:scale-105">
            <a href="https://wa.me/+923252866262">Book Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;