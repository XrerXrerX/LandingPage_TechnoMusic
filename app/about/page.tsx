import { Music, Users, Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            About TechnoBeats
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your ultimate destination for discovering the best techno music from around the world
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              TechnoBeats is dedicated to bringing you the finest selection of techno music from established artists and emerging talents. 
              We curate the best tracks, provide in-depth reviews, and keep you updated with the latest trends in the electronic dance music scene.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our platform serves as a bridge between music lovers and the incredible world of techno, featuring everything from 
              underground gems to mainstream hits that define the genre.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-emerald-400">500+</div>
            <div className="text-gray-400">Tracks Featured</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-pink-400">10K+</div>
            <div className="text-gray-400">Monthly Visitors</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-purple-400">100+</div>
            <div className="text-gray-400">Artist Reviews</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-blue-400">25+</div>
            <div className="text-gray-400">Countries</div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-emerald-400 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-colors">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Curated Playlists</h3>
              <p className="text-gray-300">
                Expertly crafted playlists featuring the best techno tracks, organized by mood, energy level, and subgenre.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-pink-500 transition-colors">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Artist Spotlights</h3>
              <p className="text-gray-300">
                In-depth features on both legendary techno pioneers and rising stars shaping the future of electronic music.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Music Reviews</h3>
              <p className="text-gray-300">
                Comprehensive reviews of the latest releases, helping you discover your next favorite track or album.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Industry News</h3>
              <p className="text-gray-300">
                Stay updated with the latest happenings in the techno world, from festival announcements to label launches.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-colors">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Educational Content</h3>
              <p className="text-gray-300">
                Learn about techno history, production techniques, and the cultural impact of electronic dance music.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-colors">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Community Hub</h3>
              <p className="text-gray-300">
                Connect with fellow techno enthusiasts and share your passion for electronic music.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 text-center">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            Have a track recommendation or want to collaborate? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:contact@technobeats.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              contact@technobeats.com
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="text-gray-400">Follow us on social media for daily updates</span>
          </div>
        </div>
      </div>
    </div>
  );
}