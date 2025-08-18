/** @format */

import Hero from "@/components/Hero";
import FeaturedTracks from "@/components/FeaturedTracks";
import MusicCategories from "@/components/MusicCategories";
import LatestNews from "@/components/LatestNews";
import { ArrowRight, Play, Users, Calendar, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <FeaturedTracks />
      <MusicCategories />
      <LatestNews />

      {/* Additional Content Sections */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Why Choose TechnoBeats?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your ultimate destination for everything techno - from discovery
              to mastery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Curation",
                description:
                  "Hand-picked tracks and artists by industry professionals with decades of experience in the techno scene.",
                icon: Star,
                color: "emerald",
              },
              {
                title: "Comprehensive Guides",
                description:
                  "In-depth tutorials, production tips, and educational content to help you master techno music.",
                icon: Play,
                color: "purple",
              },
              {
                title: "Active Community",
                description:
                  "Join thousands of techno enthusiasts, producers, and DJs sharing knowledge and passion.",
                icon: Users,
                color: "pink",
              },
              {
                title: "Latest Updates",
                description:
                  "Stay current with the newest releases, festival announcements, and industry developments.",
                icon: Calendar,
                color: "cyan",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-full flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive guides, artist profiles, festival
            coverage, and equipment reviews to take your techno journey to the
            next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/guides"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/artists"
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center"
            >
              <span>Discover Artists</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
