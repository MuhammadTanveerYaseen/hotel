// src/app/components/AddressWithMap.tsx
import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'; // You can use Heroicons or any icon library

const AddressWithMap = () => {
    const googleMapsUrl = "https://www.google.com/maps/place/Hotel+A-One+Multan/@30.2336532,71.4791438,17z/data=!3m1!4b1!4m9!3m8!1s0x393b35b83ca6d011:0xb5673e124dc11d5d!5m2!4m1!1i2!8m2!3d30.2336532!4d71.4791438!16s%2Fg%2F11tg0cz1sd?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"// Google Maps search link for the location

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Address Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
                <p className="text-lg text-gray-600">Hotel A One Multan</p>
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
