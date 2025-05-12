import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Maintenance: React.FC = () => {
  const services = [
    {
      title: "Preventive Maintenance",
      description: "Regular inspections and maintenance to prevent issues before they become major problems."
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency response for urgent maintenance issues requiring immediate attention."
    },
    {
      title: "Property Improvements",
      description: "Upgrades and renovations to enhance property value and functionality."
    },
    {
      title: "Electrical Services",
      description: "Professional electrical maintenance, repairs, and installations."
    },
    {
      title: "Plumbing Services",
      description: "Comprehensive plumbing solutions from repairs to installations."
    },
    {
      title: "General Repairs",
      description: "Fixing various property issues from door handles to wall repairs."
    }
  ];

  const features = [
    "Qualified and experienced maintenance team",
    "Regular maintenance schedules",
    "Quick response times",
    "Cost-effective solutions",
    "Quality workmanship guarantee",
    "Detailed maintenance reports"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Property Maintenance Services - MD Property Management</title>
        <meta name="description" content="Professional property maintenance services including preventive maintenance, repairs, and improvements. Keep your property in perfect condition." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Property Maintenance Services
              </h1>
              <p className="text-xl mb-8">
                Comprehensive maintenance solutions to keep your property in optimal condition
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
              >
                Request Service
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Maintenance Services</h2>
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

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Maintenance Service Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Report</h3>
                <p className="text-gray-600">Contact us with your maintenance request through our 24/7 reporting system</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Schedule</h3>
                <p className="text-gray-600">We assess the urgency and schedule a maintenance visit at a convenient time</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Resolve</h3>
                <p className="text-gray-600">Our qualified team completes the maintenance work to your satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Maintenance Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Service Section */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">24/7 Emergency Maintenance</h2>
            <p className="text-xl mb-8 text-gray-700">
              We're available around the clock for urgent maintenance issues
            </p>
            <div className="text-2xl font-bold text-blue-800 mb-8">
              Call: 07940 125 381
            </div>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Contact Us Now
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Property Maintenance?</h2>
            <p className="text-xl mb-8">Get in touch for a free consultation and quote</p>
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

export default Maintenance; 