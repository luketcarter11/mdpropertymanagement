import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Property Owner",
      company: "Residential Client",
      content: "MD Property Management has transformed how I maintain my rental properties. Their attention to detail and proactive approach has saved me countless hours and headaches. The team is always professional and responsive.",
      rating: 5
    },
    {
      name: "David Roberts",
      role: "Office Manager",
      company: "Commercial Client",
      content: "We've been using MD Property Management for our office cleaning and maintenance for over a year now. The consistency and quality of their service is outstanding. They've become an essential part of our business operations.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Business Owner",
      company: "Retail Space",
      content: "The level of service provided by MD Property Management is exceptional. Their team is reliable, thorough, and always goes the extra mile. They've helped maintain our retail space to the highest standards.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Client Testimonials - MD Property Management</title>
        <meta name="description" content="Read what our clients say about MD Property Management's cleaning and maintenance services. Real testimonials from satisfied customers." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Client Testimonials
              </h1>
              <p className="text-xl">
                Don't just take our word for it - hear what our clients have to say about our services
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="h-8 w-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-blue-800 mb-2">98%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-800 mb-2">200+</div>
                <p className="text-gray-600">Active Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-800 mb-2">5★</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-800 mb-2">10+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Satisfied Clients</h2>
            <p className="text-xl mb-8">Experience our professional property management services for yourself</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials; 