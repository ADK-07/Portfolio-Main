import Bhub from "../../assets/Project/Bhub.png";
import SmartImg from "../../assets/Project/SmartIrrigation.png";
import todolistImage from "../../assets/Project/todolist.png";
import CalculatorImage from "../../assets/Project/calculator.png";
import BaseImage from "../../assets/Project/Base project.png";
import ProjectCard from "./ProjectCard";

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
      "https://to-do-1on2-git-main-adk-07s-projects.vercel.app?_vercel_share=691Lix968lguZmF7DiFhzWfl3CknHujU",
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
      "https://calculator-git-main-adk-07s-projects.vercel.app?_vercel_share=n8BCxcjU7Zr9VlpUH4IXC5pswWfKkvBQ",
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
      "https://base-project-git-main-adk-07s-projects.vercel.app?_vercel_share=s0kbbpB1shpiZTvMBVZ7lXjAY2KuhXh5",
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

const ProjectList = () => {
  return (
    <div className="relative">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`sticky top-20 mb-40 last:mb-20`}
          style={{
            zIndex: index + 1, // adjust 120px based on card height
          }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;