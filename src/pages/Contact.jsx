// Contact page for Project World
import React from 'react';

const Contact = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4 text-blue-800">Contact Us</h1>
    <div className="mb-4">
      <p className="mb-2 text-lg text-gray-700">📧 Email: <a href="mailto:projectworld@example.com" className="text-blue-600 underline">projectworld@example.com</a></p>
      <p className="mb-2">📞 Phone / WhatsApp: <span className="text-blue-800 font-semibold">+91-XXXXXXXXXX</span></p>
      
    </div>
    <form className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 border border-blue-100 mt-6">
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-800">Name</label>
        <input type="text" className="w-full px-3 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900" placeholder="Your Name" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-800">Email</label>
        <input type="email" className="w-full px-3 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900" placeholder="Your Email" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-800">Message</label>
        <textarea className="w-full px-3 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900" rows="4" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold w-full">Send Message</button>
    </form>
    <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded shadow-sm">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">💡 Share Your Project Idea With Us!</h2>
      <p className="mb-2 text-gray-700">Have a unique idea for a software project? Let us build it for you!</p>
      <p className="mb-4 text-gray-700">We offer custom project development services – whether it’s a college submission, a startup MVP, or a personal idea you want to see in action. Just share your project details below, and our team will get back to you.</p>
      <div className="mb-4 p-4 bg-blue-100 border-l-4 border-blue-400 rounded">
        <span className="block font-semibold text-blue-900 mb-2">Custom Project Request Form – Please include:</span>
        <ul className="list-disc list-inside text-gray-800">
          <li>Name</li>
          <li>Email</li>
          <li>Project Title</li>
          <li>Description of the Idea</li>
          <li>Preferred Tech Stack <span className="text-xs text-gray-500">(e.g., MERN / Django / Flutter / etc.)</span></li>
          <li>Deployment Help Needed? (Yes/No)</li>
        </ul>
        <div className="mt-2 text-xs text-gray-500 italic">🔒 Your idea is safe with us. We don’t share or reuse submitted ideas.</div>
      </div>
      <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-semibold text-lg">Submit Your Idea via Google Form</a>
    </div>
    {/* Optional: Social Links, Google Maps, etc. */}
  </div>
);

export default Contact;
