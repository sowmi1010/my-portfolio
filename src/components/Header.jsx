import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-r from-purple-900/60 to-purple-700/60
        dark:bg-gradient-to-r dark:from-gray-900/60 dark:to-gray-800/60
        backdrop-blur-lg shadow-md border-b border-purple-300/30 dark:border-gray-700/40
        transition-all duration-500
      "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        <h1
          className="
            text-2xl md:text-3xl font-extrabold tracking-widest
            bg-gradient-to-r from-yellow-300 via-white to-yellow-400
            bg-clip-text text-transparent
            hover:scale-105 transition-transform duration-300
            dark:bg-gradient-to-r dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-200
          "
        >
          Sowmiya
        </h1>
        <div className="flex items-center gap-4">
          {/* hamburger toggle */}
          <button
            className="md:hidden text-yellow-300"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>

          {/* normal menu for desktop */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-base font-semibold text-white dark:text-yellow-200">
              {["About", "Skills", "Experience", "Projects"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="
                      relative hover:text-yellow-300 dark:hover:text-yellow-400 transition
                      before:absolute before:-bottom-1 before:left-0
                      before:w-0 before:h-0.5 before:bg-yellow-400
                      before:transition-all before:duration-300
                      hover:before:w-full
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="
                    bg-yellow-400 text-purple-900 px-4 py-2 rounded
                    hover:bg-yellow-300 hover:scale-105
                    active:scale-95 transition-transform duration-300 shadow
                    dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:text-gray-900
                  "
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <DarkModeToggle />
        </div>
      </div>

      {/* AnimatePresence to handle slide-in mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="
              md:hidden fixed top-16 right-0 w-2/3 h-screen
              bg-purple-900/80 dark:bg-gray-900/80 backdrop-blur-xl p-6
              flex flex-col gap-4 text-base font-semibold text-yellow-100 shadow-2xl
            "
          >
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                onClick={() => setMenuOpen(false)}
                href={`#${item.toLowerCase()}`}
                className="
                  border-b border-yellow-300/20 pb-2
                  hover:text-yellow-300 transition
                "
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
