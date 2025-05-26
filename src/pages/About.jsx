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
  const { theme } = useContext(ThemeContext);

  const bgClass =
    theme === "dark"
      ? "bg-gray-900 text-gray-100"
      : "bg-gradient-to-b from-blue-50 via-white to-white text-gray-900";
  const featureBgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const featureTextClass = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const textPrimary = theme === "dark" ? "text-white" : "text-gray-900";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-900";
  const textAccent = theme === "dark" ? "text-blue-300" : "text-blue-600";
  const badgeBg = theme === "dark" ? "bg-blue-800/40" : "bg-blue-50";

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {/* Hero Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Project World
            </h1>
            <p className={`text-lg sm:text-xl leading-relaxed ${textSecondary}`}>
              We're on a mission to simplify the project development journey by providing high-quality, ready-to-use software projects for students and professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16" style={{ backgroundColor: theme === "dark" ? "#1f2937" : "white" }}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${textPrimary}`}>What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${featureBgClass} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>{feature.title}</h3>
                <p className={featureTextClass}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${textPrimary}`}>
            How Custom Projects Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`${featureBgClass} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200`}
                >
                  <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>{step.title}</h3>
                  <p className={featureTextClass}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-32 bg-gradient-to-br from-white via-blue-50/10 to-white relative overflow-hidden dark:from-gray-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-gray-800 [mask-image:linear-gradient(0deg,transparent,black,transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Meet Our Founders
            </h2>
            <p className={`text-xl leading-relaxed ${textSecondary}`}>
              The visionary minds behind Project World, committed to revolutionizing project development and delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Profile Image */}
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

                  {/* Founder Info */}
                  <div className="flex-grow text-center md:text-left">
                    <div className="relative inline-block">
                      <h3 className={`text-3xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300 ${textPrimary}`}>
                        {founder.name}
                      </h3>
                      <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
                    </div>
                    <div className="mt-3 space-y-4">
                      <p className={`font-medium px-4 py-1.5 rounded-full text-sm inline-block ${textAccent} ${badgeBg}`}>
                        {founder.role}
                      </p>
                      <p className={`${textSecondary} text-base leading-relaxed`}>
                        {founder.description}
                      </p>
                      {/* Social Links */}
                      <div className="flex md:justify-start justify-center space-x-5 pt-2">
                        {Object.entries(founder.social).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            className="group/icon relative p-2"
                            aria-label={platform}
                          >
                            <div className="absolute inset-0 bg-blue-100/80 dark:bg-blue-900/20 rounded-lg scale-0 group-hover/icon:scale-100 transition-transform duration-300 -z-10"></div>
                            <div className={`relative ${textSecondary} group-hover/icon:${textAccent} transition-all duration-300 transform group-hover/icon:translate-y-[-2px]`}>
                              {/* SVGs remain unchanged */}
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
            <div className="p-8 sm:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
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
  );
};

export default About;
