import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import projects from "../data/projects.js";

const githubProfile = "https://github.com/sowmi1010";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.showcase && project.featured).slice(0, 3),
    []
  );

  const additionalProjects = useMemo(
    () => projects.filter((project) => project.showcase && !project.featured).slice(0, 3),
    []
  );
  const featuredCaseStudies = featuredProjects.filter(
    (project) => project.caseStudy && typeof project.caseStudy === "object"
  );

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeProject]);

  const renderProjectCard = (project, index, showLiveDetails) => (
    <motion.article
      key={project.title}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.42 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="cursor-pointer overflow-hidden rounded-2xl border border-[#0affd8]/15 bg-white/[0.04] shadow-md transition hover:border-[#0affd8]/45 hover:shadow-[0_0_8px_rgba(0,255,255,0.14)]"
      onClick={() => setActiveProject(project)}
    >
      <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />

      <div className="space-y-3 p-5">
        <h3 className="text-lg font-extrabold text-[#0affd8]">{project.title}</h3>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[#0affd8]/35 bg-[#0affd8]/12 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0affd8]">
            {project.focus}
          </span>
          {project.projectType && (
            <span className="rounded-full border border-yellow-300/35 bg-yellow-300/12 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-yellow-200">
              {project.projectType}
            </span>
          )}
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-gray-300">{project.desc}</p>
        {showLiveDetails &&
          project.caseStudy &&
          typeof project.caseStudy === "object" &&
          project.caseStudy.features?.length > 0 && (
            <ul className="list-inside list-disc space-y-1 text-xs text-gray-200">
              {project.caseStudy.features.slice(0, 2).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
        {showLiveDetails && project.caseStudy && typeof project.caseStudy === "object" && (
          <p className="line-clamp-2 text-xs text-gray-200">
            <span className="font-semibold text-white">My Role:</span>{" "}
            {project.caseStudy.myRole}
          </p>
        )}
        <p className="text-xs font-medium text-gray-200">Impact: {project.impact}</p>
        <p className="text-xs font-semibold text-[#0affd8]">{project.tech}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {showLiveDetails &&
            (project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="rounded-full border border-green-300/40 bg-green-300/10 px-3 py-1 text-[11px] font-semibold text-green-200 transition hover:bg-green-300/20"
              >
                Live Demo
              </a>
            ) : (
              <span className="rounded-full border border-gray-400/30 bg-gray-400/10 px-3 py-1 text-[11px] font-semibold text-gray-300">
                Live Demo Soon
              </span>
            ))}

          <a
            href={project.github || project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="rounded-full border border-[#0affd8]/40 bg-[#0affd8]/10 px-3 py-1 text-[11px] font-semibold text-[#0affd8] transition hover:bg-[#0affd8]/20"
          >
            GitHub
          </a>

        
        </div>
      </div>
    </motion.article>
  );

  return (
    <section id="projects" className="relative w-full overflow-hidden bg-[#02040a] px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0.08 }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_bottom,rgba(0,255,255,0.08),transparent)] blur-[20px]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#0affd8_1px,transparent_1px),linear-gradient(90deg,#0affd8_1px,transparent_1px)] bg-[size:52px_52px] opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-4 bg-gradient-to-r from-purple-500 to-pink-200 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-5xl"
        >
          Selected Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-300 md:text-base"
        >
          Focused showcase of my strongest work: 3 featured projects and 3 additional
          builds for quick recruiter review.
        </motion.p>

        <div className="mb-12">
          <h3 className="mb-5 text-xl font-bold text-white">Featured Projects</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => renderProjectCard(project, index, true))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-5 text-xl font-bold text-white">Featured Case Studies</h3>
          <div className="space-y-6">
            {featuredCaseStudies.map((project) => (
              <article
                key={`${project.title}-case-study`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-xl font-bold text-[#0affd8]">{project.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-green-300/40 bg-green-300/10 px-3 py-1 text-xs font-semibold text-green-200 transition hover:bg-green-300/20"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#0affd8]/40 bg-[#0affd8]/10 px-3 py-1 text-xs font-semibold text-[#0affd8] transition hover:bg-[#0affd8]/20"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="mt-4 space-y-4 text-sm text-gray-200">
                  <div>
                    <p className="font-semibold text-white">Project Overview</p>
                    <p className="mt-1">{project.caseStudy.overview}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Problem</p>
                    <p className="mt-1">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Features</p>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      {project.caseStudy.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Admin Features</p>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      {project.caseStudy.adminFeatures.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Tech Stack</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.caseStudy.techStack.map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full border border-[#0affd8]/35 bg-[#0affd8]/10 px-3 py-1 text-xs font-semibold text-[#0affd8]"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Challenges</p>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      {project.caseStudy.challenges.map((challenge) => (
                        <li key={challenge}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white">My Role</p>
                    <p className="mt-1">{project.caseStudy.myRole}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Outcome</p>
                    <p className="mt-1">{project.caseStudy.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold text-white">Other Selected Projects</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((project, index) => renderProjectCard(project, index, false))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/25 px-6 py-2 text-sm font-semibold text-white transition hover:border-[#0affd8] hover:text-[#0affd8]"
          >
            View More on GitHub
          </a>
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-lg"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 25 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#0affd8]/45 bg-[#02040a] p-6 text-white shadow-[0_0_40px_rgba(0,255,255,0.35)]"
            >
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 text-gray-400 transition hover:text-red-400"
              >
                <X size={24} />
              </button>

              <img
                src={activeProject.image}
                alt={`${activeProject.title} preview`}
                className="mb-4 max-h-72 w-full rounded-xl object-cover"
              />

              <h3 className="bg-gradient-to-r from-[#0affd8] to-[#6a5cff] bg-clip-text text-3xl font-extrabold text-transparent">
                {activeProject.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#0affd8]/40 bg-[#0affd8]/15 px-3 py-1 text-xs font-semibold text-[#0affd8]">
                  {activeProject.focus}
                </span>
                {activeProject.projectType && (
                  <span className="rounded-full border border-yellow-300/40 bg-yellow-300/15 px-3 py-1 text-xs font-semibold text-yellow-200">
                    {activeProject.projectType}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-200">{activeProject.desc}</p>
              <p className="mt-2 text-sm text-white">
                <span className="font-semibold text-[#0affd8]">Impact:</span> {activeProject.impact}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0affd8]/40 bg-[#0affd8]/15 px-3 py-1 text-xs font-semibold text-[#0affd8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs font-semibold text-gray-300">Stack: {activeProject.tech}</p>

              {activeProject.caseStudy && typeof activeProject.caseStudy === "object" && (
                <div className="mt-6 space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-200">
                  <h4 className="text-base font-semibold text-white">Case Study</h4>
                  <div>
                    <p className="font-semibold text-white">Project Overview</p>
                    <p className="mt-1">{activeProject.caseStudy.overview}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Problem</p>
                    <p className="mt-1">{activeProject.caseStudy.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Features</p>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      {activeProject.caseStudy.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Admin Features</p>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      {activeProject.caseStudy.adminFeatures.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Challenges</p>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      {activeProject.caseStudy.challenges.map((challenge) => (
                        <li key={challenge}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white">My Role</p>
                    <p className="mt-1">{activeProject.caseStudy.myRole}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Outcome</p>
                    <p className="mt-1">{activeProject.caseStudy.outcome}</p>
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {activeProject.featured &&
                  (activeProject.liveDemo ? (
                    <a
                      href={activeProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-6 py-3 font-bold text-[#05220f] transition hover:scale-[1.02]"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded-full border border-gray-500/35 bg-gray-500/15 px-6 py-3 font-semibold text-gray-300">
                      Live Demo Coming Soon
                    </span>
                  ))}

                <a
                  href={activeProject.github || activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0affd8] px-6 py-3 font-bold text-[#02040a] transition hover:scale-[1.02]"
                >
                  View GitHub <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
