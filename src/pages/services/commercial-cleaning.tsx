import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CommercialCleaning: React.FC = () => {
  const features = [
    {
      title: "Office Cleaning",
      description: "Regular cleaning and maintenance of office spaces, ensuring a professional work environment."
    },
    {
      title: "Industrial Cleaning",
      description: "Specialized cleaning services for industrial facilities and warehouses."
    },
    {
      title: "Retail Space Cleaning",
      description: "Maintaining cleanliness and hygiene in retail environments to enhance customer experience."
    },
    {
      title: "Window Cleaning",
      description: "Professional window cleaning services for commercial buildings."
    },
    {
      title: "Carpet & Upholstery",
      description: "Deep cleaning of carpets and upholstery to maintain appearance and extend lifespan."
    },
    {
      title: "Sanitization Services",
      description: "Throrough sanitization and disinfection of commercial spaces."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Commercial Cleaning Services - MD Property Management</title>
        <meta name="description" content="Professional commercial cleaning services for businesses. Maintain a pristine and professional environment with our comprehensive cleaning solutions." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Commercial Cleaning Services
              </h1>
              <p className="text-xl mb-8">
                Professional cleaning solutions tailored to your business needs
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

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Cleaning Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Commercial Cleaning Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Professional Standards</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Trained and vetted cleaning professionals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Industry-standard cleaning products and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regular quality checks and supervision</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Flexible Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customized cleaning schedules</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Scalable services to match your needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Emergency cleaning services available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workspace?</h2>
            <p className="text-xl mb-8">Contact us today for a customized cleaning solution</p>
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

export default CommercialCleaning; 