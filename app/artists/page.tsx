/** @format */

import {
  Calendar,
  MapPin,
  Music,
  Award,
  ExternalLink,
  Play,
  Heart,
} from "lucide-react";

export default function Artists() {
  const artists = [
    {
      id: 1,
      name: "Charlotte de Witte",
      country: "Belgium",
      genre: "Techno",
      bio: "Charlotte de Witte is one of techno's most prominent figures, known for her high-energy performances and innovative productions. Starting her career as Raving George, she has evolved into a global techno ambassador, headlining major festivals worldwide.",
      achievements: [
        "DJ Mag Top 100 DJs",
        "Tomorrowland resident",
        "KNTXT label founder",
      ],
      latestRelease: "Apollo EP",
      releaseDate: "2024",
      featuredTracks: ["Apollo", "Sgadi Li Mi", "Doppler"],
      upcomingEvents: [
        "Awakenings Festival",
        "Tomorrowland",
        "Ultra Music Festival",
      ],
      socialMedia: {
        instagram: "charlottedewittemusic",
        twitter: "charlottedewitte",
        spotify: "charlottedewitte",
      },
      image: "/artists/charlotte-de-witte.jpg",
    },
    {
      id: 2,
      name: "Amelie Lens",
      country: "Belgium",
      genre: "Techno",
      bio: "Amelie Lens has rapidly risen to become one of techno's most influential artists. Her hypnotic productions and powerful DJ sets have earned her a dedicated global following and recognition as a leading force in modern techno.",
      achievements: [
        "Lenske label founder",
        "Fabric London resident",
        "Awakenings regular",
      ],
      latestRelease: "Higher",
      releaseDate: "2024",
      featuredTracks: ["Higher", "In Silence", "Follow"],
      upcomingEvents: ["Awakenings", "Drumcode Festival", "Time Warp"],
      socialMedia: {
        instagram: "amelielens",
        twitter: "amelielens",
        spotify: "amelielens",
      },
      image: "/artists/amelie-lens.jpg",
    },
    {
      id: 3,
      name: "Adam Beyer",
      country: "Sweden",
      genre: "Techno",
      bio: "Adam Beyer is a techno legend and the founder of Drumcode Records. With over 25 years in the industry, he has shaped the sound of modern techno and continues to be one of the most respected figures in electronic music.",
      achievements: [
        "Drumcode Records founder",
        "25+ years in techno",
        "Global festival headliner",
      ],
      latestRelease: "Simulator",
      releaseDate: "2024",
      featuredTracks: ["Simulator", "Your Mind", "Teach Me"],
      upcomingEvents: ["Drumcode Festival", "Awakenings", "Time Warp"],
      socialMedia: {
        instagram: "adambeyer",
        twitter: "adambeyer",
        spotify: "adambeyer",
      },
      image: "/artists/adam-beyer.jpg",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Artists
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the world&apos;s most influential techno artists, from legendary
            pioneers to rising stars shaping the future of electronic music
          </p>
        </div>

        {/* Artists Grid */}
        <div className="space-y-16">
          {artists.map((artist) => (
            <article
              key={artist.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Artist Image */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl p-4">
                    <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
                      <Music className="w-16 h-16 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-2">
                      {artist.name}
                    </h2>
                    <div className="flex items-center space-x-4 text-gray-400 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{artist.country}</span>
                      </div>
                      <div className="flex items-center">
                        <Music className="w-4 h-4 mr-1" />
                        <span>{artist.genre}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {artist.bio}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-cyan-400 mb-3">
                      Key Achievements
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {artist.achievements.map((achievement, index) => (
                        <span
                          key={index}
                          className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Latest Release */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-purple-400 mb-3">
                      Latest Release
                    </h3>
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">
                            {artist.latestRelease}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {artist.releaseDate}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="bg-emerald-500 hover:bg-emerald-600 p-2 rounded-full transition-colors">
                            <Play className="w-4 h-4 text-white" />
                          </button>
                          <button className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition-colors">
                            <Heart className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Tracks */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-pink-400 mb-3">
                      Featured Tracks
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {artist.featuredTracks.map((track, index) => (
                        <div
                          key={index}
                          className="bg-gray-700/30 rounded-lg p-3 text-center"
                        >
                          <span className="text-white text-sm">{track}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-orange-400 mb-3">
                      Upcoming Events
                    </h3>
                    <div className="space-y-2">
                      {artist.upcomingEvents.map((event, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-300"
                        >
                          <Calendar className="w-4 h-4 mr-2 text-orange-400" />
                          <span className="text-sm">{event}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <span className="text-gray-500">
                      Follow on social media
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              Discover More Artists
            </h3>
            <p className="text-gray-300 mb-6">
              Explore our extensive collection of techno artists, from
              underground legends to mainstream stars
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Browse All Artists
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
