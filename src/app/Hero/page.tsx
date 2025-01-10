// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-slate-900 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-4/5">
        <Image
          src="/WhatsApp Image 2025-01-07 at 16.14.21 (1).jpeg" // Replace with your background image
          alt="Exclusive Hotel"
          layout="fill"
          objectFit="cover"
          className="brightness-75 animate-fadeIn"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative w-full flex flex-col items-center justify-center mt-64 lg:mt-48 animate-scaleIn">
        {/* Polaroid-style Images */}
        <div className="flex justify-center gap-5 mb-10 relative">
          <div className="relative w-[25%] h-auto max-w-[120px] md:max-w-[160px] lg:max-w-[200px] transform translate-y-5 rotate-[-10deg] shadow-lg hover:scale-110 transition-transform duration-500">
            <Image
              src="/i3.jpeg" // Replace with your first image
              alt="Hotel Image 1"
              layout="responsive"
              width={1}
              height={1}
              objectFit="cover"
              className="rounded-lg animate-fadeIn delay-200"
            />
          </div>
          <div className="relative w-[25%] h-auto max-w-[120px] md:max-w-[160px] lg:max-w-[200px] shadow-lg z-10 hover:scale-110 transition-transform duration-500">
            <Image
              src="/i32.jpeg" // Replace with your second image
              alt="Hotel Image 2"
              layout="responsive"
              width={1}
              height={1}
              objectFit="cover"
              className="rounded-lg animate-fadeIn delay-400"
            />
          </div>
          <div className="relative w-[25%] h-auto max-w-[120px] md:max-w-[160px] lg:max-w-[200px] transform translate-y-5 rotate-[10deg] shadow-lg hover:scale-110 transition-transform duration-500">
            <Image
              src="/i33.jpeg" // Replace with your third image
              alt="Hotel Image 3"
              layout="responsive"
              width={1}
              height={1}
              objectFit="cover"
              className="rounded-lg animate-fadeIn delay-600"
            />
          </div>
        </div>

        {/* Text Section */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white animate-slideUp delay-800">
          BEST HOTEL IN MULTAN
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-center text-white mt-2 animate-fadeIn delay-1000">
          besthotelbookinginmultan.com
        </p>

        {/* Book Now Button */}
        <Link href="https://wa.me/+923252866262" passHref>
          
            <button className="mt-5 px-6 py-2 md:px-8 md:py-3 bg-yellow-500 text-white text-sm md:text-lg font-semibold rounded-full shadow-md hover:scale-110 hover:shadow-xl transition-transform duration-500 animate-fadeIn delay-1200">
              Book Now
            </button>
        
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
