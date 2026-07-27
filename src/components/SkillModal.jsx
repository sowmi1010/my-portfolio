import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function SkillModal({ skill, projects, onClose }) {
  const isOpen = Boolean(skill);
  const openCaseStudySection = () => {
    onClose();
    window.requestAnimationFrame(() => {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            className="no-scrollbar relative max-h-[86vh] w-full max-w-xl overflow-y-scroll rounded-2xl border border-purple-500/20 bg-white p-6 pt-10 shadow-[0_0_40px_rgba(160,0,255,0.35)] backdrop-blur-xl dark:bg-[#140026]/90 dark:text-white"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              type="button"
              className="absolute right-4 top-3 text-gray-600 transition hover:text-red-400 dark:text-gray-300"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <h2 className="bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-3xl font-extrabold text-transparent dark:from-yellow-300 dark:to-yellow-200">
              {skill.name}
            </h2>
            <p className="mb-3 mt-1 text-sm opacity-75">{skill.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {skill.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-purple-300 bg-purple-200 px-2 py-1 text-[10px] font-semibold uppercase text-purple-900 dark:border-purple-600 dark:bg-purple-700/30 dark:text-yellow-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-3 text-lg font-semibold">Projects using {skill.name}</h3>

            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  key={`${skill.name}-${project.title}`}
                  className="mb-6 border-b border-gray-300/30 pb-4 dark:border-white/10"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="mb-3 h-48 w-full rounded-xl object-cover"
                  />
                  <h4 className="font-semibold">{project.title}</h4>
                  <p className="text-sm opacity-75">{project.desc}</p>
                  <p className="mt-1 text-xs font-bold opacity-80">{project.tech}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-green-600 px-4 py-2 text-sm text-white transition hover:bg-green-700"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-block rounded-full border border-gray-400/35 bg-gray-400/10 px-4 py-2 text-sm text-gray-400">
                        Live Demo Soon
                      </span>
                    )}
                    <a
                      href={project.github || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-purple-600 px-4 py-2 text-sm text-white transition hover:bg-purple-700 dark:bg-yellow-300 dark:text-black"
                    >
                      GitHub
                    </a>
                    {project.caseStudy && typeof project.caseStudy === "object" && (
                      <button
                        type="button"
                        onClick={openCaseStudySection}
                        className="inline-block rounded-full border border-yellow-300/40 px-4 py-2 text-sm text-yellow-200 transition hover:bg-yellow-300/15"
                      >
                        Case Study in Projects
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-300">No matching projects found.</p>
            )}

            <div className="h-2" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
