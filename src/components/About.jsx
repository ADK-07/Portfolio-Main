import { Globe, Code, BookOpen, Target } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: 0, label: "Overview", icon: Globe },
  { id: 1, label: "Skills", icon: Code },
  { id: 2, label: "Journey", icon: BookOpen },
  { id: 3, label: "Goals", icon: Target },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="min-h-[500px] ">
          {activeTab === 0 && <renderOverView />}
          {activeTab === 1 && <renderSkills />}
          {activeTab === 2 && <renderJourney />}
          {activeTab === 3 && <renderGoal />}
        </div>
      </div>
    </section>
  );
};

export default About;
