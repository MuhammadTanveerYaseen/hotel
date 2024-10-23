"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const rooms = [
  {
    title: "Standard Room",
    price: "$100/night",
    image: "/bed.jpg",
    features: [
      "Free Wi-Fi",
      "Double Bed",
      "Air Conditioning",
      "Private Bathroom",
    ],
    detailsUrl: "/Detail",
    whatsappLink:
      "https://wa.me/1234567890?text=I%20want%20to%20book%20the%20Standard%20Room",
  },
  {
    title: "Deluxe Room",
    price: "$150/night",
    image: "/bed.jpg",
    features: [
      "Free Wi-Fi & Breakfast",
      "King Bed",
      "Balcony with Sea View",
      "Mini-Bar",
    ],
    detailsUrl: "/Detail",
    whatsappLink:
      "https://wa.me/923236229684?text=I%20want%20to%20book%20the%20Deluxe%20Room",
  },
  {
    title: "Suite",
    price: "$250/night",
    image: "/bed.jpg",
    features: [
      "Free Wi-Fi & Breakfast",
      "King Bed with Sofa",
      "Living Area",
      "Private Jacuzzi",
    ],
    detailsUrl: "/Detail",
    whatsappLink:
      "https://wa.me/1234567890?text=I%20want%20to%20book%20the%20Suite",
  },
];

export default function DetailPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Room Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.title}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Room Image */}
            <Image
              src={room.image}
              alt={room.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            {/* Room Info */}
            <div className="p-4">
              <h2 className="text-2xl font-bold">{room.title}</h2>
              <p className="text-gray-600 text-lg mb-2">{room.price}</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {room.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {/* Detail and WhatsApp Buttons */}
              <div className="flex justify-between">
                <Link
                  href={room.detailsUrl}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                >
                  Details
                </Link>
                <a
                  href={room.whatsappLink}
                  target="_blank"
                  className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md"
                  rel="noopener noreferrer"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
