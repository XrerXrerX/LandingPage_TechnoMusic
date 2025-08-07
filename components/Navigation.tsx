/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Music } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-1 rounded-lg group-hover:scale-110 transition-transform">
              <img
                src="/logo.png"
                alt="ADS Techno Music"
                className="w-12 h-12 text-white"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              ADS Techno Music
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              About
            </Link>
            <a
              href="#featured"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Music
            </a>
            <a
              href="#categories"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Categories
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 backdrop-blur-sm rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <a
                href="#featured"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Music
              </a>
              <a
                href="#categories"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
