// About page for Project World
import React from 'react';

const About = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4 text-blue-800">About Project World</h1>
    <p className="mb-4 text-lg text-gray-700">Project World was created to help students and professionals find quality, ready-to-use software projects. Whether you’re working on a college submission or a portfolio project, we offer solutions built with popular tools like MERN, Django, and MySQL.</p>
    <h2 className="text-xl font-semibold mb-2 text-blue-700">Our Mission</h2>
    <p className="mb-4 text-gray-700">To simplify the project development journey by providing pre-built and customizable project solutions.</p>
    <h2 className="text-xl font-semibold mb-2 text-blue-700">What We Offer</h2>
    <ul className="list-disc list-inside mb-4 text-gray-700">
      <li>Full project source code (Zip)</li>
      <li>Clean documentation</li>
      <li>Easy deployment guide</li>
      <li>Email delivery after purchase</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2 text-blue-700">How Custom Project Orders Work</h2>
    <ul className="list-disc list-inside mb-4 text-gray-700">
      <li>Once you share your project idea, we will connect with you via Gmail and WhatsApp for further discussion.</li>
      <li>To start, you pay half the project amount as an advance.</li>
      <li>After project completion, you pay the remaining amount to receive your full project.</li>
      <li>This is our policy for idea-based (custom) projects.</li>
      <li>If you buy a ready-made project, you pay the full amount as listed and receive your project within a week.</li>
    </ul>
  </div>
);

export default About;
