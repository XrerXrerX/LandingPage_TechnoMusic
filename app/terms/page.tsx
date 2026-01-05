/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - TechnoBeats",
  description: "Terms of service and usage guidelines for TechnoBeats",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-invert prose-emerald max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using TechnoBeats, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Service</h2>
            <p className="text-gray-300 mb-4">
              You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Use the service in any way that violates applicable laws or regulations</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use of the service</li>
              <li>Attempt to gain unauthorized access to any portion of the service</li>
              <li>Use the service to transmit malicious code or viruses</li>
              <li>Scrape, copy, or redistribute content without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The service and its original content, features, and functionality are owned by TechnoBeats and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. User Content</h2>
            <p className="text-gray-300 mb-4">
              You retain all rights to any content you submit, post, or display on or through the service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimers</h2>
            <p className="text-gray-300 mb-4">
              The service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              In no event shall TechnoBeats be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These terms shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              Questions about the Terms of Service should be sent to us at:
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

