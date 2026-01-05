/** @format */

import {
  Book,
  Play,
  Clock,
  User,
  Star,
  ArrowRight,
  Music,
  Headphones,
  Settings,
} from "lucide-react";

export default function Guides() {
  const guides = [
    {
      id: 1,
      title: "Complete Guide to Techno Music Production",
      excerpt:
        "Master the fundamentals of techno production from basic drum programming to advanced sound design techniques. This comprehensive guide covers everything you need to create professional-quality techno tracks.",
      author: "DJ TechnoMaster",
      readTime: "45 min read",
      difficulty: "Beginner to Advanced",
      rating: 4.8,
      lessons: 12,
      category: "Production",
      content: [
        "Understanding the 4/4 rhythm structure",
        "Creating powerful kick drums",
        "Designing atmospheric pads and textures",
        "Mixing and mastering techniques",
        "Arrangement and track structure",
        "Using effects and processing",
        "Sample selection and manipulation",
        "Synthesis fundamentals",
        "Groove and swing programming",
        "Professional mixing workflow",
        "Mastering for club systems",
        "Release preparation and distribution",
      ],
    },
    {
      id: 2,
      title: "History of Techno: From Detroit to Global Phenomenon",
      excerpt:
        "Explore the rich history of techno music, from its origins in Detroit's underground scene to its evolution into a worldwide cultural movement that continues to influence electronic music today.",
      author: "Music Historian",
      readTime: "30 min read",
      difficulty: "All Levels",
      rating: 4.9,
      lessons: 8,
      category: "History",
      content: [
        "The birth of techno in Detroit",
        "The Belleville Three: Juan Atkins, Derrick May, Kevin Saunderson",
        "Influence of European electronic music",
        "The rise of acid house and rave culture",
        "Techno's global expansion",
        "Berlin's techno scene and Tresor",
        "Modern techno movements",
        "Future of the genre",
      ],
    },
    {
      id: 3,
      title: "Essential DJ Equipment for Techno Sets",
      excerpt:
        "Learn about the essential equipment every techno DJ needs, from turntables and mixers to modern digital setups. Includes recommendations for different budgets and skill levels.",
      author: "Pro DJ Equipment",
      readTime: "25 min read",
      difficulty: "Beginner to Intermediate",
      rating: 4.7,
      lessons: 6,
      category: "Equipment",
      content: [
        "Turntables vs CDJs vs Controllers",
        "Mixer selection and features",
        "Headphones and monitoring",
        "Speakers and sound systems",
        "Cables and connectivity",
        "Software and digital tools",
      ],
    },
    {
      id: 4,
      title: "Advanced Sound Design for Techno",
      excerpt:
        "Dive deep into advanced sound design techniques specifically tailored for techno music. Learn to create unique sounds that will set your tracks apart from the competition.",
      author: "Sound Designer Pro",
      readTime: "40 min read",
      difficulty: "Advanced",
      rating: 4.6,
      lessons: 10,
      category: "Sound Design",
      content: [
        "Modular synthesis basics",
        "Creating metallic and industrial sounds",
        "Designing evolving textures",
        "Frequency modulation techniques",
        "Granular synthesis applications",
        "Wavetable synthesis for techno",
        "Effects processing chains",
        "Automation and modulation",
        "Field recording integration",
        "Custom sample creation",
      ],
    },
    {
      id: 5,
      title: "Festival Performance Guide for Techno DJs",
      excerpt:
        "Prepare for your first major festival performance with this comprehensive guide covering everything from set preparation to stage presence and crowd interaction.",
      author: "Festival Veteran",
      readTime: "35 min read",
      difficulty: "Intermediate to Advanced",
      rating: 4.8,
      lessons: 7,
      category: "Performance",
      content: [
        "Set preparation and track selection",
        "Reading the crowd and energy management",
        "Technical setup and soundcheck",
        "Stage presence and performance tips",
        "Handling technical difficulties",
        "Building your festival reputation",
        "Networking and industry connections",
      ],
    },
    {
      id: 6,
      title: "Mixing and Mastering for Techno Tracks",
      excerpt:
        "Learn professional mixing and mastering techniques specifically designed for techno music. From basic EQ and compression to advanced mastering for club systems.",
      author: "Mastering Engineer",
      readTime: "50 min read",
      difficulty: "Intermediate to Advanced",
      rating: 4.9,
      lessons: 15,
      category: "Mixing & Mastering",
      content: [
        "Understanding frequency spectrum in techno",
        "Kick drum mixing techniques",
        "Bass management and sub frequencies",
        "Stereo imaging and width",
        "Compression strategies",
        "EQ techniques for clarity",
        "Reverb and delay processing",
        "Distortion and saturation",
        "Limiting and maximization",
        "Mastering for different platforms",
        "Loudness standards and metering",
        "Reference track analysis",
        "Final quality control",
        "Distribution preparation",
        "Vinyl mastering considerations",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Techno Music Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive tutorials, guides, and educational content to help you
            master techno music production, DJing, and understanding the culture
          </p>
        </div>

        {/* Featured Guide */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                    Featured Guide
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Complete Guide to Techno Music Production
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Master the fundamentals of techno production from basic drum
                  programming to advanced sound design techniques. This
                  comprehensive guide covers everything you need to create
                  professional-quality techno tracks.
                </p>
                <div className="flex items-center space-x-6 text-gray-400 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>DJ TechnoMaster</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>45 min read</span>
                  </div>
                  <div className="flex items-center">
                    <Book className="w-4 h-4 mr-2" />
                    <span>12 lessons</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                  Start Learning
                </button>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-400 mb-4">
                  What You&apos;ll Learn
                </h3>
                <div className="space-y-2">
                  {guides[0].content.slice(0, 6).map((lesson, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-300"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      <span className="text-sm">{lesson}</span>
                    </div>
                  ))}
                  <div className="text-emerald-400 text-sm font-medium mt-4">
                    +6 more lessons
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {guides.slice(1).map((guide) => (
            <article
              key={guide.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    guide.category === "History"
                      ? "bg-purple-500/20 text-purple-400"
                      : guide.category === "Equipment"
                      ? "bg-orange-500/20 text-orange-400"
                      : guide.category === "Sound Design"
                      ? "bg-pink-500/20 text-pink-400"
                      : guide.category === "Performance"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-cyan-500/20 text-cyan-400"
                  }`}
                >
                  {guide.category}
                </span>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-sm">{guide.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 hover:text-emerald-400 transition-colors">
                {guide.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {guide.excerpt}
              </p>

              <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{guide.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{guide.readTime}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">
                  {guide.lessons} lessons • {guide.difficulty}
                </span>
                <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-emerald-400 mb-12">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Production",
                icon: Music,
                count: "15 guides",
                color: "emerald",
              },
              {
                name: "History",
                icon: Book,
                count: "8 guides",
                color: "purple",
              },
              {
                name: "Equipment",
                icon: Settings,
                count: "12 guides",
                color: "orange",
              },
              {
                name: "Performance",
                icon: Headphones,
                count: "10 guides",
                color: "blue",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Ready to Master Techno?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of techno enthusiasts who are already learning and
              improving their skills with our comprehensive guides and
              tutorials.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Explore All Guides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
