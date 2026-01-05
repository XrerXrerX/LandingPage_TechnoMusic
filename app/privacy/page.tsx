/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - TechnoBeats",
  description: "Privacy policy and data protection information for TechnoBeats",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert prose-emerald max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect information that you provide directly to us, including when you:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Visit our website and interact with our content</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our contact forms</li>
              <li>Participate in our community features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide and improve our services</li>
              <li>Send you updates and promotional materials (with your consent)</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Analyze website usage and optimize user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure hosting infrastructure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to improve your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              We may use third-party services such as Google Analytics and advertising platforms. These services have their own privacy policies governing the use of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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

