// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Globe, Code, Target, Github, Calendar, Tag } from "lucide-react";
import { useState } from "react";
import CircularProgress from "./CircularProgress";

const tabs = [
  { id: 0, label: "Overview", icon: Globe },
  { id: 1, label: "Skills", icon: Code },
];

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React.js", level: 70, color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", level: 75, color: "from-yellow-500 to-yellow-600" },
      { name: "HTML/CSS", level: 90, color: "from-orange-500 to-orange-600" },
      { name: "Tailwind CSS", level: 85, color: "from-cyan-500 to-cyan-600" },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "PostgreSQL", level: 60, color: "from-blue-600 to-blue-700" },
      { name: "MySQL", level: 75, color: "from-blue-500 to-blue-600" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const renderOverview = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    className="max-w-7xl mx-auto "
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="grid col-span-2 gap-6"
      >
        <h3 className="text-2xl font-bold text-blue-500 text-left ">
          Who I Am
        </h3>
        <p className="md:text-xl text-lg leading-relaxed text-justify">
          I am a passionate Computer Science graduate with a knack for creating
          dynamic and user-friendly web applications and Websites. My journey in
          tech started with a curiosity for how things work, and it has evolved
          into a deep understanding of software development.
        </p>
        <p className="md:text-xl  text-lg leading-relaxed text-justify">
          I strive to write clean, efficient, and maintainable code by following
          best practices and design principles. I believe that well-structured
          code not only improves readability but also ensures scalability and
          easier collaboration in team projects.
        </p>
      </motion.div>

      <div className="flex lg:flex-col  justify-around items-center">
        {[
          {
            name: "Web Development",
            level: 80,
            color: "from-blue-500 to-blue-600",
          },
          {
            name: "UI/UX Design",
            level: 60,
            color: "from-blue-500 to-blue-600",
          },
          {
            name: "Logo Design",
            level: 70,
            color: "from-blue-500 to-blue-600",
          },
        ].map((skill) => (
          <div key={skill.name} className="flex flex-col  items-center gap-2">
            <CircularProgress level={skill.level} />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* stats */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 mb-8">
      {[
        { label: "Projects Completed", value: "6+", icon: Code },
        { label: "Technologies Used", value: "10+", icon: Tag },
        { label: "Lines of Code", value: "5k+", icon: Github },
        { label: "Hours Coding", value: "300+", icon: Calendar },
      ].map((stat) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          key={stat.label}
          className="dark:bg-gray-900/50 dark:border-gray-700 border bg-white/80 border-gray-200 flex flex-col items-center justify-center  p-6 rounded-lg text-center gap-2 backdrop-blur-sm"
        >
          <stat.icon />
          <span className="text-2xl font-bold text-blue-600 mb-1">
            {stat.value}
          </span>
          <span className="text-sm dark:text-gray-400 text-gray-600">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const renderSkill = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    className="md:grid md:grid-cols-2 gap-8 grid-cols-1 "
  >
    {skills.map((skill) => (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        key={skill.category}
        className="max-w-xl space-y-4"
      >
        <h3 className="text-xl font-bold text-blue-500 mb-4">
          {skill.category}
        </h3>
        <div className="flex flex-col gap-4">
          {skill.technologies.map((tech) => (
            <div key={tech.name}>
              <div className="space-y-2 flex justify-between">
                <h4>{tech.name}</h4>
                <span>{tech.level}%</span>
              </div>
              <div className="h-2 bg-gray-400 dark:bg-gray-600 rounded-lg">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${tech.level}%`,
                    transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
                  }}
                  className={`h-full rounded-lg bg-gradient-to-r ${tech.color} w-[${tech.level}%]`}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 justify-center items-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl mb-6 font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl dark:text-gray-400 text-gray-600 mb-6">
            Step into my world, where I share my journey and passion for
            building.
          </p>
        </motion.div>
        {/* About nav links */}
        <motion.nav
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full  font-medium ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500  text-white shadow-lg"
                  : "dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="">{tab.label}</span>
              <tab.icon size={18} />
            </button>
          ))}
        </motion.nav>

        {/* content area */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-h-[250px] py-6"
        >
          {activeTab === 0 && renderOverview()}
          {activeTab === 1 && renderSkill()}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
