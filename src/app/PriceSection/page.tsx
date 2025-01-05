import React from "react";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    name: "Hotel A One Multan",
    description:
      "Experience luxury by the ocean with stunning views and premium amenities.",
    imgUrl: "/HotelAOneMultan/IMG-20240928-WA0007.jpg",
    slug: "HotelAOneMultan",
  },
  {
    id: 2,
    name: "Hotel Multan One",
    description:
      "Find peace in the mountains with cozy rooms and spectacular scenery.",
    imgUrl: "/HotelMultanOne/IMG-20241106-WA0095.jpg",
    slug: "HotelMultanOne",
  },
];

export default function OurHotels() {
  return (
    <section
      className="py-12 px-6 md:px-10 lg:px-20 bg-gradient-to-r from-blue-100 to-gray-100"
      id="hotels"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
        Our Hotels
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="relative overflow-hidden rounded-lg shadow-xl group transform hover:scale-105 transition duration-300 bg-white"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={hotel.imgUrl}
                alt={`Image of ${hotel.name}`}
                layout="fill"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {hotel.name}
              </h3>
              <p className="text-gray-600 mb-6">{hotel.description}</p>
              <div className="flex justify-end items-center space-x-4">
                <Link
                  href={`Detail`}
                  className="inline-block px-5 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors shadow-md"
                >
                  Details
                </Link>
                <Link
                  href={`/${hotel.slug}`}
                  className="inline-block px-5 py-2 text-sm font-semibold text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors shadow-md"
                >
                  Visit Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
