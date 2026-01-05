/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - TechnoBeats",
  description: "Cookie policy and tracking information for TechnoBeats",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          Cookie Policy
        </h1>
        
        <div className="prose prose-invert prose-emerald max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and allow certain features to function properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">1. First-Party Cookies</h3>
              <p className="text-gray-300">
                These are cookies set by our website directly. They are used for site functionality and analytics.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">2. Third-Party Cookies</h3>
              <p className="text-gray-300">
                We use services from third parties like Google Analytics and Google AdSense, which may set their own cookies.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
            <p className="text-gray-300 mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
              <li>Delete existing cookies from your browser</li>
              <li>Use browser plugins to manage cookie preferences</li>
              <li>Opt-out of third-party advertising cookies</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Please note that disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              We use the following third-party services that may use cookies:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
            </ul>
            <p className="text-gray-300 mt-4">
              These services have their own privacy and cookie policies, which we recommend you review.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Please check this page periodically for updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="text-emerald-400">
              Email: dikikiki.dk@gmail.com
            </p>
          </section>

          <section>
            <p className="text-gray-400 text-sm mt-8">
              Last updated: January 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

