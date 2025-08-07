/** @format */

"use client";

import { Play, Headphones, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-emerald-900/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ADS
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              TECHNO
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the best techno music recommendations, curated playlists,
            and the latest electronic dance music trends
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
            <Play className="w-5 h-5" />
            <span>Start Listening</span>
          </button>
          <button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all transform hover:scale-105">
            <Headphones className="w-5 h-5" />
            <span>Featured Tracks</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full mx-auto mb-4">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-gray-400">Curated Tracks</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-2">10K+</div>
            <div className="text-gray-400">Monthly Listeners</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-pink-400 mb-2">25+</div>
            <div className="text-gray-400">Countries Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
}
