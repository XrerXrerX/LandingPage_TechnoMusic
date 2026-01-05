/** @format */

import Link from "next/link";
import Image from "next/image";
import {
  Music,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-2 rounded-lg">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                TechnoBeats
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your ultimate destination for discovering the best techno music
              from around the world. We curate the finest electronic dance music
              tracks and keep you updated with the latest trends.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Youtube channel"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-emerald-400 mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                About Us
              </Link>
              <a
                href="#featured"
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Featured Tracks
              </a>
              <a
                href="#categories"
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Music Categories
              </a>
              <Link
                href="/privacy"
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-emerald-400 mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a
                  href="mailto:dikikiki.dk@gmail.com"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  dikikiki.dk@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+62 (858) 1156-8813</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Tangerang, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
        {/* Powered By Section */}
        <div className=" py-6">
          <div className="flex flex-col md:flex-row justify-start items-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="text-gray-400 text-sm">Powered by : </span>
            <div className="flex items-center space-x-2">
              <Image
                src="/logo-ligal.png"
                alt="PT. Lintas Inovasi Global"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-gray-300 text-sm font-medium">
                PT. Lintas Inovasi Global
              </span>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ADS Techno Music. All rights reserved. Made with ❤️ for
              techno lovers worldwide.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
