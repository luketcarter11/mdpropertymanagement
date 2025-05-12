import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PropertyCleaning: React.FC = () => {
  const services = [
    {
      title: "Changeover Cleaning",
      description: "Professional cleaning service between guest stays, ensuring your holiday let is pristine for every new arrival."
    },
    {
      title: "Deep Cleaning",
      description: "Thorough deep cleaning service between guests, including sanitization of all surfaces and detailed attention to high-touch areas."
    },
    {
      title: "Linen & Towel Hire",
      description: "Fresh, high-quality linen and towel hire service, ensuring guests always have clean, comfortable bedding and towels."
    },
    {
      title: "Welcome Pack Service",
      description: "Welcome packs available for your guests, featuring local products and essential items for their stay."
    },
    {
      title: "Property Presentation",
      description: "Expert staging and presentation of your holiday let to create the perfect first impression for your guests."
    },
    {
      title: "Regular Maintenance",
      description: "Scheduled cleaning and maintenance to keep your holiday property in perfect condition between guest stays."
    }
  ];

  const benefits = [
    "Specialised in holiday let cleaning",
    "Flexible scheduling for guest changeovers",
    "Professional linen and towel service",
    "Attention to guest experience details",
    "Local, reliable cleaning team",
    "Accredited by Skykes Cottages"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Holiday Let Cleaning Services - MD Property Management</title>
        <meta name="description" content="Professional holiday let cleaning services including changeover cleaning, linen hire, and welcome pack services. Keep your holiday property pristine for every guest." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Holiday Let Cleaning Services
              </h1>
              <p className="text-xl mb-8">
                Professional cleaning solutions for holiday lets and vacation rentals
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
              >
                Schedule a Cleaning
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Holiday Let Cleaning Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Cleaning Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Guest Departure</h3>
                <p className="text-gray-600">Property inspection and cleaning preparation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep Clean</h3>
                <p className="text-gray-600">Thorough cleaning of all areas and surfaces</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Setup</h3>
                <p className="text-gray-600">Fresh linens, welcome pack, and property staging</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
                <p className="text-gray-600">Final inspection before guest arrival</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Holiday Let Cleaning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Holiday Let?</h2>
            <p className="text-xl mb-8">Contact us today for professional holiday let cleaning services</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyCleaning; 