import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AccessibilityStatement: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Accessibility Statement - MD Property Management</title>
        <meta name="description" content="Accessibility Statement for MD Property Management - Our commitment to making our services accessible to all users." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-xl">Our commitment to digital accessibility</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg">
              <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold mb-4">1. Our Commitment</h2>
              <p className="mb-6">
                MD Property Management is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Measures to Support Accessibility</h2>
              <p className="mb-6">
                We take the following measures to ensure accessibility:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Include accessibility throughout our internal policies</li>
                <li>Provide continual accessibility training for our staff</li>
                <li>Regular testing of our website's accessibility</li>
                <li>Clear accessibility information on our website</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Technical Information</h2>
              <p className="mb-6">
                Our website aims to comply with Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. These guidelines explain how to make web content more accessible for people with disabilities.
              </p>

              <h2 className="text-2xl font-bold mb-4">4. Accessible Features</h2>
              <p className="mb-6">
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Clear, consistent navigation</li>
                <li>Alt text for all images</li>
                <li>Proper heading structure</li>
                <li>Sufficient color contrast</li>
                <li>Keyboard navigation support</li>
                <li>Responsive design for different devices</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">5. Limitations</h2>
              <p className="mb-6">
                Despite our best efforts, there may be some parts of our website that are not fully accessible:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Older PDF documents may not be fully accessible</li>
                <li>Some third-party content may have accessibility limitations</li>
                <li>Some interactive features may have limited accessibility</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">6. Feedback and Contact Information</h2>
              <p className="mb-6">
                We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
              </p>
              <ul className="list-none mb-6">
                <li>Email: mondeisec@gmail.com</li>
                <li>Phone: 07940 125 381</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">7. Enforcement Procedure</h2>
              <p className="mb-6">
                We are committed to reviewing accessibility issues promptly and providing timely solutions. All accessibility-related issues will be handled with high priority.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityStatement;
