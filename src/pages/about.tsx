import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const values = [
    {
      title: "Local Business",
      description: "Deeply rooted in the North Wales community, we understand the unique needs of local properties and businesses.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      )
    },
    {
      title: "Professional Service",
      description: "Our team maintains the highest standards of service delivery, ensuring excellence in every task we undertake.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      )
    },
    {
      title: "Friendly & Reliable",
      description: "Our approachable team delivers consistent, dependable service with a smile, making property management hassle-free.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    {
      title: "Free Consultation",
      description: "We begin every relationship with a no-obligation consultation to understand your unique requirements.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      )
    },
    {
      title: "Competitive Pricing",
      description: "Quality service doesn't have to break the bank. We offer transparent, competitive rates for all our services.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us - MD Property Management</title>
        <meta name="description" content="Learn about MD Property Management's commitment to excellence in property maintenance and cleaning services across North Wales." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Trusted Property Partner
              </h1>
              <p className="text-xl mb-8">
                More than just a service provider - we're your dedicated partner in maintaining and providing a high level of service to your customers
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-8">
                Founded with a vision to provide exceptional property management services in North Wales, MD Property Management has grown through word-of-mouth recommendations and consistent delivery of quality service. Our journey is built on trust, reliability, and a deep understanding of our clients' needs.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be one of the region's most trusted property management companies, serving both residential and commercial clients with the same dedication and attention to detail that has defined us from the start.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg 
                      className="h-6 w-6 text-blue-800" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      {value.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe in building lasting relationships with our clients through transparent communication, reliable service, and attention to detail. Our team of experienced professionals takes pride in delivering solutions that exceed expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Regular quality checks</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Trained and vetted staff</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Industry-standard equipment</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Personalized service plans</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Regular communication</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-800 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Feedback-driven improvements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-xl mb-8">Let us show you why we're North Wales' trusted property management partner</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
