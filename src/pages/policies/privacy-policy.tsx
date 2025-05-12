import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Privacy Policy - MD Property Management</title>
        <meta name="description" content="Privacy Policy for MD Property Management - Learn how we collect, use, and protect your personal information." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl">How we handle and protect your information</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg">
              <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="mb-6">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name and contact information</li>
                <li>Property details</li>
                <li>Service preferences</li>
                <li>Communication history</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send you important updates and notifications</li>
                <li>Process your payments and transactions</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="mb-6">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisers and insurers</li>
                <li>Law enforcement when required by law</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="mb-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
