/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
              <Image
                src="/logo.png"
                alt="ADS Techno Music"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
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
              href="/artists"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Artists
            </Link>
            <Link
              href="/guides"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Guides
            </Link>
            <Link
              href="/festivals"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Festivals
            </Link>
            <Link
              href="/equipment"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Equipment
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              About
            </Link>
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
                href="/artists"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Artists
              </Link>
              <Link
                href="/guides"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Guides
              </Link>
              <Link
                href="/festivals"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Festivals
              </Link>
              <Link
                href="/equipment"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Equipment
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
