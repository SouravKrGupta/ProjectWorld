// Projects page for Project World
import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Filterbar from '../components/Filterbar';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [tech, setTech] = useState('All');
	const [type, setType] = useState('All');

	useEffect(() => {
		fetch('/projects.json')
			.then(res => res.json())
			.then(data => setProjects(data));
	}, []);

	const filtered = projects.filter(
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
