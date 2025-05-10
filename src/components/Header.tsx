import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contactInfo = {
    email: 'mondeisec@gmail.com',
    phone: '07940 125 381'
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="md:w-1/4 flex justify-center md:justify-start w-full">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-36 md:w-40 h-12 md:h-14">
                <Image
                  src="/images/MD_Property_Management_logo.png"
                  alt="MD Property Management Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-800">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-800">Services</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-800">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-800">Contact</Link>
            </div>
          </div>

          {/* Contact Info - Right Side */}
          <div className="hidden md:flex items-center space-x-4 w-1/4 justify-end">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-gray-600 hover:text-blue-800 flex items-center"
              title={contactInfo.email}
            >
              <svg className="h-5 w-5 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="sr-only">Email us</span>
            </a>
            <a 
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="text-gray-600 hover:text-blue-800 flex items-center"
              title={contactInfo.phone}
            >
              <svg className="h-5 w-5 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="sr-only">Call us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden absolute right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-blue-800">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-800">Services</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-800">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-800">Contact</Link>
              {/* Mobile Contact Info */}
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-gray-600 hover:text-blue-800 flex items-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{contactInfo.email}</span>
              </a>
              <a 
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="text-gray-600 hover:text-blue-800 flex items-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 