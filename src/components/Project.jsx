import React from "react";
import Bhub from "../assets/Project/Bhub.png";
import SmartImg from "../assets/Project/SmartIrrigation.png";
import todolistImage from "../assets/Project/todolist.png";
import CalculatorImage from "../assets/Project/calculator.png";
import BaseImage from "../assets/Project/Base project.png";
import { div, span } from "framer-motion/client";

const projects = [
  {
    id: 1,
    title: "BHUB- Book Uploading and Reading Platform",
    category: "fullstack",
    description:
      "A modern book uploading and reading platform for book enthusias which have role based access to the pages.",
    longDescription:
      "Comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, order management, and payment integration. Includes admin panel for inventory management and analytics.",
    technologies: ["PHP", "HTML", "MySQL", "CSS", "JavaScript"],
    demoUrl: "https://bhub.fwh.is",
    githubUrl: "https://github.com/abhinavhh/BHUB",
    image: Bhub,
    date: "2024",
    status: "Completed",
    highlights: [
      "User Engagement",
      "Integrated design",
      "Admin dashboard",
      "Responsive design",
    ],
  },
  {
    id: 2,
    title: "To Do List App",
    category: "web",
    description:
      "This web application provides a practical solution for staying organized and boosting productivity, offering the benefits of task organization, improved time management, and reduced stress.",
    longDescription: "",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: todolistImage,
    demoUrl:
      "https://vercel.com/adk-07s-projects/to-do-1on2/6CSLQZ4xY3CqqtyEVWwdHRMx6LiX",
    githubUrl: "https://github.com/ADK-07/ToDo/tree/main/ToDoList",
    date: "2025",
    status: "Completed",
    highlights: [
      "Real-time collaboration",
      "Drag & drop",
      "File sharing",
      "Progress tracking",
    ],
  },
  {
    id: 3,
    title: "IoT Enabled Smart Irrigation System",
    category: "fullstack",
    description:
      "A automate water controlling system for agriculture using ESP32 and Arduino with a web interface for monitoring and control.",
    longDescription:
      "An IoT-enabled smart irrigation system that automates water control for agriculture. Features include real-time monitoring, remote control, and data visualization through a web interface.",
    technologies: [
      "React",
      "Arduino IDE",
      "Spring Boot",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: SmartImg,
    demoUrl: "https://smart-irrigation-rho.vercel.app/home",
    githubUrl: "https://github.com/ADK-07/smart-irrigation-local",
    date: "2024",
    status: "Completed",
    highlights: [
      "Real-time monitoring",
      "Remote control",
      "Data visualization",
      "Automated scheduling",
    ],
  },
  {
    id: 4,
    title: "Calculator",
    category: "web",
    description:
      "A simple to use calculator application with basic arithmetic operations.",
    longDescription:
      "A comprehensive calculator application built with React.js and Tailwind CSS. It features basic arithmetic operations, a user-friendly interface, and a fully responsive design for seamless usage across devices",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    image: CalculatorImage,
    demoUrl:
      "https://vercel.com/adk-07s-projects/calculator/FqjDTKv8yase6bFKcWxJzrFhWLh8",
    githubUrl: "https://github.com/ADK-07/calculator",
    date: "2025",
    status: "Completed",
    highlights: [
      "Basic arithmetic operations",
      "Simple UI",
      "Responsive design",
    ],
  },
  {
    id: 5,
    title: "Base Project",
    category: "web",
    description:
      "A starter template for React projects with essential configurations and best practices.",
    longDescription:
      "A React.js and Tailwind CSS base project template designed for rapid web application development. It features a responsive layout, clean component structure, and easily extendable architecture for building modern web apps.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: BaseImage,
    demoUrl:
      "https://vercel.com/adk-07s-projects/base-project/E5PM6ZDVWaPFWPxWF5QJz9bu7QDx",
    githubUrl: "https://github.com/ADK-07/base-project",
    date: "2025",
    status: "Completed",
    highlights: [
      "Responsive design",
      "Clean component structure",
      "Easily extendable architecture",
      "Tailwind CSS integration",
    ],
  },
];
const Project = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <span>
          Explore my portfolio of web applications, from full-stack platforms to
          interactive frontends
        </span>
        <div>
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-900  rounded-lg shadow-md  mb-6 max-w-5xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover "
              />

              {/* project content */}
              <div className="max-w-4xl mx-auto space-y-4 ">
                <div className="flex justify-between items-center ">
                  <h3 className="text-2xl font-semibold mt-4 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <span>{project.date}</span>
                </div>
                <p>{project.description}</p>
                <div>
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium dark:bg-gray-800 dark:text-gray-400 bg-gray-100 text-gray-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* key features */}
                  <div>
                    <h4 className="font-semibold mt-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2 list-inside">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="list-disc list-inside">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
