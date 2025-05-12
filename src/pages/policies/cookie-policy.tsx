import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Cookie Policy - MD Property Management</title>
        <meta name="description" content="Cookie Policy for MD Property Management - Learn how we use cookies and similar technologies on our website." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl">Understanding how we use cookies</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg">
              <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
              <p className="mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
              <p className="mb-6">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand how visitors use our site</li>
                <li>Preference cookies to remember your settings</li>
                <li>Marketing cookies to deliver relevant content</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
              <p className="mb-6">
                Our website uses the following types of cookies:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Session cookies (temporary)</li>
                <li>Persistent cookies (remain for a set time)</li>
                <li>First-party cookies (set by our website)</li>
                <li>Third-party cookies (set by other services)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Cookie Management</h2>
              <p className="mb-6">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Browser settings to block or delete cookies</li>
                <li>Cookie consent preferences on our website</li>
                <li>Third-party opt-out tools</li>
                <li>Device-specific settings</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">5. Impact of Disabling Cookies</h2>
              <p className="mb-6">
                Please note that disabling certain cookies may impact your experience on our website:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Some features may not function properly</li>
                <li>Your preferences may not be saved</li>
                <li>You may need to re-enter information</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
              <p className="mb-6">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;
