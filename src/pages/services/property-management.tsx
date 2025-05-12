import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PropertyManagement: React.FC = () => {
  const services = [
    {
      title: "Holiday Let Management",
      description: "Comprehensive management services for holiday let owners who want hassle-free property maintenance."
    },
    {
      title: "Flooring & Tiling",
      description: "Professional installation and maintenance of flooring and tiling throughout your property."
    },
    {
      title: "Plumbing Services",
      description: "Expert plumbing solutions and maintenance to keep your property's systems running smoothly."
    },
    {
      title: "Heating Systems",
      description: "Installation, maintenance, and repair of heating systems to ensure guest comfort."
    },
    {
      title: "Carpentry Work",
      description: "Skilled carpentry services for repairs, improvements, and custom woodwork solutions."
    },
    {
      title: "General Repairs",
      description: "Swift and reliable repair services to address any property maintenance issues."
    }
  ];

  const benefits = [
    "Local expertise in Gwynedd",
    "Experienced maintenance team",
    "Quick response times",
    "Comprehensive property care",
    "Regular property checks",
    "Transparent communication"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Holiday Let Property Management in Gwynedd | MD Property Management</title>
        <meta name="description" content="Professional holiday let property management services in Gwynedd. We handle maintenance, repairs, and property care for holiday let owners." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Holiday Let Property Management
              </h1>
              <p className="text-xl mb-8">
                Professional property management services for holiday let owners in Gwynedd
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Property Management Services</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                <p className="text-gray-600">Property evaluation and needs assessment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Planning</h3>
                <p className="text-gray-600">Customized management plan development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">Regular maintenance and property care</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
                <p className="text-gray-600">Ongoing oversight and regular updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Property Management</h2>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today for professional property management services</p>
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

export default PropertyManagement;
