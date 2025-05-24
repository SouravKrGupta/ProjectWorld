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
