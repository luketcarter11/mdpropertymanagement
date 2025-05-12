import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  const services = [
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for businesses, including office spaces, industrial facilities, and retail environments.",
      features: [
        "Office & workspace cleaning",
        "Industrial facility maintenance",
        "Retail space cleaning",
        "Carpet & upholstery care",
        "Window cleaning",
        "Sanitization services"
      ],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      ),
      href: "/services/commercial-cleaning"
    },
    {
      title: "Property Cleaning",
      description: "Comprehensive cleaning services for residential properties and holiday homes, ensuring a high level of cleanliness and customer satisfaction.",
      features: [
        "Changeover cleaning for holiday lets",
        "Deep cleaning between guests",
        "Linen & towel hire",
        "Welcome pack availability",
        "Regular residential cleaning",
        "Property presentation & staging"
      ],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      ),
      href: "/services/property-cleaning"
    },
    {
      title: "Property Management",
      description: "Professional holiday let property management services to handle all aspects of your property maintenance and care.",
      features: [
        "Holiday let management",
        "Property maintenance",
        "Repair services",
        "Flooring & tiling",
        "Plumbing & heating",
        "Carpentry work"
      ],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      ),
      href: "/services/property-management"
    },
    {
      title: "Keyholding & Site Visits",
      description: "Professional keyholding services and regular site inspections to ensure your property's safety and security.",
      features: [
        "Secure key management",
        "Regular site inspections",
        "Alarm response",
        "Property monitoring",
        "Holiday let support",
        "Maintenance coordination"
      ],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      ),
      href: "/services/keyholding-site-visits"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Our Services - MD Property Management</title>
        <meta name="description" content="Explore our comprehensive range of property management services including commercial cleaning, property cleaning, and maintenance solutions." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl mb-8">
                Comprehensive property management solutions tailored to your needs
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

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Link href={service.href}>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <svg 
                            className="h-8 w-8 text-blue-800" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            {service.icon}
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                      </div>
                      
                      <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <svg 
                              className="h-5 w-5 text-blue-800 mr-2" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <span className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-900">
                          Learn more
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
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
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Contact Us Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
