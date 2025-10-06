import Bhub from "../../assets/Project/Bhub.png";
import SmartImg from "../../assets/Project/SmartIrrigation.png";
import TodoListImage from "../../assets/Project/TodoList.png";
import CalculatorImage from "../../assets/Project/Calculator.png";
import BaseImage from "../../assets/Project/Base project.png";
import ProjectCard from "./ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "BHUB – Book Uploading and Reading Platform",
    category: "Full Stack",
    description:
      "A modern platform for book enthusiasts with role-based access and an integrated reading experience.",
    technologies: ["PHP", "HTML", "MySQL", "CSS", "JavaScript"],
    demoUrl: "https://bhub.fwh.is",
    githubUrl: "https://github.com/abhinavhh/BHUB",
    image: Bhub,
    date: "2024",
    highlights: [
      "User Engagement",
      "Integrated Design",
      "Admin Dashboard",
      "Responsive UI",
    ],
  },
  {
    id: 2,
    title: "To-Do List App",
    category: "Web",
    description:
      "A task management app to stay organized and improve productivity with intuitive UI and smooth experience.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: TodoListImage,
    demoUrl:
      "https://to-do-1on2-git-main-adk-07s-projects.vercel.app?_vercel_share=691Lix968lguZmF7DiFhzWfl3CknHujU",
    githubUrl: "https://github.com/ADK-07/ToDo/tree/main/ToDoList",
    date: "2025",
    highlights: [
      "Drag & Drop",
      "Progress Tracking",
      "File Sharing",
      "Responsive UI",
    ],
  },
  {
    id: 3,
    title: "IoT-Enabled Smart Irrigation System",
    category: "Full Stack",
    description:
      "Automated water control system for agriculture using ESP32, Arduino, and a real-time monitoring web interface.",
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
    highlights: [
      "Real-time Monitoring",
      "Remote Control",
      "Data Visualization",
      "Automated Scheduling",
    ],
  },
  {
    id: 4,
    title: "Calculator App",
    category: "Web",
    description:
      "A simple and responsive calculator with basic arithmetic operations built using React and Tailwind CSS.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    image: CalculatorImage,
    demoUrl:
      "https://calculator-git-main-adk-07s-projects.vercel.app?_vercel_share=n8BCxcjU7Zr9VlpUH4IXC5pswWfKkvBQ",
    githubUrl: "https://github.com/ADK-07/calculator",
    date: "2025",
    highlights: ["Basic Operations", "Responsive Design", "Clean UI"],
  },
  {
    id: 5,
    title: "Base Project Template",
    category: "Web",
    description:
      "A ready-to-use React + Tailwind CSS starter template with clean structure and best practices.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: BaseImage,
    demoUrl:
      "https://base-project-git-main-adk-07s-projects.vercel.app?_vercel_share=s0kbbpB1shpiZTvMBVZ7lXjAY2KuhXh5",
    githubUrl: "https://github.com/ADK-07/base-project",
    date: "2025",
    highlights: [
      "Responsive Design",
      "Reusable Components",
      "Modern Layout",
      "Tailwind Integration",
    ],
  },
];
const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex w-full"
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectList;