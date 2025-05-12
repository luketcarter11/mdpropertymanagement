import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const KeyholdingAndSiteVisits: React.FC = () => {
  const services = [
    {
      title: "24/7 Key Management",
      description: "Secure storage and management of your property keys with round-the-clock availability for authorized access."
    },
    {
      title: "Regular Site Inspections",
      description: "Scheduled property visits to check security, maintenance issues, and overall condition of your property."
    },
    {
      title: "Emergency Response",
      description: "Swift response to alarms or emergency situations, coordinating with relevant services when needed."
    },
    {
      title: "Property Checks",
      description: "Detailed inspections of utilities, security systems, and general property condition with regular reporting."
    },
    {
      title: "Access Management",
      description: "Controlled access for contractors, maintenance teams, and authorized personnel as needed."
    },
    {
      title: "Security Monitoring",
      description: "Regular checks of security systems, locks, and surveillance equipment to ensure proper functioning."
    }
  ];

  const benefits = [
    "Peace of mind with professional key management",
    "Regular property condition reports",
    "Quick response to emergencies",
    "Controlled access management",
    "Local team in Gwynedd",
    "Vetted by the Security Industry Authority"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Keyholding & Site Visits Services in Gwynedd | MD Property Management</title>
        <meta 
          name="description" 
          content="Professional keyholding and site visits services in Gwynedd. We offer alarm response, regular inspections, and property maintenance services." 
        />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Keyholding & Site Visits In Gwynedd
              </h1>
              <p className="text-xl mb-8">
                Professional keyholding services and regular site inspections for your peace of mind
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Keyholding Services</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Service Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Initial Setup</h3>
                <p className="text-gray-600">Key collection and security protocol establishment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Regular Visits</h3>
                <p className="text-gray-600">Scheduled property inspections and monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reporting</h3>
                <p className="text-gray-600">Detailed condition reports and updates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Response</h3>
                <p className="text-gray-600">Swift action on any issues identified</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Keyholding Service</h2>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
            <p className="text-xl mb-8">Contact us today to discuss your keyholding needs</p>
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

export default KeyholdingAndSiteVisits; 