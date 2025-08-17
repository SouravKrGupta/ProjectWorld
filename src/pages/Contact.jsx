import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

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

const timelineSteps = [
  {
    step: "1",
    title: "Reach Out",
    desc: "Share a brief about your project using the form or quick message on WhatsApp / Email.",
    eta: "1 day"
  },
  {
    step: "2",
    title: "Requirements & Quote",
    desc: "We clarify scope, share SOW and a transparent quote with milestones.",
    eta: "1–2 days"
  },
  {
    step: "3",
    title: "Confirm & Kickoff",
    desc: "Initial payment and kickoff — we set up repo, env & sprint plan.",
    eta: "Immediate"
  },
  {
    step: "4",
    title: "Development",
    desc: "Sprint-by-sprint delivery, weekly demos, and continuous feedback.",
    eta: "Depends on scope"
  },
  {
    step: "5",
    title: "Delivery & Handover",
    desc: "You receive source, documentation, PPT/report (if college project) and Drive link + KT session.",
    eta: "24–72 hrs"
  },
  {
    step: "6",
    title: "Support",
    desc: "Minor changes, setup help & SLA-based support available post-delivery.",
    eta: "Ongoing"
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

  const bgClass = theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-b from-blue-50 via-white to-white text-gray-900';
  const sectionBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textPrimary = theme === 'dark' ? 'text-gray-200' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const inputBgClass = theme === 'dark' ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white text-gray-900 border-gray-300';
  const inputFocusClass = 'focus:ring-blue-500 focus:border-blue-500';
  const buttonBgClass = 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      setFormData({ name: '', email: '', message: '' });
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

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {/* HERO */}
      <div className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${textSecondary}`}>
              Tell us about your project or ask any question — college projects, MNC prep, DSA sheets, or B2B solutions. We'll guide you step-by-step.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className={`${cardBgClass} rounded-xl p-5 sm:p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label={`${method.title} - ${method.value}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 animate-pop">{method.icon}</div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-1 ${textPrimary}`}>{method.title}</h3>
                <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">{method.value}</p>
                <p className={`${textSecondary} text-sm sm:text-base`}>{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS (TIMELINE) */}
      <div id="how-it-works" className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${textPrimary}`}>How it works — step by step</h2>
          <p className={`text-sm ${textSecondary} mb-6`}>A simple, transparent flow from first contact to delivery and support.</p>

          <div className="relative pl-6 md:pl-10">
            <div className={`absolute left-3 top-0 w-[4px] rounded-full ${theme === 'dark' ? 'bg-blue-500/30' : 'bg-blue-500/20'} animate-grow`} style={{ height: '100%' }} />
            <div className="space-y-5">
              {timelineSteps.map((t, i) => (
                <div key={t.step} className="relative flex items-start gap-4 animate-rise" style={{ animationDelay: `${0.04 * i}s` }}>
                  <div className="absolute -left-5 mt-2">
                    <div className="h-5 w-5 rounded-full ring-4 ring-blue-200/50 bg-blue-600 animate-pop" />
                  </div>

                  <div className={`w-full rounded-xl p-4 border ${sectionBgClass} shadow-sm`}>
                    <div className="flex items-start gap-3">
                      <div>
                        <div className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">{t.step}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{t.title}</h3>
                          <span className="ml-auto text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">{t.eta}</span>
                        </div>
                        <p className={`text-sm mt-2 ${textSecondary}`}>{t.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form + Custom Project Info */}
      <div className={`py-8 sm:py-12 md:py-16 ${sectionBgClass}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

              {/* Form */}
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${textPrimary}`}>Send us a Message</h2>

                {/* status message (accessible) */}
                <div role="status" aria-live="polite" className="mb-4">
                  {status.message && (
                    <div className={`p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'}`}>
                      {status.message}
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${textPrimary}`}>Name</label>
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
                    <label className={`block text-sm font-medium mb-1 ${textPrimary}`}>Email</label>
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
                    <label className={`block text-sm font-medium mb-1 ${textPrimary}`}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${inputBgClass} ${inputFocusClass} transition-colors duration-200`}
                      placeholder="Brief about your project / request"
                      required
                      disabled={loading}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg text-white font-semibold ${buttonBgClass} transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.6)" strokeWidth="4" className="opacity-40" />
                          <path d="M22 12a10 10 0 00-10-10" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Custom Project Info */}
              <aside className={`${cardBgClass} rounded-xl p-6 sm:p-8`}>
                <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${textPrimary}`}>Custom Project Request</h2>
                <p className={`text-sm sm:text-base ${textSecondary} mb-4`}>
                  Want a ready-to-submit final year project, a startup MVP, or a custom B2B solution? Provide the details and we’ll return a tailored SOW.
                </p>

                <ul className="space-y-3 mb-4 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>College project pack: PPT, report, diagrams & source code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Startup MVP & prototype development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SLA-backed support & maintenance</span>
                  </li>
                </ul>

                <div className={`p-4 rounded-lg ${sectionBgClass} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className={`text-base sm:text-lg font-semibold ${textPrimary}`}>What we need from you</h3>
                  <ul className={`mt-2 text-sm ${textSecondary} space-y-1`}>
                    <li>• Project title & short description</li>
                    <li>• Preferred tech stack (if any)</li>
                    <li>• Submission / deployment requirements</li>
                    <li>• Timeline & budget expectations</li>
                  </ul>
                  <p className="mt-3 text-xs text-gray-500">🔒 We respect confidentiality — NDA available on request.</p>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf5EGUr-B_J0AlhU8cggOuhM6KX7R6CeWvD09q93FpNlvZStw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 transition"
                >
                  Submit Project Request
                </a>
              </aside>

            </div>
          </div>
        </div>
      </div>

      {/* Lightweight CSS animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in .45s ease both; }

        @keyframes pop { 0% { transform: scale(.96); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-pop { animation: pop .35s ease both; }

        @keyframes rise { 0% { opacity:0; transform: translateY(10px); } 100% { opacity:1; transform: translateY(0); } }
        .animate-rise { animation: rise .45s ease both; }

        @keyframes growLine { 0% { height: 0; } 100% { height: 100%; } }
        .animate-grow { animation: growLine 1s ease-out both; }

        /* small accessibility focus ring tweak */
        a:focus, button:focus, input:focus, textarea:focus { outline: none; box-shadow: 0 0 0 4px rgba(59,130,246,0.08); }
      `}</style>
    </div>
  );
};

export default Contact;
