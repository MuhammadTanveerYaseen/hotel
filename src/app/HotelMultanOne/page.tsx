"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
 import GallerySection from "../Gallery";
export default function HeroWithMap() {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(/HotelMultanOne/IMG-20241106-WA0102.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8 lg:px-16 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in-down">
            Discover Your Next Adventure
          </h1>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl max-w-2xl animate-fade-in-up">
            Unwind and indulge at our luxury stay, right in the heart of your destination.
          </p>
          <button className="mt-6 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
          <Link href={"https://wa.me/+923008788992?text=I%20want%20to%20book%20the%20Standard%20Room"}>Book Now</Link>
          </button>
        </div>
      </div>

<section>
  <GallerySection></GallerySection>
</section>
      {/* Google Map Button */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/HotelMultanOne/IMG-20241106-WA0103.jpg"
        alt="Location Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      {/* Overlay for Dim Effect */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Google Maps Button */}
      <div className="relative z-10 flex items-center justify-center">
        <button
          className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          onClick={() => window.open("https://www.google.com/maps/place/Hotel+A-One+Multan/@30.2336532,71.4791438,17z/data=!3m1!4b1!4m9!3m8!1s0x393b35b83ca6d011:0xb5673e124dc11d5d!5m2!4m1!1i2!8m2!3d30.2336532!4d71.4791438!16s%2Fg%2F11tg0cz1sd?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D", "_blank")}
        >
          <FaMapMarkerAlt className="mr-2 text-lg" />
          View Location on Google Maps
        </button>
      </div>
    </div>
  

      {/* Custom animations */}
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 1.2s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
