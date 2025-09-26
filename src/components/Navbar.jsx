import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo/logo.png";
import useTheme from "../Theme/useTheme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

// Theme button styling
const DarkMode = "text-gray-400 hover:text-white dark:hover:bg-gray-800";
const LightMode = "text-gray-600 hover:text-gray-900 hover:bg-gray-200";

const themeButtonStyle = (isDark) =>
  `p-2 rounded-full transition-colors ${isDark ? DarkMode : LightMode}`;

// Theme toggle button
const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={themeButtonStyle(isDark)}
      aria-label="Toggle theme"
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </motion.button>
  );
};

// Navbar menu items
const MenuItem = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contacts", id: "contacts" },
];

const Navbar = () => {
  const [isMenuOn, setIsMenuOn] = useState(false);
  const { isDark } = useTheme();

  // Smooth scroll function
  const ScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOn(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full 
        lg:max-w-7xl lg:rounded-full lg:mt-1 px-6 py-3 shadow-sm 
        bg-gray-100/80 border border-gray-200 backdrop-blur-md 
        dark:bg-gray-800/80 dark:text-gray-300 dark:border-gray-900"
    >
      <div className="flex items-center justify-between lg:px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1"
        >
          <img src={logo} alt="logo" width={40} />
          <span className="text-lg">ADARSH</span>
        </motion.div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {MenuItem.map((item) => (
            <motion.a
              key={item.id}
              whileHover={{ y: -2 }}
              href={`#${item.id}`}
              className="font-medium text-sm"
              onClick={(e) => {
                e.preventDefault();
                ScrollToSection(item.id);
              }}
            >
              {item.label}
            </motion.a>
          ))}
          <ThemeButton />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeButton />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOn(!isMenuOn)}
            className={themeButtonStyle(isDark)}
            aria-label={isMenuOn ? "Close menu" : "Open menu"}
          >
            {isMenuOn ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu items */}
      <AnimatePresence>
        {isMenuOn && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="md:hidden w-[30%] p-4 rounded-lg absolute top-16 right-4 
              flex flex-col dark:bg-gray-900 dark:border-gray-800 
              bg-gray-100 border border-gray-200"
          >
            {MenuItem.map((item) => (
              <motion.a
                key={item.id}
                whileHover={{ x: 5 }}
                href={`#${item.id}`}
                className="w-full text-left py-2 text-sm uppercase tracking-wider transition-colors
                  dark:text-gray-400 dark:hover:text-white
                  text-gray-600 hover:text-gray-900 border-b border-gray-300 last:border-b-0"
                onClick={(e) => {
                  // this prevent a's default direct jumb to content and make it scroll to the section smoothly
                  e.preventDefault();
                  ScrollToSection(item.id);
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
