// Projects page for Project World
import React, { useState } from 'react';
import Filterbar from '../components/Filterbar';
import ProjectCard from '../components/ProjectCard';

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

const Projects = () => {
	const [tech, setTech] = useState('All');
	const [type, setType] = useState('All');

	const filtered = demoProjects.filter(
		p =>
			(tech === 'All' || p.tech.includes(tech)) &&
			(type === 'All' || p.category === type)
	);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4 text-blue-800">Explore Projects</h1>
			<Filterbar tech={tech} setTech={setTech} type={type} setType={setType} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{filtered.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
				{filtered.length === 0 && (
					<div className="col-span-3 text-center text-gray-500">
						No projects found.
					</div>
				)}
			</div>
		</div>
	);
};

export default Projects;
