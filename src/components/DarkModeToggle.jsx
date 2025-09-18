import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

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
      className="
        p-1 sm:p-2 rounded-full
        bg-yellow-300 dark:bg-yellow-400
        text-purple-900
        hover:scale-105 active:scale-95
        shadow-md hover:shadow-lg
        transition-all duration-300
        flex items-center justify-center
      "
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <Sun size={18} className="sm:size-5" />
      ) : (
        <Moon size={18} className="sm:size-5" />
      )}
    </button>
  );
}
