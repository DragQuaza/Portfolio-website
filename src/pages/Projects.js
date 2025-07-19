import React from 'react';
import Projectdata from '../assets/Projectdata'; // Import the project data
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ title, description, image, externalLink, githubLink, keywords }) => (
  <div className="relative bg-gray-900 border border-purple-600 rounded-lg overflow-hidden w-80 flex flex-col">
    <img src={image} alt={title} className="w-full h-40 object-cover border-b border-purple-600" />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-300 mt-1 flex-grow">{description}</p>
      {/* Keywords Section */}
      <div className="mt-2 flex flex-wrap gap-2">
        {[...new Set(keywords)].map((keyword, index) => (
          <span key={index} className="bg-purple-700 text-white text-xs px-2 py-1 rounded-md">
            {keyword}
          </span>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
              <FiExternalLink size={20} />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const { projects } = Projectdata;

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            externalLink={project.externalLink}
            githubLink={project.githubLink}
            keywords={project.keywords || []} // Added Keywords Prop
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
