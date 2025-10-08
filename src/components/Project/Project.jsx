import ProjectList from "./ProjectList";

const Project = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white 
dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-8 text-center">
          Projects
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
          Explore my portfolio of web applications, from full-stack platforms to
          interactive front-ends.
        </p>

        {/* Projects Grid */}
        <div className="mt-14">
          <ProjectList />
        </div>
      </div>
    </section>
  );
};

export default Project;
