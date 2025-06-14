// About page for ProjectNest 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path as per your project

const features = [
  {
    icon: "📦",
    title: "Full Source Code",
    description: "Complete, well-structured source code delivered in a zip file"
  },
  {
    icon: "📝",
    title: "Documentation",
    description: "Comprehensive documentation with setup and usage guidelines"
  },
  {
    icon: "🚀",
    title: "Deployment Guide",
    description: "Step-by-step instructions for deploying your project"
  },
  {
    icon: "📧",
    title: "Quick Delivery",
    description: "Instant delivery via email after purchase confirmation"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Idea",
    description: "Connect with us via Gmail and WhatsApp to discuss your project requirements"
  },
  {
    number: "02",
    title: "Initial Payment",
    description: "Pay 50% of the project cost to start development"
  },
  {
    number: "03",
    title: "Development",
    description: "Our team develops your project with regular updates"
  },
  {
    number: "04",
    title: "Final Delivery",
    description: "Complete the remaining payment and receive your full project"
  }
];

const founders = [
  {
    name: "Sourav Kumar Gupta",
    role: "Founder & CEO",
    description: "A passionate tech entrepreneur with expertise in full-stack development and project architecture. Leading the technical vision and development strategy of ProjectNest .",
    image: "https://avatars.githubusercontent.com/u/89971045?s=400&u=f67fc032815039900ae416aa5fe3e20706b1c2ca&v=4",
    social: {
      linkedin: "https://www.linkedin.com/in/sourav-kumar-gupta-18b638200/"
     
    }
  },
  {
    name: "Riya Singh",
    role: "Co-Founder & COO",
    description: "An innovative leader focusing on operations and client success. Driving the business strategy and ensuring seamless project delivery at ProjectNest .",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEhhppYrQfbjA/profile-displayphoto-shrink_800_800/B56ZQ29nUyHQAg-/0/1736088910699?e=1753920000&v=beta&t=aCC7k1mjckphbqhOaq681Srm_8ZSwTfiYRdTUknoQ_I",
    social: {
      linkedin: "https://www.linkedin.com/in/riya-singh-34b1aa19a/"
      
    }
  }
];

const About = () => {
  const { theme } = useContext(ThemeContext);

  const bgClass =
    theme === "dark"
      ? "bg-gray-900 text-gray-100"
      : "bg-gradient-to-b from-blue-50 via-white to-white text-gray-900";
  const featureBgClass = theme === "dark" ? "bg-blue-100" : "bg-white";
  const featureTextClass = theme === "dark" ? "text-gray-800" : "text-gray-600";
  const textPrimary = theme === "dark" ? "text-gray-200" : "text-gray-900";
  const textPrimaryHeading = theme === "dark" ? "text-gray-900" : "text-gray-900";
  const textSecondary = theme === "dark" ? "text-gray-900" : "text-gray-900";
  const textAccent = theme === "dark" ? "text-blue-300" : "text-blue-600";
  const badgeBg = theme === "dark" ? "bg-blue-800/40" : "bg-blue-50";
  const textSecondaryDesc = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const textPrimaryHead = theme === "dark" ? "text-gray-200" : "text-gray-900";

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {/* Hero Section */}
      <div className="py-8 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About ProjectNest 
            </h1>
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${textSecondaryDesc}`}>
              We're on a mission to simplify the project development journey by providing high-quality, ready-to-use software projects for students and professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-8 sm:py-12 md:py-16" style={{ backgroundColor: theme === "dark" ? "#1f2937" : "white" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${textPrimary}`}>What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${featureBgClass} rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200`}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${textPrimaryHeading}`}>{feature.title}</h3>
                <p className={`text-sm sm:text-base ${featureTextClass}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className={`py-8 sm:py-12 md:py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${textPrimary}`}>
            How Custom Projects Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`${featureBgClass} rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200`}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${textPrimaryHeading}`}>{step.title}</h3>
                  <p className={`text-sm sm:text-base ${featureTextClass}`}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-16 sm:py-24 md:py-32  from-white via-blue-50/10 to-white relative overflow-hidden dark:from-gray-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-gray-800 [mask-image:linear-gradient(0deg,transparent,black,transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Meet Our Founders
            </h2>
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${textSecondaryDesc}`}>
              The visionary minds behind ProjectNest , committed to revolutionizing project development and delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0 group-hover:translate-y-[-8px] transition-all duration-500">
                    <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
                    <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-600 to-purple-600">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden bg-white">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              founder.name
                            )}&background=0D8ABC&color=fff&size=128`;
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Founder Info */}
                  <div className="flex-grow text-center md:text-left">
                    <div className="relative inline-block">
                      <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300 ${textPrimaryHead}`}>
                        {founder.name}
                      </h3>
                      <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
                    </div>
                    <div className="mt-3 space-y-4">
                      <p className={`font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm inline-block ${textAccent} ${badgeBg}`}>
                        {founder.role}
                      </p>
                      <p className={`${textSecondaryDesc} text-sm sm:text-base leading-relaxed`}>
                        {founder.description}
                      </p>
                      {/* Social Links */}
                      <div className="flex justify-center md:justify-start space-x-4 sm:space-x-5 pt-2">
                        {Object.entries(founder.social).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            className="group/icon relative p-1.5 sm:p-2"
                            aria-label={platform}
                          >
                            <div className="absolute inset-0 bg-blue-100/80 dark:bg-blue-900/20 rounded-lg scale-0 group-hover/icon:scale-100 transition-transform duration-300 -z-10"></div>
                            <div className={`relative ${textSecondary} group-hover/icon:${textAccent} transition-all duration-300 transform group-hover/icon:translate-y-[-2px]`}>
                              {platform === 'linkedin' && (
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 md:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Start Your Project?</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8">
                Whether you need a ready-made solution or a custom project, we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-semibold text-sm sm:text-base"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold text-sm sm:text-base"
                >
                  Custom Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
