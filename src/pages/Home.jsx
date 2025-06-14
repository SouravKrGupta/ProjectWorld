// Home page for Zypject
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { ThemeContext } from "../context/ThemeContext"; // Adjust path as needed

const stats = [
  { label: "Projects Ready", value: "25+", icon: "📦" }, // or "Projects Available"
  { label: "Clients Onboarded", value: "10+", icon: "😊" }, // or "Early Clients"
  { label: "Tech Stacks", value: "5+", icon: "💻" }, // Django, MySQL, Node, MongoDB, React
];


const categories = [
  { name: "Mini Projects", icon: "📱", color: "blue" },          
  { name: "Major Projects", icon: "🌐", color: "orange" },       
  { name: "Advanced Projects", icon: "🤖", color: "yellow" },   
];

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error loading reviews:", error));
  }, []);

  const bgClasses = {
    blue: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
    orange: "bg-gradient-to-r from-orange-500 to-pink-500 text-white",
    yellow: "bg-gradient-to-r from-yellow-400 to-pink-400 text-white",
  };

  const textPrimaryClasses = {
    blue: "text-gray-900 dark:text-gray-100",
    orange: "text-gray-900 dark:text-gray-100",
    yellow: "text-gray-900 dark:text-gray-100",
  };

  const textSecondaryClasses = {
    blue: "text-gray-800 dark:text-gray-200",
    orange: "text-gray-800 dark:text-gray-200",
    yellow: "text-gray-800 dark:text-gray-200",
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`relative py-12 sm:py-16 lg:py-24 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-800"
            : "bg-gradient-to-b from-blue-50 to-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your One-Stop Destination for Quality Software Projects
            </h1>
            <p
              className={`text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Discover a curated collection of ready-made software projects for
              students, developers, and professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-semibold text-base sm:text-lg w-full sm:w-auto"
              >
                Browse Projects
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-semibold text-base sm:text-lg w-full sm:w-auto"
              >
                Custom Project
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-12 sm:py-16 lg:py-24 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-200"></div>
                <div
                  className={`relative rounded-2xl shadow-lg p-6 sm:p-8 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-200 ${
                    theme === "dark"
                      ? "bg-gray-900 text-gray-100"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div
        className={`py-12 sm:py-16 lg:py-24 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${
              theme === "dark" ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Project Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, i) => (
              <div
                key={i}
                className={`${
                  bgClasses[category.color]
                } rounded-2xl p-6 sm:p-8 text-center transform hover:-translate-y-1 transition-transform duration-200 cursor-pointer shadow-lg hover:shadow-xl`}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{category.icon}</div>
                <h3
                  className={`text-lg sm:text-xl font-semibold ${
                    textPrimaryClasses[category.color]
                  }`}
                >
                  {category.name}
                </h3>
                <p className={`${textSecondaryClasses[category.color]} mt-2 text-sm sm:text-base`}>
                  Perfect for{" "}
                  {category.name === "Mini Projects"
                    ? "beginners"
                    : category.name === "Major Projects"
                    ? "intermediate"
                    : "advanced"}{" "}
                  developers
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className={`py-12 sm:py-16 lg:py-24 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FeaturedCarousel />
        </div>
      </div>

      {/* DSA Sheets Section */}
      <div className={`py-12 sm:py-16 lg:py-24 relative overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-b from-white via-blue-50/20 to-white"}`}>
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                Prepare for Technical Interviews 
              </h2>
              <p className={`text-base sm:text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
                Access hand-picked DSA sheets from India's best tech educators and YouTubers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left side - Featured Educators */}
              <div className={`group p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${theme === "dark" ? "bg-gray-900" : "bg-white/90 backdrop-blur-sm"}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl transform transition-transform group-hover:scale-105"></div>
                <h3 className={`relative text-lg sm:text-xl font-semibold mb-6 sm:mb-8 pb-3 border-b ${theme === "dark" ? "text-white border-gray-700" : "text-gray-900 border-gray-200"}`}>
                  Learn from the Best 🌟
                </h3>
                <ul className="relative space-y-4 sm:space-y-6">
                  <li className="flex items-center transform transition-transform hover:translate-x-2">
                    <span className="mr-3 sm:mr-4 text-xl sm:text-2xl text-yellow-500">⭐</span>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Striver (Raj Vikramaditya)
                      </h4>
                      <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        Take U Forward - SDE Sheet
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center transform transition-transform hover:translate-x-2">
                    <span className="mr-3 sm:mr-4 text-xl sm:text-2xl text-yellow-500">⭐</span>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Love Babbar
                      </h4>
                      <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        450 DSA Questions Sheet
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center transform transition-transform hover:translate-x-2">
                    <span className="mr-3 sm:mr-4 text-xl sm:text-2xl text-yellow-500">⭐</span>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Fraz
                      </h4>
                      <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        LeadCoding 250 Questions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center transform transition-transform hover:translate-x-2">
                    <span className="mr-3 sm:mr-4 text-xl sm:text-2xl text-yellow-500">⭐</span>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Apna College
                      </h4>
                      <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        375 Curated Problems
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center transform transition-transform hover:translate-x-2">
                    <span className="mr-3 sm:mr-4 text-xl sm:text-2xl text-yellow-500">⭐</span>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Arsh Goyal
                      </h4>
                      <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        SDE Sheet 280 Questions
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right side - Call to Action */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-200"></div>
                <div className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-200`}>
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 pb-3 border-b border-white/20">
                    Why These DSA Sheets? 🚀
                  </h3>
                  <ul className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <li className="flex items-center transform transition-transform hover:translate-x-2">
                      <span className="mr-3 sm:mr-4 text-xl sm:text-2xl">✨</span>
                      <span className="text-sm sm:text-base text-blue-100">Created by working professionals from Google, Amazon, Microsoft</span>
                    </li>
                    <li className="flex items-center transform transition-transform hover:translate-x-2">
                      <span className="mr-3 sm:mr-4 text-xl sm:text-2xl">✨</span>
                      <span className="text-sm sm:text-base text-blue-100">Most followed DSA educators on YouTube</span>
                    </li>
                    <li className="flex items-center transform transition-transform hover:translate-x-2">
                      <span className="mr-3 sm:mr-4 text-xl sm:text-2xl">✨</span>
                      <span className="text-sm sm:text-base text-blue-100">Proven success in placements & interviews</span>
                    </li>
                    <li className="flex items-center transform transition-transform hover:translate-x-2">
                      <span className="mr-3 sm:mr-4 text-xl sm:text-2xl">✨</span>
                      <span className="text-sm sm:text-base text-blue-100">Free access to all practice sheets</span>
                    </li>
                  </ul>
                  <Link
                    to="/dsa-sheets"
                    className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg font-semibold text-sm sm:text-base"
                  >
                    Access All DSA Sheets
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-8 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 sm:w-96 h-48 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-48 sm:w-96 h-48 sm:h-96 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-6">
              Our Vision & Impact
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Shaping the future of technical education and career development
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {reviews.map((item) => (
              <div key={item.id} className="group h-[360px] sm:h-[420px] lg:h-[480px] [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of Card */}
                  <div className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg [backface-visibility:hidden] flex flex-col">
                    <div className={`h-16 sm:h-20 lg:h-24 ${item.iconBg} rounded-t-xl sm:rounded-t-2xl flex items-center justify-center flex-shrink-0`}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              item.title
                            )}&background=0D8ABC&color=fff`;
                          }}
                        />
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 lg:p-6 flex-grow flex flex-col">
                      <div className="mb-2 sm:mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-blue-600 font-medium uppercase tracking-wider">{item.subtitle}</p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-6 flex-grow">
                        {item.content}
                      </p>
                      <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {item.category}
                          </span>
                          <span className="inline-flex items-center text-blue-600 text-xs font-medium">
                            View Details
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className={`absolute inset-0 ${item.iconBg} text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col`}>
                    <div className="mb-3 sm:mb-4 flex-shrink-0">
                      <h4 className="text-base sm:text-lg font-bold mb-2">{item.highlight}</h4>
                      <div className="h-0.5 w-12 bg-white/30 rounded"></div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-[12]">
                        {item.content}
                      </p>
                    </div>
                    <div className="pt-3 sm:pt-4 mt-auto">
                      <h5 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Metrics</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(item.metrics).map(([key, value]) => (
                          <div key={key} className="bg-white/10 rounded-lg p-2 sm:p-2.5">
                            <div className="text-xs sm:text-sm font-bold text-white mb-0.5">{value}</div>
                            <div className="text-[8px] sm:text-[10px] text-white/80 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Propositions */}
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 lg:pt-10 border-t border-gray-200">
            <p className="text-center text-base sm:text-lg font-medium mb-6 sm:mb-8 lg:mb-10 text-gray-600">
              Our Commitment to Excellence
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6">
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700 bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm sm:text-base">Quality First</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700 bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm sm:text-base">Modern Tech</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700 bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm sm:text-base">Expert Support</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700 bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm sm:text-base">Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className={`py-8 sm:py-12 lg:py-16 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-800"
            : "bg-gradient-to-b from-white to-blue-50"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden`}
          >
            <div className="p-6 sm:p-8 lg:p-12 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-100">
                Have a Unique Project Idea? 🚀
              </h3>
              <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto text-gray-200">
                Whether it's a college submission, startup MVP, or personal
                project, our team can bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm sm:text-base lg:text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Your Project
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
