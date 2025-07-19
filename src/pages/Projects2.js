import React from "react";
import data from "../assets/Projectdata";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects2 = () => {
  const homedata = Array.isArray(data.projects) ? data.projects.slice(0, 2) : [];

  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl md:text-4xl text-white">Projects</h1>
        <p className="text-xl mb-8">A list of projects I have been working on or built</p>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="mt-8 w-full max-w-4xl flex flex-row flex-wrap justify-center gap-6">
        {homedata.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-900 border border-purple-600 rounded-lg overflow-hidden w-80 h-80 flex flex-col"
          >
            {/* Reduced Image Size */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover border-b border-purple-600"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-1 flex-grow">
                {project.description}
              </p>
              {/* Moved Links to a Fixed Position */}
              <div className="mt-2 flex space-x-4">
                {project.externalLink && (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400"
                  >
                    <FiExternalLink size={20} />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400"
                  >
                    <FiGithub size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="projects" className="z-10 mt-6">
        <button className="px-4 py-2 text-xs bg-primary text-secondary border border-secondary italic text-white">
          View More
        </button>
      </Link>
    </div>
  );
};

export default Projects2;
