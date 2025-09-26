import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import hero from "../assets/hero/hero.png";
import { roles, techStacks, social } from "../data/hero";

// Floating animation for hero image
const floatingvariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  // Role rotation every 2 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentRole((prev) => (prev + 1) % roles.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center 
        dark:bg-gray-800 dark:text-gray-300 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <div className="mb-6">
              <span className="text-lg md:text-xl font-medium 
                dark:text-blue-400 text-blue-600"
              >
                Hello I'm
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 
                bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              ADARSH C
            </h1>

            {/* Rotating role */}
            <div className="mb-8">
              <div className="md:text-2xl lg:text-3xl font-semibold h-12 flex 
                items-center justify-center lg:justify-start"
              >
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="dark:text-gray-300 text-gray-700 font-bold"
                >
                  {roles[currentRole]}
                </motion.span>
              </div>
            </div>

            {/* About text */}
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 
              dark:text-gray-400 text-gray-600"
            >
              Fresh CS Engineering graduate (2021-2025) with a passion for
              creating digital experiences. Eager to dive into full-stack
              development and build innovative web solutions that make a
              difference.
            </p>

            {/* Tech stack */}
            <h3 className="uppercase text-sm tracking-wider mb-6 text-gray-500">
              Tech stack I'm learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-12 mx-auto max-w-2xl">
              {techStacks.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border
                    dark:bg-gray-900/50 dark:border-gray-700 dark:hover:border-gray-600 
                    bg-white/50 border-gray-200 hover:border-gray-300
                    backdrop-blur-sm cursor-pointer"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {/* Resume button */}
              <a
                href="/ADARSH C.pdf"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 
                  text-white rounded-full font-semibold flex items-center 
                  justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Download size={20} /> <span>Download Resume</span>
              </a>

              {/* Contact button */}
              <a
                href="mailto:adarshkannanvfc@gamil.com"
                className="px-8 py-4 rounded-full font-semibold flex items-center 
                  justify-center gap-2 shadow-lg hover:shadow-xl transition-colors
                  dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800
                  border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 border"
              >
                <Mail size={20} /> <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div className="flex justify-center gap-6 mb-12">
              {social.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full transition-colors
                    dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800
                    text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content (Hero Image) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              variants={floatingvariants}
              animate="animate"
              className="relative"
            >
              {/* Glowing effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br 
                from-yellow-500 to-amber-500 blur-2xl opacity-20"
              ></div>

              {/* Image container */}
              <div className="relative rounded-full p-2 bg-white dark:bg-gray-800 shadow-lg">
                <img
                  src={hero}
                  alt="Adarsh c"
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-90 lg:h-90 
                    object-cover rounded-full "
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
