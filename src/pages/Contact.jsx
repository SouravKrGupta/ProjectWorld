import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path if needed
import emailjs from '@emailjs/browser';
// https://www.emailjs.com/docs/tutorial/overview/
const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "contact.projectworld@gmail.com",
    link: "mailto:contact.projectworld@gmail.com",
    description: "Send us an email anytime"
  },
  {
    icon: "📱",
    title: "WhatsApp",
    value: "+91-8877760363",
    link: "https://wa.me/918877760363",
    description: "Chat with us on WhatsApp"
  },
  {
    icon: "💬",
    title: "Social Media",
    value: "contact.zypject",
    link: "https://www.instagram.com/contact.zypject/",
    description: "Follow us for updates"
  }
];

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_9wiwekp', // Replace with your EmailJS service ID
        'template_gjdnuua', // Replace with your EmailJS template ID
        templateParams,
        'loT6JcaO4ScYj_x2s' // Replace with your EmailJS public key
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
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
      <div className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${textSecondary}`}>
              Have questions about our projects or need a custom solution? We're here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className={`${cardBgClass} rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-200`}
                style={{
                  boxShadow: '0 4px 6px rgba(128,90,213,0.5)',
                  transition: 'all 0.3s ease-in-out',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(128, 90, 213, 0.3), 0 0 25px 10px rgba(148, 112, 234, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(128,90,213,0.5)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {method.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${textPrimary}`}>{method.title}</h3>
                <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">{method.value}</p>
                <p className={`${textSecondary} text-sm sm:text-base`}>{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={`py-8 sm:py-12 md:py-16 ${sectionBgClass}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Form */}
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${textPrimary}`}>Send us a Message</h2>
                {status.message && (
                  <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                    status.type === 'success' 
                      ? 'bg-green-100 text-green-700 border border-green-400' 
                      : 'bg-red-100 text-red-700 border border-red-400'
                    }`}>
                    {status.message}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 sm:mb-2 ${textPrimary}`}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${inputBgClass} ${inputFocusClass} transition-colors duration-200`}
                      placeholder="Your name"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 sm:mb-2 ${textPrimary}`}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${inputBgClass} ${inputFocusClass} transition-colors duration-200`}
                      placeholder="your@email.com"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 sm:mb-2 ${textPrimary}`}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${inputBgClass} ${inputFocusClass} transition-colors duration-200`}
                      placeholder="Your message"
                      required
                      disabled={loading}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg text-white font-semibold ${buttonBgClass} transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Custom Project Info */}
              <div className={`${cardBgClass} rounded-xl p-6 sm:p-8`}>
                <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${textPrimary}`}>Custom Project Request</h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className={`text-sm sm:text-base ${textSecondary}`}>
                    Have a unique project idea? We offer custom development services for:
                  </p>
                  <ul className={`space-y-3 sm:space-y-4 ${textPrimary}`}>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm sm:text-base">College Submissions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm sm:text-base">Startup MVPs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm sm:text-base">Personal Projects</span>
                    </li>
                  </ul>
                  <div className={`${sectionBgClass} rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200`}>
                    <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${textPrimary}`}>Required Information</h3>
                    <ul className={`space-y-2 ${textSecondary} text-sm sm:text-base`}>
                      <li>• Project Title</li>
                      <li>• Description of the Idea</li>
                      <li>• Preferred Tech Stack</li>
                      <li>• Deployment Requirements</li>
                    </ul>
                    <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                      🔒 Your idea is safe with us. We maintain strict confidentiality.
                    </div>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf5EGUr-B_J0AlhU8cggOuhM6KX7R6CeWvD09q93FpNlvZStw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-blue-600 text-white text-center text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors duration-200"
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
