import { Star, ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  const {
    id,
    image,
    title,
    date,
    description,
    technologies = [], //technologies = [] gives the real array if available, otherwise an empty array as a fallback.”
    demoUrl,
    githubUrl,
    highlights = [],
  } = project;

  return (
    <div
      key={id}
      className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl
  transition-transform duration-300 hover:-translate-y-2 overflow-hidden w-full"
    >
      {/* Image Section */}
      <div className="group relative h-48 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Overlay */}
        {(demoUrl || githubUrl) && (
          <div className="absolute inset-0 flex items-center justify-center gap-6 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live Demo"
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300"
              >
                <ExternalLink size={22} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Source Code"
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300"
              >
                <Github size={22} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          {date && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {date}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Key Features */}
        {highlights.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Key Features:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Star size={16} className="text-yellow-400 mt-1" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
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
