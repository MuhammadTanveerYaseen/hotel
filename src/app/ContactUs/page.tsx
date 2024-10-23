// src/app/contact.tsx

import Image from 'next/image';

const ContactUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mt-10">Contact Us</h1>
            <p className="text-center text-gray-600 mt-2">We'd love to hear from you!</p>

            {/* Contact Information Section */}
            <div className="mt-10 grid md:grid-cols-3 gap-8">
                {/* Address Section */}
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <h2 className="text-xl font-bold">Our Address</h2>
                    <p className="mt-2">1234 Hotel Lane</p>
                    <p>City, State, Zip Code</p>
                    <p>Country</p>
                </div>

                {/* Phone Number Section */}
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <h2 className="text-xl font-bold">Phone Numbers</h2>
                    <p className="mt-2">Male: +1 234 567 8901</p>
                    <p>Female: +1 234 567 8902</p>
                    <p>General Inquiries: +1 234 567 8903</p>
                </div>

                {/* Email Section */}
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <h2 className="text-xl font-bold">Email Us</h2>
                    <p className="mt-2">info@hotelname.com</p>
                    <p>support@hotelname.com</p>
                </div>
            </div>

            {/* Additional Information Section */}
            <div className="mt-10 bg-white rounded-lg shadow-lg p-5">
                <h2 className="text-xl font-bold">Additional Information</h2>
                <p className="mt-2">
                    For any queries or feedback, please feel free to reach out. We are here to assist you 24/7!
                </p>
            </div>

            {/* Map Section */}
            <div className="mt-10">
                <h2 className="text-xl font-bold text-center">Find Us Here</h2>
                <div className="h-64 relative">
                    <Image
                        src="/bed.jpg" // Replace with your map image path or embed a Google Maps iframe
                        alt="Map Location"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
