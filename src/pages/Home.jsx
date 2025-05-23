// Home page for Project World
import React from 'react';
import FeaturedCarousel from '../components/FeaturedCarousel';

const stats = [
  { label: 'Projects Sold', value: '1200+' },
  { label: 'Happy Clients', value: '950+' },
  { label: 'Tech Stacks', value: '3+' },
];

const Home = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-extrabold mb-4 text-center text-blue-800 drop-shadow">Welcome to Project World – Your One-Stop Destination for Quality Software Projects!</h1>
    <p className="text-lg text-center mb-8 text-gray-700">We offer a collection of ready-made software projects for students, developers, and professionals. Choose from Mini, Major, or Advanced projects built using modern tech stacks like MERN, Django REST Framework, and MySQL.</p>
    {/* Stats Section */}
    <div className="flex flex-wrap justify-center gap-8 mb-10">
      {stats.map((stat, i) => (
        <div key={i} className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl shadow-lg px-8 py-6 text-center min-w-[160px]">
          <div className="text-3xl font-bold text-blue-700 mb-1">{stat.value}</div>
          <div className="text-gray-700 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
    {/* Categories */}
    <div className="flex justify-center gap-6 mb-8">
      <div className="bg-blue-100 rounded-lg px-6 py-4 font-semibold shadow">🔹 Mini Projects</div>
      <div className="bg-orange-100 rounded-lg px-6 py-4 font-semibold shadow">🔸 Major Projects</div>
      <div className="bg-yellow-100 rounded-lg px-6 py-4 font-semibold shadow">⭐ Advanced Projects</div>
    </div>
    {/* Featured Projects Carousel */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2 text-center text-blue-800">Featured Projects</h2>
      <FeaturedCarousel />
    </div>
    {/* Call to Action */}
    <div className="text-center mt-8">
      <p className="text-lg font-medium text-blue-700 mb-4">Need a project? Fill the Google Form, complete payment, and get your project via email!</p>
      <div className="max-w-2xl mx-auto bg-blue-50 border-l-4 border-blue-500 rounded p-6 mb-4">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">💡 Share Your Project Idea With Us!</h3>
        <p className="mb-2 text-gray-700">Have a unique idea for a software project? Let us build it for you!</p>
        <p className="mb-4 text-gray-700">We offer custom project development services – whether it’s a college submission, a startup MVP, or a personal idea you want to see in action. Just share your project details and our team will get back to you.</p>
        <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-semibold text-lg">Submit Your Idea</a>
      </div>
    </div>
  </div>
);

export default Home;
