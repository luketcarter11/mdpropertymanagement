import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Terms & Conditions - MD Property Management</title>
        <meta name="description" content="Terms and Conditions for MD Property Management services - Understanding our service agreement and policies." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl">Understanding our service agreement</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg">
              <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="mb-6">
                By accessing and using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="mb-6">
                We provide property management and cleaning services including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Commercial Cleaning</li>
                <li>Property Cleaning</li>
                <li>Property Management</li>
                <li>Keyholding & Site Visits</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Booking and Cancellation</h2>
              <p className="mb-6">
                Our booking and cancellation policies include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Advance booking requirements</li>
                <li>24-hour cancellation notice</li>
                <li>Rescheduling options</li>
                <li>Emergency service provisions</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="mb-6">
                Payment terms and conditions include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Payment methods accepted</li>
                <li>Pricing structure</li>
                <li>Invoice terms</li>
                <li>Late payment policies</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">5. Service Standards</h2>
              <p className="mb-6">
                We maintain high service standards and expect:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Property access arrangements</li>
                <li>Health and safety compliance</li>
                <li>Quality assurance measures</li>
                <li>Communication protocols</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">6. Liability</h2>
              <p className="mb-6">
                Our liability terms cover:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Insurance coverage</li>
                <li>Damage handling procedures</li>
                <li>Limitation of liability</li>
                <li>Client responsibilities</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
              <p className="mb-6">
                For any questions regarding these terms, please contact us at:
              </p>
              <ul className="list-none mb-6">
                <li>Email: mondeisec@gmail.com</li>
                <li>Phone: 07940 125 381</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
