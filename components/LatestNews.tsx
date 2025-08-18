/** @format */

import { Calendar, ArrowRight, Music, Headphones, Radio } from "lucide-react";

export default function LatestNews() {
  const news = [
    {
      id: 1,
      title: "Top 10 Techno Festivals to Watch in 2024",
      excerpt:
        "From Berlin's underground scene to Detroit's iconic Movement Festival, discover the must-attend events that will define the techno landscape this year. Our comprehensive guide covers everything from ticket prices to lineup predictions.",
      date: "Dec 15, 2024",
      category: "Festivals",
      icon: Music,
      readTime: "12 min read",
      content:
        "The techno festival scene is evolving rapidly, with new events emerging alongside established institutions. This year promises to be particularly exciting with the return of several major festivals and the introduction of innovative new formats. From the industrial warehouses of Berlin to the open-air stages of Amsterdam, techno enthusiasts have more options than ever to experience their favorite music in incredible settings.",
    },
    {
      id: 2,
      title: "The Rise of AI-Generated Techno Music: Revolution or Evolution?",
      excerpt:
        "Exploring how artificial intelligence is shaping the future of electronic music production, from composition algorithms to mastering tools that are changing how we create and consume techno.",
      date: "Dec 10, 2024",
      category: "Technology",
      icon: Headphones,
      readTime: "15 min read",
      content:
        "Artificial intelligence is transforming every aspect of music production, and techno is no exception. From AI-powered drum machines to intelligent mastering systems, the technology is enabling producers to create music in ways that were previously impossible. However, this raises important questions about creativity, authenticity, and the future role of human artists in electronic music.",
    },
    {
      id: 3,
      title: "Underground Labels Making Waves: The New Generation of Techno",
      excerpt:
        "Spotlight on independent record labels pushing the boundaries of modern techno, from experimental sound design to innovative distribution methods that are reshaping the industry.",
      date: "Dec 5, 2024",
      category: "Industry",
      icon: Radio,
      readTime: "10 min read",
      content:
        "While major labels continue to dominate the mainstream, a new generation of independent techno labels is emerging, bringing fresh perspectives and innovative approaches to electronic music. These labels are not just releasing music; they're building communities, fostering new talent, and pushing the boundaries of what techno can be.",
    },
    {
      id: 4,
      title: "The Evolution of Techno Sound Design: From Analog to Digital",
      excerpt:
        "A deep dive into how sound design techniques have evolved in techno music, from the early days of analog synthesis to modern digital workflows.",
      date: "Dec 1, 2024",
      category: "Production",
      icon: Music,
      readTime: "18 min read",
      content:
        "Techno's sonic palette has undergone a remarkable transformation over the past three decades. What began with simple drum machines and basic synthesizers has evolved into a sophisticated art form that combines analog warmth with digital precision. This evolution reflects not just technological advancement, but also changing artistic sensibilities and cultural influences.",
    },
    {
      id: 5,
      title: "Women in Techno: Breaking Barriers and Shaping the Future",
      excerpt:
        "Celebrating the contributions of female artists, producers, and industry professionals who are reshaping the techno landscape and inspiring the next generation.",
      date: "Nov 28, 2024",
      category: "Culture",
      icon: Radio,
      readTime: "14 min read",
      content:
        "The techno scene has historically been male-dominated, but women are increasingly making their mark as artists, producers, DJs, and industry leaders. From pioneering figures like Ellen Allien to rising stars like Amelie Lens, women are not just participating in techno culture—they're actively shaping its future and breaking down barriers for the next generation.",
    },
    {
      id: 6,
      title: "The Psychology of Techno: Why We're Drawn to the Beat",
      excerpt:
        "Exploring the scientific and psychological reasons behind techno's powerful appeal, from brain chemistry to cultural psychology.",
      date: "Nov 25, 2024",
      category: "Science",
      icon: Headphones,
      readTime: "16 min read",
      content:
        "Techno music has a unique ability to create powerful emotional and physical responses in listeners. This isn't just about personal taste—there's actual science behind why the repetitive beats, driving basslines, and hypnotic rhythms of techno can be so compelling. Understanding these psychological mechanisms helps explain techno's enduring appeal across cultures and generations.",
    },
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
            Stay updated with the latest trends, artist spotlights, and industry
            developments in the techno world
          </p>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
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
                      <span className="text-cyan-400 text-sm font-medium">
                        {article.category}
                      </span>
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

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {article.content.substring(0, 200)}...
                  </p>

                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                    <span className="mr-2">Read Full Article</span>
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
            Subscribe to our newsletter and get the latest techno news, track
            recommendations, and exclusive content delivered straight to your
            inbox.
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
