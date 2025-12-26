// src/components/Header.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] pointer-events-none">
      {/* NAV MAIN BAR */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={`
          pointer-events-auto transition-all duration-500
          backdrop-blur-xl border-b 
          ${
            scrolled
              ? "bg-black/60 dark:bg-black/60 border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.45)]"
              : "bg-transparent border-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="
              font-black text-[28px] select-none cursor-pointer tracking-tighter
              bg-gradient-to-r from-purple-400 to-pink-300
              dark:from-yellow-300 dark:to-yellow-500
              bg-clip-text text-transparent
            "
          >
            Sowmiya
          </motion.h1>

          {/* DESKTOP NAV */}
          <ul className="
            hidden md:flex gap-10 items-center text-base font-medium
            text-white dark:text-yellow-200
          ">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <motion.li whileHover={{ scale: 1.05 }} key={item} className="relative group">
                <a href={`#${item.toLowerCase()}`} className="pb-[3px]">
                  {item}
                </a>
                <span
                  className="
                    absolute left-0 -bottom-[3px] h-[2px] w-0 
                    bg-gradient-to-r from-purple-500 to-pink-500
                    dark:from-yellow-300 dark:to-yellow-500
                    transition-all duration-300 group-hover:w-full
                  "
                />
              </motion.li>
            ))}
            <div className="ml-3">
              <DarkModeToggle />
            </div>
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white dark:text-yellow-200 pointer-events-auto"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 55 }}
            className="
              pointer-events-auto fixed top-0 right-0 w-[70%] h-screen
              bg-black/80 backdrop-blur-2xl border-l border-white/10
              flex flex-col gap-6 p-8 text-white dark:text-yellow-200
            "
          >
            <button
              className="self-end"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="w-9 h-9 text-white dark:text-yellow-300" />
            </button>

            <div className="flex flex-col gap-6 text-lg">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-yellow-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <DarkModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
