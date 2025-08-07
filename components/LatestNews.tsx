import { Calendar, ArrowRight, Music, Headphones, Radio } from 'lucide-react';

export default function LatestNews() {
  const news = [
    {
      id: 1,
      title: "Top 10 Techno Festivals to Watch in 2024",
      excerpt: "From Berlin's underground scene to Detroit's iconic Movement Festival, discover the must-attend events.",
      date: "Dec 15, 2024",
      category: "Festivals",
      icon: Music,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Rise of AI-Generated Techno Music",
      excerpt: "Exploring how artificial intelligence is shaping the future of electronic music production.",
      date: "Dec 10, 2024",
      category: "Technology",
      icon: Headphones,
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Underground Labels Making Waves",
      excerpt: "Spotlight on independent record labels pushing the boundaries of modern techno.",
      date: "Dec 5, 2024",
      category: "Industry",
      icon: Radio,
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Latest News & Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, artist spotlights, and industry developments in the techno world
          </p>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => {
            const IconComponent = article.icon;
            return (
              <article
                key={article.id}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:transform hover:translate-y-[-4px]"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-cyan-400 text-sm font-medium">{article.category}</span>
                      <div className="flex items-center text-gray-500 text-xs mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Never Miss a Beat
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest techno news, track recommendations, 
            and exclusive content delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800/50 border border-gray-600 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}