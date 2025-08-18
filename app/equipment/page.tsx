/** @format */

import {
  Star,
  DollarSign,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Play,
  Heart,
  Share2,
} from "lucide-react";

export default function Equipment() {
  const equipment = [
    {
      id: 1,
      name: "Pioneer CDJ-3000",
      category: "DJ Equipment",
      price: "$2,199",
      rating: 4.9,
      review:
        "The Pioneer CDJ-3000 represents the pinnacle of professional DJ technology. With its 9-inch touchscreen display, advanced waveform analysis, and seamless rekordbox integration, this is the gold standard for club and festival DJs. The build quality is exceptional, and the jog wheel response is incredibly precise.",
      pros: [
        "9-inch high-resolution touchscreen",
        "Advanced waveform analysis",
        "Seamless rekordbox integration",
        "Professional build quality",
        "Excellent jog wheel response",
      ],
      cons: [
        "Very expensive",
        "Requires rekordbox subscription",
        "Steep learning curve",
      ],
      specs: {
        Display: "9-inch touchscreen",
        Connectivity: "USB, LAN, WiFi",
        Formats: "MP3, WAV, FLAC, AIFF",
        Weight: "3.2 kg",
        Dimensions: "320 x 107 x 405 mm",
      },
      bestFor: "Professional DJs and clubs",
      image: "/equipment/cdj-3000.jpg",
    },
    {
      id: 2,
      name: "Roland TR-8S",
      category: "Drum Machine",
      price: "$699",
      rating: 4.7,
      review:
        "The Roland TR-8S is a modern take on the classic TR-808 and TR-909 drum machines. It combines the iconic sounds of these legendary machines with modern features like USB audio interface, extensive sound customization, and intuitive sequencing. Perfect for both studio production and live performance.",
      pros: [
        "Classic 808/909 sounds",
        "USB audio interface",
        "Extensive sound customization",
        "Intuitive sequencing",
        "Great for live performance",
      ],
      cons: ["Limited polyphony", "Menu diving required", "No song mode"],
      specs: {
        Sounds: "808, 909, 707, 727",
        Tracks: "11 tracks",
        Patterns: "128 patterns",
        Connectivity: "USB, MIDI, Audio",
        Weight: "1.8 kg",
      },
      bestFor: "Techno producers and live performers",
      image: "/equipment/tr-8s.jpg",
    },
    {
      id: 3,
      name: "Moog Sub 37",
      category: "Synthesizer",
      price: "$1,599",
      rating: 4.8,
      review:
        "The Moog Sub 37 is a powerful analog synthesizer that delivers the warm, rich tones that Moog is famous for. With its dual oscillators, extensive modulation options, and intuitive interface, it's perfect for creating deep, atmospheric techno sounds. The build quality is exceptional, and the sound is simply incredible.",
      pros: [
        "Warm analog sound",
        "Dual oscillators",
        "Extensive modulation",
        "Intuitive interface",
        "Excellent build quality",
      ],
      cons: ["Expensive", "Large footprint", "No presets"],
      specs: {
        Oscillators: "2 VCOs",
        Filter: "Multidrive filter",
        Envelopes: "2 ADSR",
        LFO: "1 LFO",
        Keys: "37 keys",
      },
      bestFor: "Studio producers and sound designers",
      image: "/equipment/sub-37.jpg",
    },
    {
      id: 4,
      name: "Native Instruments Maschine+",
      category: "Groove Production",
      price: "$1,399",
      rating: 4.6,
      review:
        "The Maschine+ is a standalone groove production system that combines the power of Native Instruments software with dedicated hardware. It's incredibly versatile, allowing you to create complete tracks without a computer. The workflow is intuitive, and the sound library is extensive.",
      pros: [
        "Standalone operation",
        "Extensive sound library",
        "Intuitive workflow",
        "High-quality samples",
        "Great for live performance",
      ],
      cons: ["Expensive", "Limited screen size", "Software dependency"],
      specs: {
        Processor: "ARM Cortex-A17",
        RAM: "4GB",
        Storage: "32GB SSD",
        Display: "4.3-inch color screen",
        Pads: "16 velocity-sensitive",
      },
      bestFor: "Groove producers and live performers",
      image: "/equipment/maschine-plus.jpg",
    },
    {
      id: 5,
      name: "Sennheiser HD 25",
      category: "Headphones",
      price: "$199",
      rating: 4.9,
      review:
        "The Sennheiser HD 25 is the industry standard for DJ headphones. With its excellent sound isolation, durable build, and accurate sound reproduction, it's the choice of professional DJs worldwide. The split headband design makes it comfortable for long sessions, and the sound quality is exceptional.",
      pros: [
        "Excellent sound isolation",
        "Durable build quality",
        "Accurate sound reproduction",
        "Comfortable for long sessions",
        "Industry standard",
      ],
      cons: [
        "Cable not detachable",
        "Can be tight initially",
        "Limited bass extension",
      ],
      specs: {
        Driver: "Dynamic",
        Impedance: "70 ohms",
        Frequency: "16-22,000 Hz",
        Sensitivity: "120 dB",
        Weight: "140g",
      },
      bestFor: "Professional DJs and producers",
      image: "/equipment/hd-25.jpg",
    },
    {
      id: 6,
      name: "Arturia MicroFreak",
      category: "Synthesizer",
      price: "$349",
      rating: 4.5,
      review:
        "The Arturia MicroFreak is an incredibly versatile and affordable synthesizer that packs a lot of power into a small package. With its digital oscillators, analog filter, and extensive modulation options, it's perfect for creating unique techno sounds. The touch keyboard is innovative and expressive.",
      pros: [
        "Very affordable",
        "Versatile sound engine",
        "Touch keyboard",
        "Extensive modulation",
        "Compact size",
      ],
      cons: [
        "Limited polyphony",
        "Touch keyboard takes getting used to",
        "No built-in effects",
      ],
      specs: {
        Oscillators: "Digital wavetable",
        Filter: "Analog filter",
        Envelopes: "2 ADSR",
        LFO: "1 LFO",
        Keys: "25 touch keys",
      },
      bestFor: "Budget-conscious producers",
      image: "/equipment/microfreak.jpg",
    },
  ];

  const categories = [
    { name: "DJ Equipment", count: "12 reviews", color: "emerald" },
    { name: "Synthesizers", count: "8 reviews", color: "purple" },
    { name: "Drum Machines", count: "6 reviews", color: "pink" },
    { name: "Headphones", count: "4 reviews", color: "blue" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Equipment Reviews
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive reviews of the best techno production and DJ
            equipment, from affordable beginner gear to professional studio
            tools
          </p>
        </div>

        {/* Featured Equipment */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                    Featured Review
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Pioneer CDJ-3000
                </h2>
                <div className="flex items-center space-x-4 text-gray-400 mb-4">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>$2,199</span>
                  </div>
                  <span className="text-gray-500">|</span>
                  <span>Professional DJ Equipment</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The Pioneer CDJ-3000 represents the pinnacle of professional
                  DJ technology. With its 9-inch touchscreen display, advanced
                  waveform analysis, and seamless rekordbox integration, this is
                  the gold standard for club and festival DJs.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                    Read Full Review
                  </button>
                  <button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all">
                    Check Price
                  </button>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-400 mb-4">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {equipment[0].pros.slice(0, 4).map((pro, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
                      <span className="text-sm">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-bold text-red-400 mb-2">Cons</h4>
                  <div className="space-y-2">
                    {equipment[0].cons.slice(0, 2).map((con, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-300"
                      >
                        <AlertCircle className="w-4 h-4 mr-2 text-red-400" />
                        <span className="text-sm">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {equipment.slice(1).map((item) => (
            <article
              key={item.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-sm">{item.rating}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 hover:text-emerald-400 transition-colors">
                {item.name}
              </h3>

              <div className="flex items-center space-x-4 text-gray-400 mb-4">
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="font-medium">{item.price}</span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-sm">{item.bestFor}</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {item.review.substring(0, 150)}...
              </p>

              <div className="flex items-center justify-between">
                <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
                  Read Review
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-emerald-400">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-pink-400">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
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
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buying Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
            Techno Equipment Buying Guide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "For Beginners",
                budget: "$500-1000",
                recommendations: [
                  "Arturia MicroFreak",
                  "Native Instruments Maschine",
                  "Sennheiser HD 25",
                ],
              },
              {
                title: "For Intermediate",
                budget: "$1000-3000",
                recommendations: [
                  "Roland TR-8S",
                  "Moog Sub 37",
                  "Pioneer DDJ-1000",
                ],
              },
              {
                title: "For Professionals",
                budget: "$3000+",
                recommendations: [
                  "Pioneer CDJ-3000",
                  "Modular Synth Setup",
                  "High-end Studio Monitors",
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-purple-400 mb-4">
                  {section.title}
                </h3>
                <div className="text-emerald-400 font-medium mb-4">
                  Budget: {section.budget}
                </div>
                <ul className="space-y-2">
                  {section.recommendations.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Get the Right Gear for Your Sound
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert reviews help you make informed decisions about your
              techno production and DJ equipment. From budget-friendly options
              to professional-grade gear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                Browse All Reviews
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all">
                Equipment Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
