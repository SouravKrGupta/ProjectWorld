import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Mentorship = () => {
  const { theme } = useContext(ThemeContext);

  const mentorshipFeatures = [
    {
      title: "Real-Time Industry Experience",
      description: "Learn from professionals currently working at Microsoft, Google, Amazon, and other top tech companies",
      icon: "💼",
      gradient: "from-blue-600 to-indigo-600",
      highlights: [
        "Live coding sessions",
        "Real project walkthroughs",
        "Industry best practices",
      ],
    },
    {
      title: "Upskilling Guidance",
      description: "Structured learning paths to master in-demand technologies and skills",
      icon: "📈",
      gradient: "from-purple-600 to-pink-600",
      highlights: [
        "Technology roadmaps",
        "Skill assessment",
        "Personalized learning plans",
      ],
    },
    {
      title: "Placement Preparation",
      description: "Comprehensive support for cracking interviews at top companies",
      icon: "🎯",
      gradient: "from-green-600 to-teal-600",
      highlights: [
        "Mock interviews",
        "Resume optimization",
        "Company-specific strategies",
      ],
    },
  ];

  const mentors = [
    {
      name: "Abhishek Kumar Gupta",
      company: "Microsoft",
      role: "Software Engineer 2",
      experience: "3+ years",
      location: "Bengaluru, Karnataka, India",
      education: "BTech in CSE @IIT Ropar",
      previousCompany: "Ex-Orange Power Ltd",
      about: "With a robust foundation in Computer Science from IIT Ropar, my journey has led me to Microsoft, where I apply my expertise in C++, Python, and Machine Learning to create innovative software solutions. At the heart of my work is a commitment to continuous improvement, favoring progress over perfection. As part of a dynamic team at Microsoft, we've fostered a culture of problem-solving, leveraging my skills in database and software development, as well as my proficiency in web technologies like React and backend frameworks such as Django and FastAPI/Flask. Always keen on growth, I embrace new challenges and opportunities with an open mind.",
      expertise: ["C++", "Python", "Machine Learning", "Database Development", "Software Development", "React", "Django", "FastAPI", "Flask"],
      services: ["Application Development", "Cloud Application Development", "Database Development", "Web Development", "Custom Software Development", "Cloud Management", "Mobile Application Development", "Software Testing"],
      image: "https://media.licdn.com/dms/image/v2/D5603AQF8HPMuptpovw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685558389338?e=1762387200&v=beta&t=t8MRfjg7sEfQuXQb5HLI1zQC16DgxWFOG9VK1Ek7GNM",
      linkedin: "https://linkedin.com/in/abhishek-kumar-gupta",
      connections: "500+ connections",
    },
  
  ];

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Hero Section */}
      <div
        className={`relative overflow-hidden py-16 sm:py-20 lg:py-24 ${
          theme === "dark"
            ? "bg-gray-900"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
        }`}
      >
        {/* Background Elements */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: "linear-gradient(135deg,#34d399,#60a5fa)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)" }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-white/20 backdrop-blur-md mb-8 animate-pop shadow-lg">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span
                className={`text-sm font-semibold ${
                  theme === "dark" ? "text-blue-300" : "text-blue-700"
                }`}
              >
                Expert Mentorship Program
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight">
              Learn from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Industry Experts
              </span>
            </h1>
            <p
              className={`text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Get mentored by professionals from Microsoft, Google, Amazon, and other leading tech companies.
              Gain real-world insights, upskill effectively, and prepare for top-tier placements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transform transition-all hover:-translate-y-1 hover:shadow-2xl
                bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
              >
                Book a Session
                <svg
                  className="w-6 h-6 ml-3"
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
              <button
                onClick={() => {
                  const element = document.getElementById('mentors');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg border-2 transform transition-all hover:-translate-y-1 hover:shadow-xl ${
                  theme === "dark"
                    ? "border-blue-400 text-blue-300 hover:bg-blue-900/40 bg-gray-800/50"
                    : "border-blue-600 text-blue-700 hover:bg-blue-50 bg-white/80"
                } backdrop-blur-sm shadow-lg`}
              >
                Meet Our Mentors
                <svg
                  className="w-6 h-6 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        className={`py-16 sm:py-20 lg:py-24 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span
              className={`inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full mb-6 ${
                theme === "dark"
                  ? "bg-blue-900/40 text-blue-300"
                  : "bg-blue-600 text-white"
              } animate-pop shadow-lg`}
            >
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Comprehensive Mentorship Program
            </h2>
            <p
              className={`text-lg sm:text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              From real-time industry insights to placement success, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {mentorshipFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl overflow-hidden border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-rise ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                } shadow-xl`}
                style={{ animationDelay: `${0.15 * (i + 1)}s` }}
              >
                <div className={`h-3 bg-gradient-to-r ${feature.gradient}`} />
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col">
                    <div
                      className={`inline-flex items-center gap-3 px-3 py-2 rounded-full text-sm font-medium mb-6 ${
                        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient}`}
                      ></div>
                      {feature.title}
                    </div>
                    <div className="flex items-start gap-5">
                      <div
                        className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl shadow-xl`}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">
                          {feature.title}
                        </h3>
                        <p
                          className={`text-base mb-6 leading-relaxed ${
                            theme === "dark"
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          {feature.description}
                        </p>
                        <ul className="space-y-3">
                          {feature.highlights.map((highlight, j) => (
                            <li key={j} className="flex items-center text-base">
                              <svg
                                className={`w-5 h-5 mr-3 flex-shrink-0 ${
                                  theme === "dark"
                                    ? "text-green-400"
                                    : "text-green-500"
                                }`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span
                                className={
                                  theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                                }
                              >
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${feature.gradient}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mentors Section */}
      <div
        id="mentors"
        className={`py-16 sm:py-20 lg:py-24 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Meet Our Expert Mentors
            </h2>
            <p
              className={`text-lg sm:text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Learn from industry veterans who've built and scaled products at world's leading companies
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-10">
            {mentors.map((mentor, i) => (
              <div
                key={mentor.name}
                className={`group rounded-3xl border relative overflow-hidden animate-rise transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                } shadow-2xl`}
                style={{ animationDelay: `${0.15 * (i + 1)}s` }}
              >
                <div className="relative p-8 sm:p-12">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                    <div className="relative flex-shrink-0">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800"
                      />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{mentor.name}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">
                        {mentor.role} @ {mentor.company}
                      </p>
                      <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                        📍 {mentor.location}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        🎓 {mentor.education} • 💼 {mentor.previousCompany}
                      </p>
                      <p className="text-sm text-gray-500">
                        🤝 {mentor.connections}
                      </p>
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">About</h4>
                    <p className={`text-base leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                      {mentor.about}
                    </p>
                  </div>

                  {/* Expertise Section */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Technical Expertise</h4>
                    <div className="flex flex-wrap gap-3">
                      {mentor.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium shadow-sm border border-blue-200 dark:border-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Services Section */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services Offered</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {mentor.services.map((service) => (
                        <div
                          key={service}
                          className={`flex items-center gap-3 p-3 rounded-lg ${
                            theme === "dark"
                              ? "bg-gray-800 border border-gray-700"
                              : "bg-gray-50 border border-gray-200"
                          }`}
                        >
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience and Social Links */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">⏰</span>
                        <span className={`text-base font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                          {mentor.experience} experience
                        </span>
                      </div>
                   
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-end">
                      {mentor.linkedin && (
                        <a
                          href={mentor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-300 dark:border-gray-600"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          View Profile
                        </a>
                      )}
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg"
                      >
                        Book Session
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className={`py-16 sm:py-20 lg:py-24 relative ${
          theme === "dark"
            ? "bg-gray-800"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden`}
          >
            {/* Background gradient with overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-grid-white/[0.15] bg-[length:20px_20px]"></div>

            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/25 text-white mb-8 animate-pop backdrop-blur-sm shadow-lg">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-sm font-semibold">
                    Start Your Journey Today
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Ready to Accelerate Your Career? 🚀
                </h3>
                <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto text-gray-100 leading-relaxed">
                  Join our mentorship program and get personalized guidance from industry experts.
                  Transform your skills and land your dream job.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg
                    bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg"
                  >
                    Get Started
                    <svg
                      className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1"
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
      </div>

      {/* Lightweight CSS animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in .5s ease both; }

        @keyframes rise { 0% { opacity:0; transform: translateY(10px); } 100% { opacity:1; transform: translateY(0); } }
        .animate-rise { animation: rise .5s ease both; }

        @keyframes pop { 0% { transform: scale(.96); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-pop { animation: pop .35s ease both; }

        .bg-grid-white {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default Mentorship;