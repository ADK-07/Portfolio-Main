import { motion } from "framer-motion";
import { Globe, Code, BookOpen, Target } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: 1, label: "Skills", icon: Code },
  { id: 2, label: "Journey", icon: BookOpen },
  { id: 3, label: "Goals", icon: Target },
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

const renderSkill = () => (
  <div className="grid grid-cols-2 gap-8 ">
    {skills.map((skill) => (
      <div key={skill.category} className="max-w-xl space-y-4">
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
              <div className="h-2 bg-gray-400 dark:bg-gray-600">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${tech.level}%`,
                    transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
                  }}
                  className={`h-full rounded-lg bg-gradient-to-r ${tech.color} w-[${tech.level}%]`}
                  custom={tech.level}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-4 justify-center items-center mb-10">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl dark:text-gray-400 text-gray-600 mb-6">
            Step into my world, where I share my journey and passion for
            building.
          </p>
        </div>
        {/* About nav links */}
        <nav className="flex flex-wrap gap-4 justify-center mb-12">
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
        </nav>

        {/* content area */}

        <div className="min-h-[250px] py-6">
          {activeTab === 1 && renderSkill()}
          {activeTab === 2 && <renderJourney />}
          {activeTab === 3 && <renderGoal />}
        </div>
      </div>
    </section>
  );
};

export default About;
