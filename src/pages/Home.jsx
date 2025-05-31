// Home page for Project World
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { ThemeContext } from "../context/ThemeContext"; // Adjust path as needed

const stats = [
  { label: "Projects Sold", value: "1200+", icon: "📦" },
  { label: "Happy Clients", value: "950+", icon: "😊" },
  { label: "Tech Stacks", value: "3+", icon: "💻" },
];

const categories = [
  { name: "Mini Projects", icon: "📱", color: "blue" },          
  { name: "Major Projects", icon: "🌐", color: "orange" },       
  { name: "Advanced Projects", icon: "🤖", color: "yellow" },   
];

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [reviews, setReviews] = useState([]);
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    // Fetch reviews
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error loading reviews:", error));

    // Fetch course data
    fetch("/courseData.json")
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data.computerScienceEngineering);
      })
      .catch((error) => {
        console.error("Error loading course data:", error);
      });
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
        className={`relative py-16 sm:py-24 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-800"
            : "bg-gradient-to-b from-blue-50 to-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your One-Stop Destination for Quality Software Projects
            </h1>
            <p
              className={`text-lg sm:text-xl mb-8 max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Discover a curated collection of ready-made software projects for
              students, developers, and professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
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
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-semibold text-lg"
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
      <div className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-200"></div>
                <div
                  className={`relative rounded-2xl shadow-lg p-8 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-200 ${
                    theme === "dark"
                      ? "bg-gray-900 text-gray-100"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              theme === "dark" ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Project Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, i) => (
              <div
                key={i}
                className={`${
                  bgClasses[category.color]
                } rounded-2xl p-8 text-center transform hover:-translate-y-1 transition-transform duration-200 cursor-pointer shadow-lg hover:shadow-xl`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3
                  className={`text-xl font-semibold ${
                    textPrimaryClasses[category.color]
                  }`}
                >
                  {category.name}
                </h3>
                <p className={`${textSecondaryClasses[category.color]} mt-2`}>
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

      {/* Courses Section */}
      <div className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-blue-50"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Explore Our Notes
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Comprehensive study materials for every semester
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseData?.semesters.map((semesterData) => {
              const semester = semesterData.semester;
              const semesterInfo = {
                1: {
                  icon: "🎓",
                  title: "Foundation",
                  color: "from-blue-500 to-cyan-500"
                },
                2: {
                  icon: "📚",
                  title: "Core Concepts",
                  color: "from-purple-500 to-pink-500"
                },
                3: {
                  icon: "💻",
                  title: "Programming",
                  color: "from-orange-500 to-red-500"
                },
                4: {
                  icon: "🔧",
                  title: "Systems",
                  color: "from-green-500 to-teal-500"
                },
                5: {
                  icon: "🤖",
                  title: "Advanced",
                  color: "from-indigo-500 to-purple-500"
                },
                6: {
                  icon: "🔐",
                  title: "Security",
                  color: "from-pink-500 to-rose-500"
                },
                7: {
                  icon: "🎯",
                  title: "Specialization",
                  color: "from-amber-500 to-orange-500"
                },
                8: {
                  icon: "🚀",
                  title: "Industry Ready",
                  color: "from-emerald-500 to-green-500"
                }
              }[semester];

              return (
                <Link
                  key={semester}
                  to={`/courses?semester=${semester}`}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    theme === "dark"
                      ? "bg-gray-900 hover:bg-gray-800"
                      : "bg-white hover:bg-gray-50"
                  } shadow-lg hover:shadow-xl`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${semesterInfo.color}`}></div>
                  
                  {/* Content */}
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{semesterInfo.icon}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        theme === "dark" 
                          ? "bg-gray-800 text-gray-300" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        Semester {semester}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-3 ${
                      theme === "dark" ? "text-gray-100" : "text-gray-900"
                    }`}>
                      {semesterInfo.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {semesterData.subjects.slice(0, 3).map((subject, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          {subject.name}
                        </div>
                      ))}
                    </div>

                    <div className={`mt-4 pt-4 border-t ${
                      theme === "dark" ? "border-gray-800" : "border-gray-100"
                    }`}>
                      <span className={`inline-flex items-center text-sm font-medium ${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}>
                        View {semesterData.subjects.length} Subjects
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <FeaturedCarousel />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by students and faculty from top institutions across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto perspective-1000">
            {reviews.map((review, index) => (
              <div key={index} className="group h-[400px] [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of Card */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg p-6 [backface-visibility:hidden]">
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl"></div>
                    <div className="pt-4 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-[2px]">
                          <div className="rounded-full overflow-hidden w-full h-full bg-white">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                  review.name
                                )}&background=0D8ABC&color=fff`;
                              }}
                            />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {review.name}
                          </h4>
                          <p className="text-blue-600 font-medium">
                            {review.college}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 line-clamp-4 flex-grow">
                        "{review.review.substring(0, 100)}..."
                      </p>
                      <div className="text-center mt-4 text-sm text-blue-600">
                        <span className="inline-flex items-center gap-1">
                          Read More
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="h-full flex flex-col">
                      <div className="flex-grow">
                        <p className="text-lg mb-6 leading-relaxed">
                          "{review.review}"
                        </p>
                        <div className="space-y-2">
                          <p className="font-semibold">{review.program}</p>
                          <p className="text-blue-100">
                            Batch of {2023 - Math.floor(Math.random() * 3)}
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-white/20 pt-4 mt-4">
                        <h5 className="font-semibold mb-2">
                          Project Completed
                        </h5>
                        <p className="text-sm text-blue-100">
                          {
                            [
                              "Final Year Project",
                              "Major Project",
                              "Semester Project",
                            ][Math.floor(Math.random() * 3)]
                          }
                        </p>
                      </div>
                      <div className="text-center mt-4 text-sm text-white/90">
                        <span className="inline-flex items-center gap-1">
                          Flip Back
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 15l-7-7 7-7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* College Logos */}
          <div className="mt-20 pt-10 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-8">
              Trusted by students from premier institutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <span className="text-xl font-semibold text-gray-400">
                IIT Bombay
              </span>
              <span className="text-xl font-semibold text-gray-400">
                NIT Trichy
              </span>
              <span className="text-xl font-semibold text-gray-400">
                BITS Pilani
              </span>
              <span className="text-xl font-semibold text-gray-400">
                VIT Vellore
              </span>
              <span className="text-xl font-semibold text-gray-400">
                DTU Delhi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className={`py-16 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-800"
            : "bg-gradient-to-b from-white to-blue-50"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden
            }`}
          >
            <div className="p-8 sm:p-12 text-center">
              <h3
                className={`text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-gray-100" : "text-gray-100"
                }`}
              >
                Have a Unique Project Idea? 🚀
              </h3>
              <p
                className={`text-lg mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-gray-300" : "text-gray-200"
                }`}
              >
                Whether it's a college submission, startup MVP, or personal
                project, our team can bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Your Project
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
