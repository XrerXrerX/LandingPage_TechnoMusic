'use client';

import { Play, Heart, Share2, ExternalLink } from 'lucide-react';

export default function FeaturedTracks() {
  const tracks = [
    {
      id: 1,
      title: "Midnight Pulse",
      artist: "TechnoBeats Featured",
      duration: "4:32",
      videoId: "vuWgH2x0muk",
      likes: "2.4K",
      genre: "Dark Techno"
    },
    {
      id: 2,
      title: "Electric Dreams",
      artist: "TechnoBeats Featured",
      duration: "5:18",
      videoId: "6ZXu9sMdPl4",
      likes: "1.8K",
      genre: "Progressive Techno"
    }
  ];

  return (
    <section id="featured" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Tracks
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our hand-picked selection of the finest techno tracks that define the genre
          </p>
        </div>

        {/* YouTube Videos */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {tracks.map((track) => (
            <div key={track.id} className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                {/* Video Container */}
                <div className="relative aspect-video bg-gray-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${track.videoId}?rel=0&modestbranding=1&theme=dark&autoplay=0&controls=1&showinfo=0`}
                    title={track.title}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                  />
                </div>

                {/* Track Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-gray-400 mb-1">{track.artist}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{track.duration}</span>
                        <span>•</span>
                        <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs">
                          {track.genre}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`https://youtu.be/${track.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors">
                        <Play className="w-4 h-4" />
                        <span className="text-sm">Play</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{track.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Featured Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Underground Gems", count: "150+ tracks", color: "emerald" },
            { title: "Festival Hits", count: "80+ tracks", color: "purple" },
            { title: "Late Night Vibes", count: "200+ tracks", color: "pink" },
            { title: "Progressive Mix", count: "120+ tracks", color: "cyan" }
          ].map((playlist, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer">
              <div className={`w-12 h-12 bg-gradient-to-br from-${playlist.color}-500 to-${playlist.color}-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {playlist.title}
              </h3>
              <p className="text-gray-400 text-sm">{playlist.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}