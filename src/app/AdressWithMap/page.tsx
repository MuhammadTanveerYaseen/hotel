// src/app/components/AddressWithMap.tsx
import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'; // You can use Heroicons or any icon library

const AddressWithMap = () => {
    const googleMapsUrl = "https://www.google.com/maps/dir/30.2231494,71.4494091/30.2205907,71.4504391/@30.2209523,71.4470059,16z/data=!4m2!4m1!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3"; // Google Maps search link for the location

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Address Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
                <p className="text-lg text-gray-600">123 Luxury Lane, Multan, Pakistan</p>
            </div>

            {/* Map Button */}
            <div className="flex justify-center">
                <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-transform duration-300 hover:scale-105"
                >
                    <MapPinIcon className="w-6 h-6 mr-2" />
                    Open in Google Maps
                </a>
            </div>
        </div>
    );
};

export default AddressWithMap;
