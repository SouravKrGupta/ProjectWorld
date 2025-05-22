// Contact page for Project World
import React from 'react';

const Contact = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4 text-blue-800">Contact Us</h1>
    <div className="mb-4">
      <p className="mb-2 text-lg text-gray-700">📧 Email: <a href="mailto:projectworld@example.com" className="text-blue-600 underline">projectworld@example.com</a></p>
      {/* <p className="mb-2">📞 Phone / WhatsApp: +91-XXXXXXXXXX</p> */}
    </div>
    <form className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 border border-blue-100">
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-800">Name</label>
        <input type="text" className="w-full px-3 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-800">Email</label>
        <input type="email" className="w-full px-3 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Email" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-800">Message</label>
        <textarea className="w-full px-3 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold">Send Message</button>
    </form>
    {/* Optional: Social Links, Google Maps, etc. */}
  </div>
);

export default Contact;
