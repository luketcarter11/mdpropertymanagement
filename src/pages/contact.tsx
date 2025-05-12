import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'general' | 'quote'>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    // Additional fields for quote request
    propertyType: '',
    propertyAddress: '',
    propertyLink: '',
    preferredDate: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType,
          ...formData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        propertyType: '',
        propertyAddress: '',
        propertyLink: '',
        preferredDate: '',
        requirements: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = {
    email: 'mondeisec@gmail.com',
    phone: '07940 125 381',
    address: 'Gwynedd, North Wales, United Kingdom'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contact Us - MD Property Management</title>
        <meta name="description" content="Get in touch with MD Property Management for professional cleaning and property maintenance services. Contact us for a free quote." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl">
                Get in touch with us for all your property management needs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-blue-800">
                    {contactInfo.phone}
                  </a>
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-800">
                    {contactInfo.email}
                  </a>
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-12">
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setFormType('general')}
                    className={`px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-md ${
                      formType === 'general'
                        ? 'bg-blue-800 text-white transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg 
                        className={`w-5 h-5 mr-2 ${formType === 'general' ? 'text-white' : 'text-gray-500'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      General Message
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('quote')}
                    className={`px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-md ${
                      formType === 'quote'
                        ? 'bg-blue-800 text-white transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg 
                        className={`w-5 h-5 mr-2 ${formType === 'quote' ? 'text-white' : 'text-gray-500'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Request a Quote
                    </div>
                  </button>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center mb-12">
                {formType === 'general' ? 'Send Us a Message' : 'Request a Quote'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M6%208l4%204%204-4%22%20stroke%3D%22%236B7280%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-no-repeat bg-[right_0.5rem_center]"
                    >
                      <option value="">Select a service</option>
                      <option value="commercial-cleaning">Commercial Cleaning</option>
                      <option value="property-cleaning">Property Cleaning</option>
                      <option value="property-management">Property Management</option>
                      <option value="keyholding-site-visits">Keyholding & Site Visits</option>
                    </select>
                  </div>
                </div>

                {formType === 'quote' && (
                  <>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Details</h3>
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-1">
                            Property Address (Optional)
                          </label>
                          <textarea
                            id="propertyAddress"
                            name="propertyAddress"
                            value={formData.propertyAddress}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                            placeholder="Enter the full property address"
                          ></textarea>
                        </div>

                        <div>
                          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                            Property Type
                          </label>
                          <select
                            id="propertyType"
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M6%208l4%204%204-4%22%20stroke%3D%22%236B7280%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-no-repeat bg-[right_0.5rem_center]"
                          >
                            <option value="">Select property type</option>
                            <option value="holiday-let">Holiday Let</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="industrial">Industrial</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="propertyLink" className="block text-sm font-medium text-gray-700 mb-1">
                            Property Link (Optional)
                          </label>
                          <input
                            type="url"
                            id="propertyLink"
                            name="propertyLink"
                            value={formData.propertyLink}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                            placeholder="e.g., Airbnb or property listing URL"
                          />
                        </div>

                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Start Date (Optional)
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Requirements
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                        placeholder="Please provide specific details about your service requirements, including frequency of service needed and any special considerations."
                      ></textarea>
                    </div>
                  </>
                )}

                {formType === 'general' && (
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                      placeholder="Tell us how we can help you"
                    ></textarea>
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-8 py-3 border border-transparent rounded-lg font-semibold text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      formType === 'general' ? 'Send Message' : 'Request Quote'
                    )}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="text-center text-green-600">
                    {formType === 'general' 
                      ? "Thank you for your message. We'll get back to you soon!"
                      : "Thanks for your request! You'll receive an update via email soon."}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-center text-red-600">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Business Hours Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div>
                  <p className="font-semibold">Monday - Friday</p>
                  <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold">Saturday - Sunday</p>
                  <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                24/7 Emergency Service Available
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
