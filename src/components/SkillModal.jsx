// src/components/SkillModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function SkillModal({ skill, projects, onClose }) {
  if (!skill) return null;

  const sheetRef = useRef(null);

  // ESC close
  useEffect(() => {
    const escHandler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  // prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={sheetRef}
          onClick={(e) => e.stopPropagation()}
          className="
            relative w-full max-w-xl max-h-[85vh] overflow-y-scroll
            rounded-2xl bg-white dark:bg-[#140026]/90 dark:text-white
            border border-purple-500/20 backdrop-blur-xl
            shadow-[0_0_40px_rgba(160,0,255,0.45)]
            p-6 pt-10 no-scrollbar
          "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Close */}
          <button
            className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 hover:text-red-400"
            onClick={onClose}
          >
            <X size={22} />
          </button>

          {/* Header */}
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-400 dark:from-yellow-300 dark:to-yellow-200 bg-clip-text text-transparent">
            {skill.name}
          </h2>
          <p className="text-sm opacity-70 mt-1 mb-3">{skill.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skill.tags?.map((t, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-1 rounded-md uppercase font-semibold
                bg-purple-200 text-purple-900 border border-purple-300
                dark:bg-purple-700/30 dark:text-yellow-200 dark:border-purple-600"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Projects */}
          <h3 className="font-semibold text-lg mb-3">Projects using {skill.name}</h3>

          {projects.length > 0 ? (
            projects.map((p, i) => (
              <div
                key={i}
                className="mb-6 pb-4 border-b border-gray-300/20 dark:border-white/10"
              >
                <img
                  src={p.image}
                  className="w-full h-48 object-cover rounded-xl mb-3"
                  alt={p.title}
                />
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm opacity-70">{p.desc}</p>
                <p className="text-xs font-bold mt-1 opacity-80">{p.tech}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-purple-600 hover:bg-purple-700 text-white dark:bg-yellow-300 dark:text-black px-4 py-2 rounded-full text-sm shadow transition"
                >
                  View Code →
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              No matching projects found.
            </p>
          )}

          <div className="h-4" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
