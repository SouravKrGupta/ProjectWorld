import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path if needed

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "projectworld@example.com",
    link: "mailto:projectworld@example.com",
    description: "Send us an email anytime"
  },
  {
    icon: "📱",
    title: "WhatsApp",
    value: "+91-XXXXXXXXXX",
    link: "https://wa.me/91XXXXXXXXXX",
    description: "Chat with us on WhatsApp"
  },
  {
    icon: "💬",
    title: "Social Media",
    value: "@projectworld",
    link: "#",
    description: "Follow us for updates"
  }
];

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Theme-based styles
  const bgClass = theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-b from-blue-50 via-white to-white text-gray-900';
  const sectionBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textPrimary = theme === 'dark' ? 'text-gray-200' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const inputBgClass = theme === 'dark' ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white text-gray-900 border-gray-300';
  const inputFocusClass = theme === 'dark' ? 'focus:ring-blue-500 focus:border-blue-500' : 'focus:ring-blue-500 focus:border-blue-500';
  const buttonBgClass = theme === 'dark' 
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700';

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {/* Hero Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className={`text-lg sm:text-xl leading-relaxed ${textSecondary}`}>
              Have questions about our projects or need a custom solution? We're here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {contactMethods.map((method, index) => (
        <a
          key={index}
          href={method.link}
          className={`${cardBgClass} rounded-xl p-6 shadow-lg transition-shadow duration-200`}
          style={{
            boxShadow: '0 4px 6px rgba(128,90,213,0.5)',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(128, 90, 213, 0.3), 0 0 25px 10px rgba(148, 112, 234, 0.2)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(128,90,213,0.5)';
          }}
        >
          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
            {method.icon}
          </div>
          <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>{method.title}</h3>
          <p className="text-blue-600 font-medium mb-2">{method.value}</p>
          <p className={textSecondary}>{method.description}</p>
        </a>
      ))}
    </div>
  </div>
</div>


      {/* Contact Form Section */}
      <div className={`py-16 ${sectionBgClass}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${textPrimary}`}>Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${textPrimary}`}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${inputBgClass} ${inputFocusClass} transition-colors duration-200`}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${textPrimary}`}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${inputBgClass} ${inputFocusClass} transition-colors duration-200`}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${textPrimary}`}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg border ${inputBgClass} ${inputFocusClass} transition-colors duration-200`}
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`w-full px-6 py-3 rounded-lg text-white font-semibold ${buttonBgClass} transition-all duration-200 transform hover:-translate-y-0.5`}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Custom Project Info */}
              <div className={`${cardBgClass} rounded-2xl p-8`}>
                <h2 className={`text-2xl font-bold mb-6 ${textPrimary}`}>Custom Project Request</h2>
                <div className="space-y-6">
                  <p className={textSecondary}>
                    Have a unique project idea? We offer custom development services for:
                  </p>
                  <ul className={`space-y-4 ${textPrimary}`}>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>College Submissions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Startup MVPs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Personal Projects</span>
                    </li>
                  </ul>
                  <div className={`${sectionBgClass} rounded-xl p-6 border border-gray-200`}>
                    <h3 className={`text-lg font-semibold mb-4 ${textPrimary}`}>Required Information</h3>
                    <ul className={`space-y-2 ${textSecondary}`}>
                      <li>• Project Title</li>
                      <li>• Description of the Idea</li>
                      <li>• Preferred Tech Stack</li>
                      <li>• Deployment Requirements</li>
                    </ul>
                    <div className="mt-4 text-sm text-gray-500">
                      🔒 Your idea is safe with us. We maintain strict confidentiality.
                    </div>
                  </div>
                  <a
                    href="https://forms.gle/your-google-form-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 rounded-lg bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Submit Project Request
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
