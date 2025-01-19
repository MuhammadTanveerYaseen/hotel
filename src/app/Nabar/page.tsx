"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setProgress(20);

        setTimeout(() => {
            setProgress(40);
        }, 100);

        setTimeout(() => {
            setProgress(100);
        }, 400);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => {
            setProgress(0);
        }, 50);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
    };

    return (
        <nav className="p-2 bg-background/50 sticky top-0 backdrop-blur border-b z-20">
            <LoadingBar
                color='#933ce6'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <div className="text-lg font-bold">HOTEL BOOKING </div>
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="https://wa.me/+923252866262" className="px-1 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-transform duration-300 hover:scale-105">
                    BOOK NOW
                    </Link>
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Home
                    </Link>
                   
                    <Link href="/ContactUs" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <span className="mx-2"> 
                     
                    </span>
                    <div className="relative">
                        <button onClick={toggleMobileMenu} className="focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                        {isMobileMenuOpen && (
                            <div className="absolute top-10 right-0 bg-white shadow-lg p-4 rounded-lg w-48">
                                <Link href="https://wa.me/+923252866262" className="px-2 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-transform duration-300 hover:scale-105">BOOK NOW</Link>
                                <Link href="/" className="block py-2 hover:bg-gray-100 rounded">Home</Link>
                        
                                <Link href="/ContactUs" className="block py-2 hover:bg-gray-100 rounded">Contact</Link>
                               
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
