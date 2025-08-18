/** @format */

import {
  Calendar,
  MapPin,
  Users,
  Star,
  Clock,
  ExternalLink,
  Play,
  Heart,
  Share2,
} from "lucide-react";

export default function Festivals() {
  const festivals = [
    {
      id: 1,
      name: "Awakenings Festival",
      location: "Gashouder, Amsterdam, Netherlands",
      date: "June 29-30, 2024",
      description:
        "The world's largest techno festival, Awakenings is a two-day celebration of electronic music featuring the biggest names in techno. With multiple stages, cutting-edge sound systems, and an unparalleled atmosphere, it's a must-attend event for any techno enthusiast.",
      capacity: "35,000+",
      duration: "2 days",
      rating: 4.9,
      price: "€120-€180",
      lineup: [
        "Adam Beyer",
        "Charlotte de Witte",
        "Amelie Lens",
        "Jeff Mills",
        "Richie Hawtin",
      ],
      highlights: [
        "Multiple indoor and outdoor stages",
        "State-of-the-art Funktion-One sound systems",
        "24-hour programming",
        "International food vendors",
        "Art installations and visual effects",
      ],
      review:
        "Awakenings 2023 was absolutely incredible. The production quality, sound systems, and lineup were all world-class. The atmosphere was electric from start to finish, with every DJ delivering exceptional sets. The venue at Gashouder is perfect for techno, with its industrial aesthetic and incredible acoustics.",
      reviewer: "Techno Enthusiast",
      reviewDate: "July 2023",
      image: "/festivals/awakenings.jpg",
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Time Warp",
      location: "Maimarkthalle, Mannheim, Germany",
      date: "April 6, 2024",
      description:
        "Time Warp is one of Germany's most prestigious techno festivals, known for its impeccable sound quality and carefully curated lineups. The festival has been a cornerstone of the European techno scene for over 25 years.",
      capacity: "15,000",
      duration: "1 day",
      rating: 4.8,
      price: "€85-€120",
      lineup: [
        "Richie Hawtin",
        "Sven Väth",
        "Chris Liebing",
        "Len Faki",
        "Ben Klock",
      ],
      highlights: [
        "Legendary sound system",
        "Multiple stages with different vibes",
        "Professional lighting and visuals",
        "International crowd",
        "After-party options",
      ],
      review:
        "Time Warp continues to deliver the highest quality techno experience. The sound system is absolutely mind-blowing, and the lineup is always perfectly curated. The venue is spacious and well-organized, making it easy to move between stages.",
      reviewer: "Berlin Techno Head",
      reviewDate: "April 2023",
      image: "/festivals/time-warp.jpg",
      status: "Upcoming",
    },
    {
      id: 3,
      name: "Movement Detroit",
      location: "Hart Plaza, Detroit, USA",
      date: "May 25-27, 2024",
      description:
        "Movement is the premier techno festival in the United States, held in the birthplace of techno music. This three-day festival celebrates the rich history and future of electronic music with an incredible lineup of local and international artists.",
      capacity: "40,000",
      duration: "3 days",
      rating: 4.7,
      price: "$150-$250",
      lineup: [
        "Jeff Mills",
        "Carl Craig",
        "Derrick May",
        "Juan Atkins",
        "Kevin Saunderson",
      ],
      highlights: [
        "Historic location in techno's birthplace",
        "Multiple stages including underground stage",
        "Local Detroit talent showcase",
        "After-parties throughout the city",
        "Memorial Day weekend timing",
      ],
      review:
        "Movement is more than just a festival - it's a pilgrimage for techno fans. Being in Detroit, the birthplace of techno, adds a special significance. The lineup always includes the Detroit legends alongside international stars, creating a perfect blend of history and innovation.",
      reviewer: "Detroit Techno Veteran",
      reviewDate: "May 2023",
      image: "/festivals/movement.jpg",
      status: "Upcoming",
    },
    {
      id: 4,
      name: "Drumcode Festival",
      location: "Tobacco Dock, London, UK",
      date: "September 14, 2024",
      description:
        "Drumcode Festival brings together the best artists from Adam Beyer's legendary Drumcode label for a day of pure techno excellence. The festival showcases both established artists and rising stars from the label.",
      capacity: "8,000",
      duration: "1 day",
      rating: 4.6,
      price: "£65-£95",
      lineup: [
        "Adam Beyer",
        "Alan Fitzpatrick",
        "Bart Skils",
        "Dense & Pika",
        "Layton Giordani",
      ],
      highlights: [
        "Exclusive Drumcode label showcase",
        "Intimate venue atmosphere",
        "High-quality production",
        "London techno scene",
        "After-party with label artists",
      ],
      review:
        "Drumcode Festival is a techno purist's dream. The lineup is consistently excellent, featuring the best artists from one of techno's most respected labels. The venue at Tobacco Dock is perfect for this type of event, with great sound and atmosphere.",
      reviewer: "London Techno Fan",
      reviewDate: "September 2023",
      image: "/festivals/drumcode.jpg",
      status: "Upcoming",
    },
  ];

  const upcomingEvents = [
    {
      name: "Tomorrowland",
      date: "July 19-21, 2024",
      location: "Boom, Belgium",
    },
    {
      name: "Ultra Music Festival",
      date: "March 22-24, 2024",
      location: "Miami, USA",
    },
    {
      name: "Electric Daisy Carnival",
      date: "May 17-19, 2024",
      location: "Las Vegas, USA",
    },
    {
      name: "Sonar Festival",
      date: "June 13-15, 2024",
      location: "Barcelona, Spain",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Techno Festivals
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the world's most incredible techno festivals, from
            underground gatherings to massive international events
          </p>
        </div>

        {/* Featured Festival */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                    Featured Festival
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Awakenings Festival 2024
                </h2>
                <div className="flex items-center space-x-4 text-gray-400 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Amsterdam, Netherlands</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>June 29-30, 2024</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The world's largest techno festival returns to Amsterdam for
                  another incredible weekend of electronic music. Featuring the
                  biggest names in techno across multiple stages with
                  state-of-the-art sound systems.
                </p>
                <div className="flex items-center space-x-6 text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>35,000+ attendees</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>2 days</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                    Get Tickets
                  </button>
                  <button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-400 mb-4">
                  Featured Artists
                </h3>
                <div className="space-y-3">
                  {festivals[0].lineup.slice(0, 5).map((artist, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3"
                    >
                      <span className="text-white font-medium">{artist}</span>
                      <div className="flex space-x-2">
                        <button className="text-emerald-400 hover:text-emerald-300">
                          <Play className="w-4 h-4" />
                        </button>
                        <button className="text-pink-400 hover:text-pink-300">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Festivals Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {festivals.slice(1).map((festival) => (
            <article
              key={festival.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                  {festival.status}
                </span>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-sm">{festival.rating}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 hover:text-emerald-400 transition-colors">
                {festival.name}
              </h3>

              <div className="flex items-center space-x-4 text-gray-400 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{festival.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{festival.date}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {festival.description}
              </p>

              <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{festival.capacity}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{festival.duration}</span>
                </div>
                <span className="text-emerald-400 font-medium">
                  {festival.price}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
                  View Details
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

        {/* Festival Reviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-emerald-400 mb-12">
            Festival Reviews & Coverage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivals.map((festival) => (
              <div
                key={festival.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {festival.name} Review
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {festival.review}
                </p>
                <div className="flex items-center justify-between text-gray-400 text-xs">
                  <span>{festival.reviewer}</span>
                  <span>{festival.reviewDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
            Other Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {event.name}
                </h3>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 px-4 py-2 rounded-lg transition-colors text-sm">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Festival Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">
            Festival Survival Guide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "What to Bring",
                tips: [
                  "Ear protection",
                  "Comfortable shoes",
                  "Hydration pack",
                  "Portable charger",
                  "Cash and cards",
                ],
              },
              {
                title: "Staying Safe",
                tips: [
                  "Stay hydrated",
                  "Know your limits",
                  "Buddy system",
                  "Emergency contacts",
                  "First aid kit",
                ],
              },
              {
                title: "Getting the Best Experience",
                tips: [
                  "Arrive early",
                  "Plan your schedule",
                  "Explore different stages",
                  "Meet new people",
                  "Take breaks",
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">
              Plan Your Next Festival Adventure
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to festival tickets, travel packages, and
              insider information about the world's best techno events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                Browse All Festivals
              </button>
              <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all">
                Festival Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
