import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PropertyCleaning: React.FC = () => {
  const services = [
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning of all areas, including hard-to-reach spaces and detailed attention to fixtures and fittings."
    },
    {
      title: "End of Tenancy",
      description: "Comprehensive cleaning service to ensure properties meet all requirements for tenant changeover."
    },
    {
      title: "Regular Maintenance",
      description: "Scheduled cleaning services to maintain high standards of cleanliness throughout your property."
    },
    {
      title: "Carpet & Upholstery",
      description: "Professional deep cleaning of carpets, rugs, and upholstered furniture."
    },
    {
      title: "Window Cleaning",
      description: "Interior and exterior window cleaning for crystal clear views and maximum natural light."
    },
    {
      title: "Specialized Cleaning",
      description: "Targeted cleaning solutions for specific areas or materials in your property."
    }
  ];

  const benefits = [
    "Experienced and vetted cleaning professionals",
    "Eco-friendly cleaning products available",
    "Flexible scheduling to suit your needs",
    "Comprehensive insurance coverage",
    "Satisfaction guaranteed",
    "Regular quality inspections"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Property Cleaning Services - MD Property Management</title>
        <meta name="description" content="Professional property cleaning services for residential and rental properties. Keep your property spotless with our detailed cleaning services." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Property Cleaning Services
              </h1>
              <p className="text-xl mb-8">
                Professional cleaning solutions for residential and rental properties
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Property Cleaning Services</h2>
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
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">Initial property inspection and requirement gathering</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Planning</h3>
                <p className="text-gray-600">Customized cleaning plan development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Execution</h3>
                <p className="text-gray-600">Professional cleaning service delivery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
                <p className="text-gray-600">Final inspection and client satisfaction confirmation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Property Cleaning</h2>
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
            <h2 className="text-3xl font-bold mb-4">Ready for a Spotless Property?</h2>
            <p className="text-xl mb-8">Contact us today for a free cleaning quote</p>
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