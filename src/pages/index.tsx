import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const serviceCards = [
  {
    title: "Commercial Cleaning",
    description: "Maintain a pristine and professional environment for your business with our comprehensive commercial cleaning services.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
    href: "/services/commercial-cleaning"
  },
  {
    title: "Property Cleaning",
    description: "Keep your residential or rental property spotless with our detailed property cleaning services.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
    href: "/services/property-cleaning"
  },
  {
    title: "Property Management",
    description: "Professional holiday let property management services to handle all aspects of your property maintenance and care.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
    href: "/services/property-management"
  },
  {
    title: "Keyholding & Site Visits",
    description: "Secure key management and regular site inspections to ensure your property's safety and security.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    ),
    href: "/services/keyholding-site-visits"
  }
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>MD Property Management - Professional Cleaning & Property Maintenance</title>
        <meta name="description" content="MD Property Management offers professional cleaning and property maintenance services. Quality service at competitive prices for commercial and residential properties." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Property Management & Cleaning Services
              </h1>
              <p className="text-xl mb-8">
                Your trusted partner for maintaining and managing properties with excellence
              </p>
              <Link href="/contact" 
                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {serviceCards.map((service, index) => (
                <Link 
                  href={service.href} 
                  key={index}
                  className="group"
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group-hover:border-blue-800 border-2 border-transparent cursor-pointer h-full">
                    <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors duration-300">
                      <svg 
                        className="h-8 w-8 text-blue-800 group-hover:text-white transition-colors duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        {service.icon}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Local Business",
                  description: "Rooted in the community and understanding your needs"
                },
                {
                  title: "Professional Service",
                  description: "Quality and reliability at the heart of what we do"
                },
                {
                  title: "Competitive Prices",
                  description: "Quality service that doesn't break the bank"
                },
                {
                  title: "Enviable Reputation",
                  description: "Trusted by clients for our professionalism"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today for a free consultation and quote</p>
            <Link href="/contact" 
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
              Contact Us Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
