"use client";
import React, { useState } from "react";
import Image from "next/image";

const RoomDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, imgUrl: "/HotelAOneMultan/IMG-20240928-WA0007.jpg" },
    { id: 2, imgUrl: "/HotelAOneMultan/IMG-20241106-WA0028.jpg" },
    { id: 3, imgUrl: "/HotelAOneMultan/IMG-20241106-WA0040.jpg" },
    { id: 4, imgUrl: "/HotelAOneMultan/IMG-20241106-WA0041.jpg" },
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  const showNextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length);
    }
  };

  const showPreviousImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Back Arrow */}
      <a href="/" className="flex items-center text-blue-500 mt-4 ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 4.707a1 1 0 00-1.414 0l-5 5a1 1 0 001.414 1.414L9 7.414V17a1 1 0 002 0V7.414l4.293 4.293a1 1 0 001.414-1.414l-5-5z"
            clipRule="evenodd"
          />
        </svg>
        Back to Home
      </a>

      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
        <Image
          src="/HotelAOneMultan/IMG-20240928-WA0007.jpg"
          alt="Hotel"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl font-bold">Experience Luxury at Hotel One Multan</h1>
          <p className="text-lg mt-2">Book your dream stay today!</p>
        </div>
      </div>

      {/* Room Types */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 lg:px-20">
        {/* Room Type */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-5">
          <h2 className="text-2xl font-bold mb-4">Room Details</h2>
          <p className="text-white">
            Indulge in the ultimate luxury with our spacious room. Relax and
            unwind with modern amenities designed for your comfort.
          </p>
          <h3 className="font-semibold mt-4">Features:</h3>
          <ul className="list-disc ml-5 mt-2 text-white">
            <li>Free Wi-Fi</li>
            <li>King Bed</li>
            <li>Private Bathroom</li>
            <li>Air Conditioning</li>
          </ul>
        </div>

        {/* Room Gallery */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 col-span-full lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative h-48 overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.imgUrl}
                  alt={`Gallery Image ${image.id}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute top-1/2 left-4 text-white text-3xl font-bold z-10"
            onClick={showPreviousImage}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-4 text-white text-3xl font-bold z-10"
            onClick={showNextImage}
          >
            &#10095;
          </button>
          <Image
            src={galleryImages[currentImageIndex].imgUrl}
            alt={`Gallery Image ${currentImageIndex}`}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
