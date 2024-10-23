// src/app/RoomDetails.tsx
"use client";
import Image from "next/image";

const RoomDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Back Arrow */}
      <a href="/" className="flex items-center text-blue-500 mt-4">
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
      <div className="relative h-96">
        <Image
          src="/bed.jpg" // Replace with your hotel image path
          alt="Hotel"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white text-4xl font-bold">
            Experience Luxury at Hotel One Multan
          </h1>
          <p className="text-white text-lg mt-2">Book your dream stay today!</p>
        </div>
      </div>

      {/* Room Types */}
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {/* Standard Room */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <Image
            src="/bed.jpg" // Replace with your standard room image path
            alt="Standard Room"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h2 className="text-xl font-bold mt-4">Standard Room</h2>
          <p className="text-gray-600 mt-1">$100/night</p>
          <p className="mt-2">
            Our comfortable Standard Room is perfect for solo travelers or
            couples seeking a cozy and affordable stay.
          </p>
          <h3 className="font-semibold mt-2">Features:</h3>
          <ul className="list-disc ml-5 mt-1">
            <li>Free Wi-Fi</li>
            <li>Double Bed</li>
            <li>Air Conditioning</li>
            <li>Private Bathroom</li>
          </ul>
          <a
            href="https://wa.me/1234567890?text=I%20want%20to%20book%20the%20Standard%20Room"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 block text-center"
          >
            Book Now
          </a>
        </div>

        {/* Deluxe Room */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <Image
            src="/bed.jpg" // Replace with your deluxe room image path
            alt="Deluxe Room"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h2 className="text-xl font-bold mt-4">Deluxe Room</h2>
          <p className="text-gray-600 mt-1">$150/night</p>
          <p className="mt-2">
            Upgrade to our Deluxe Room for a more spacious and luxurious
            experience. Enjoy a king-size bed, a private balcony with stunning
            sea views, and a mini-bar stocked with your favorite drinks.
          </p>
          <h3 className="font-semibold mt-2">Features:</h3>
          <ul className="list-disc ml-5 mt-1">
            <li>Free Wi-Fi & Breakfast</li>
            <li>King Bed</li>
            <li>Balcony with Sea View</li>
            <li>Mini-Bar</li>
          </ul>
          <a
            href="https://wa.me/1234567890?text=I%20want%20to%20book%20the%20Deluxe%20Room"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 block text-center"
          >
            Book Now
          </a>
        </div>

        {/* Suite */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <Image
            src="/bed.jpg" // Replace with your suite image path
            alt="Suite"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h2 className="text-xl font-bold mt-4">Suite</h2>
          <p className="text-gray-600 mt-1">$250/night</p>
          <p className="mt-2">
            Indulge in the ultimate luxury with our spacious Suite. Relax in the
            living area, enjoy a king-size bed with a sofa, and unwind in your
            private Jacuzzi.
          </p>
          <h3 className="font-semibold mt-2">Features:</h3>
          <ul className="list-disc ml-5 mt-1">
            <li>Free Wi-Fi & Breakfast</li>
            <li>King Bed with Sofa</li>
            <li>Living Area</li>
            <li>Private Jacuzzi</li>
          </ul>
          <a
            href="https://wa.me/1234567890?text=I%20want%20to%20book%20the%20Suite"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 block text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
