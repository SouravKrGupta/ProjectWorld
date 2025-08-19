import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // adjust path as needed

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <footer className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'} border-t`}>
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Main Info */}
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Zypject
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base mb-4 max-w-md`}>
              Discover amazing projects and connect with talented developers from around the world.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                {
                  href: 'https://www.instagram.com/contact.zypject/',
                  hoverColor: 'hover:text-pink-600',
                  svgPath:
                    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                  extraClass: '',
                },
                {
                  href: 'https://www.youtube.com/@Zypject',
                  hoverColor: 'hover:text-red-600',
                  svgPath:
                    'M19.615 3.184c-2.402-.184-6.03-.184-6.03-.184s-3.627 0-6.03.184C4.52 3.37 3.26 4.67 3.07 6.97 2.886 9.368 2.886 12 2.886 12s0 2.632.184 5.03c.19 2.3 1.45 3.6 3.686 3.786 2.402.184 6.03.184 6.03.184s3.627 0 6.03-.184c2.236-.186 3.496-1.486 3.686-3.786.184-2.398.184-5.03.184-5.03s0-2.632-.184-5.03c-.19-2.3-1.45-3.6-3.686-3.786zm-8.615 9.816v-5l4.846 2.5-4.846 2.5z',
                  extraClass: 'scale-110', // makes YouTube icon visually taller
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${icon.hoverColor} transition-colors`}
                >
                  <svg
                    className={`h-6 w-6 sm:h-7 sm:w-7 ${icon.extraClass}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.svgPath} />
                  </svg>
                </a>
              ))}
            </div>


          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm sm:text-base font-semibold mb-3 sm:mb-4`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Contact', href: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors text-sm sm:text-base`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm sm:text-base font-semibold mb-3 sm:mb-4`}>
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact.projectworld@gmail.com"
                  className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors flex items-center text-sm sm:text-base`}
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-400 dark:border-gray-700">
          <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center text-sm sm:text-base`}>
            &copy; {new Date().getFullYear()} Zypject. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
