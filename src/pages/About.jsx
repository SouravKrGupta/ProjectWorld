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
    image: "/founders/sourav.jpg",
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
    image: "/founders/riya.jpg",
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
      <div className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-b from-white via-blue-50/30 to-white'}`}>
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Meet Our Founders
            </h2>
            <p className={theme === 'dark' ? 'text-gray-400 text-lg' : 'text-gray-600 text-lg'}>
              The visionary minds behind Project World, committed to revolutionizing project development and delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="group relative">
                {/* Decorative background elements */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className={`${featureBgClass} rounded-2xl p-8 h-full transform group-hover:-translate-y-1 transition duration-500 relative`}>
                  <div className="absolute right-0 top-0 h-24 w-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-bl-full"></div>
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm opacity-70"></div>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              founder.name
                            )}&background=0D8ABC&color=fff&size=128`;
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{founder.name}</h3>
                    <p className={`font-medium mb-4 px-3 py-1 rounded-full text-sm inline-block ${theme === 'dark' ? 'text-blue-300 bg-blue-900' : 'text-blue-600 bg-blue-50'}`}>
                      {founder.role}
                    </p>
                    <p className={featureTextClass + " mb-8 leading-relaxed"}>
                      {founder.description}
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                      {Object.entries(founder.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className={`${theme === 'dark' ? 'bg-gray-800 text-gray-400 hover:bg-blue-700 hover:text-white' : 'bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600'} p-2 rounded-full transition-colors duration-300`}
                          aria-label={platform}
                        >
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
                              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.724 0-4.932 2.208-4.932 4.932 0 .39.045.765.127 1.124-4.094-.205-7.725-2.166-10.159-5.144-.424.729-.666 1.574-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.444 3.377 4.6 3.416-1.68 1.318-3.8 2.105-6.102 2.105-.396 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                          )}
                        </a>
                      ))}
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
