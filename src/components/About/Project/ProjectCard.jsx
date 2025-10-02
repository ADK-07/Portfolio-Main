import React from "react";
import { Star, ExternalLinkIcon, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-2xl mx-auto overflow-hidden transition-transform hover:shadow-2xl"
    >
      {/* Image + Overlay */}
      <div className="group relative overflow-hidden">
        {/* Project Image with aspect ratio for responsiveness */}
        <div className="relative w-full aspect-[16/9]">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.demoUrl && project.githubUrl && (
            <div className="flex items-center gap-6">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300"
              >
                <ExternalLinkIcon size={22} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300"
              >
                <Github size={22} />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Title + Date */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.date}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Key Features */}
        {project.highlights?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Key Features:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center">
                  <Star size={16} className="text-yellow-400 flex-shrink-0" />
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
