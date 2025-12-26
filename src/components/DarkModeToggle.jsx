// src/components/DarkModeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
      className="
        relative px-3 py-2 rounded-full flex items-center justify-center
        bg-white/80 text-purple-900 shadow-sm backdrop-blur-xl
        border border-purple-200 transition-all duration-300
        hover:shadow-lg hover:scale-105 active:scale-95
        dark:bg-white/10 dark:text-yellow-300 dark:border-purple-600
        dark:hover:shadow-purple-400/50
      "
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
