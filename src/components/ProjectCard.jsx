import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center border border-blue-100">
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
    <a href={`/projects/${project.id}`} className="inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">View More</a>
    <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">Get This Project</a>
  </div>
);

export default ProjectCard;
