// About page for Project World
import React from 'react';
import { Link } from 'react-router-dom';

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

const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
    {/* Hero Section */}
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Project World
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            We're on a mission to simplify the project development journey by providing high-quality, ready-to-use software projects for students and professionals.
          </p>
        </div>
      </div>
    </div>

    {/* Features Grid */}
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Process Section */}
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How Custom Projects Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
    <div className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Meet Our Founders
          </h2>
          <p className="text-gray-600 text-lg">
            The visionary minds behind Project World, committed to revolutionizing project development and delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="group relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 h-full transform group-hover:-translate-y-1 transition duration-500">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-blue-600 font-medium mb-4 px-3 py-1 bg-blue-50 rounded-full text-sm inline-block">
                    {founder.role}
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {founder.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {Object.entries(founder.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
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
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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

    {/* CTA Section */}
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

export default About;
