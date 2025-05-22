import React from 'react';

const demoProjects = [
  {
    id: 1,
    name: 'Student Management System',
    description: 'A web app to manage students, courses, and grades.',
    tech: ['MERN'],
    category: 'Major',
    price: '₹1999',
    image: 'https://placehold.co/300x180?text=Student+Mgmt',
  },
  {
    id: 2,
    name: 'E-Commerce Store',
    description: 'A full-stack e-commerce platform with cart and payment.',
    tech: ['Django', 'MySQL'],
    category: 'Advanced',
    price: '₹2999',
    image: 'https://placehold.co/300x180?text=E-Commerce',
  },
  {
    id: 3,
    name: 'To-Do App',
    description: 'A simple MERN to-do list app for beginners.',
    tech: ['MERN'],
    category: 'Mini',
    price: '₹799',
    image: 'https://placehold.co/300x180?text=To-Do+App',
  },
];

const FeaturedCarousel = () => (
  <div className="flex gap-6 overflow-x-auto pb-2">
    {demoProjects.map((project) => (
      <div key={project.id} className="min-w-[300px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4 border border-blue-100 flex flex-col items-center">
        <img src={project.image} alt={project.name} className="rounded mb-2 w-full h-40 object-cover" />
        <h3 className="text-lg font-bold mb-1 text-blue-800">{project.name}</h3>
        <div className="mb-1 text-sm text-gray-600 flex gap-2 items-center">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">{t}</span>
          ))}
          <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">{project.category}</span>
        </div>
        <div className="mb-2 text-blue-700 font-semibold">{project.price}</div>
        <p className="mb-2 text-sm text-gray-700 text-center">{project.description}</p>
        <a href={`/projects/${project.id}`} className="inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">View Details</a>
      </div>
    ))}
  </div>
);

export default FeaturedCarousel;
