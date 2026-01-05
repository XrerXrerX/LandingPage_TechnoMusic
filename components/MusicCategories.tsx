import { Zap, Moon, Flame, Star, Waves, Target } from 'lucide-react';

export default function MusicCategories() {
  const categories = [
    {
      icon: Zap,
      title: "High Energy",
      description: "Explosive tracks that fuel your adrenaline",
      color: "emerald",
      tracks: "180+ tracks"
    },
    {
      icon: Moon,
      title: "Dark Techno",
      description: "Deep, mysterious sounds for the night",
      color: "purple",
      tracks: "120+ tracks"
    },
    {
      icon: Flame,
      title: "Festival Bangers",
      description: "Crowd favorites from major festivals",
      color: "orange",
      tracks: "95+ tracks"
    },
    {
      icon: Star,
      title: "Progressive",
      description: "Evolving soundscapes and building energy",
      color: "cyan",
      tracks: "150+ tracks"
    },
    {
      icon: Waves,
      title: "Minimal Techno",
      description: "Clean, stripped-down electronic beats",
      color: "pink",
      tracks: "110+ tracks"
    },
    {
      icon: Target,
      title: "Hard Techno",
      description: "Industrial strength beats for serious ravers",
      color: "red",
      tracks: "85+ tracks"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Music Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore different styles and moods of techno music, from underground classics to festival anthems
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer hover:transform hover:translate-y-[-8px]"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400">{category.tracks}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                  <span className="mr-2">Explore</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              Can&apos;t Find Your Style?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We&apos;re constantly expanding our collection. Let us know what genre you&apos;d like to see more of, 
              and we&apos;ll curate the best tracks just for you.
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Request a Genre
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}