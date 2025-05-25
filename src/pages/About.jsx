// About page for Project World
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
    description: "A passionate tech entrepreneur with expertise in full-stack development and project architecture. Leading the technical vision and development strategy of Project World.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzp0Z6ns4nJ_5jyECXsThghkk_E94XGYFawg&s",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Riya Singh",
    role: "Co-Founder & COO",
    description: "An innovative leader focusing on operations and client success. Driving the business strategy and ensuring seamless project delivery at Project World.",
    image: "https://images.squarespace-cdn.com/content/v1/572fc9ef07eaa0ad6f05e4de/1612758292466-5HHLDZRGHMZCEZB5I5S6/AM6A6593%281%29.jpg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

const About = () => {
  const { theme } = useContext(ThemeContext); // get current theme from context

  // Example: You can toggle background and text colors based on theme value.
  // Assuming your theme context has 'light' and 'dark' values.
  const bgClass = theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-b from-blue-50 via-white to-white text-gray-900';
  const featureBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const featureTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {/* Hero Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Project World
            </h1>
            <p className={`text-lg sm:text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We're on a mission to simplify the project development journey by providing high-quality, ready-to-use software projects for students and professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16" style={{ backgroundColor: theme === 'dark' ? '#1f2937' : 'white' }}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${featureBgClass} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={featureTextClass}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            How Custom Projects Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`${featureBgClass} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
                  <div className={`text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                    {step.number}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={featureTextClass}>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    {/* Founders Section */}
    <div className="py-32 bg-gradient-to-br from-white via-blue-50/10 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Meet Our Founders
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            The visionary minds behind Project World, committed to revolutionizing project development and delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Profile Image with Border Animation */}
                <div className="relative flex-shrink-0 group-hover:translate-y-[-8px] transition-all duration-500">
                  <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
                  <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden bg-white">
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

                {/* Content with Animations */}
                <div className="flex-grow text-center md:text-left">
                  <div className="relative inline-block">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {founder.name}
                    </h3>
                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
                  </div>
                  <div className="mt-3 space-y-4">
                    <p className="text-blue-600 font-medium px-4 py-1.5 bg-blue-50 rounded-full text-sm inline-block">
                      {founder.role}
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {founder.description}
                    </p>

                    {/* Social Links with Hover Effects */}
                    <div className="flex md:justify-start justify-center space-x-5 pt-2">
                      {Object.entries(founder.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="group/icon relative p-2"
                          aria-label={platform}
                        >
                          <div className="absolute inset-0 bg-blue-100/80 rounded-lg scale-0 group-hover/icon:scale-100 transition-transform duration-300 -z-10"></div>
                          <div className="relative text-gray-600 group-hover/icon:text-blue-600 transition-all duration-300 transform group-hover/icon:translate-y-[-2px]">
                            {platform === 'linkedin' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            )}
                            {platform === 'github' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                              </svg>
                            )}
                            {platform === 'twitter' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
      <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-blue-100 mb-8">
                Whether you need a ready-made solution or a custom project, we're here to help you succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-semibold"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold"
                >
                  Custom Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    </div>
  );
};

export default About;
