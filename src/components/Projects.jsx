import { useState, useEffect } from "react";
import projects from "../data/projects.js";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export default function Projects() {
  const [active, setActive] = useState(null);

  // disable scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <section
      id="projects"
      className="
        relative py-28 px-6 overflow-hidden w-full
        bg-[#02040a] text-white dark:bg-[#02040a]
      "
    >
      {/* 🌊 Hologram Wave Background */}
      <motion.div
        initial={{ opacity: 0.25 }}
        animate={{
          y: [0, -40, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 9, repeat: Infinity }}
        className="
          absolute top-0 left-0 w-full h-[140%]
          pointer-events-none
          bg-[linear-gradient(to_bottom,rgba(0,255,255,0.15),transparent)]
          blur-[60px]
        "
      />

      {/* 🔷 Cyber Grid */}
      <motion.div
        animate={{ opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="
          absolute inset-0 pointer-events-none
          bg-[linear-gradient(#0affd8_1px,transparent_1px),
              linear-gradient(90deg,#0affd8_1px,transparent_1px)]
          bg-[size:42px_42px]
          opacity-25
        "
      />

      {/* 🟣 Floating Neon Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#0affd8]"
          style={{
            width: Math.random() * 3 + 2,
            height: Math.random() * 3 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            y: [-6, 4, -6],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 3,
          }}
        />
      ))}

      {/* 🔥 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
        relative z-10 text-center text-5xl font-extrabold mb-16
        bg-gradient-to-r from-[#0affd8] to-[#6a5cff]
        bg-clip-text text-transparent select-none
      "
      >
        My Projects
      </motion.h2>

      {/* GRID LIST */}
      <div
        className="
          relative z-10
          columns-1 sm:columns-2 lg:columns-3 gap-6
          max-w-6xl mx-auto space-y-6
        "
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.55 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="
              break-inside-avoid rounded-2xl overflow-hidden cursor-pointer
              backdrop-blur-xl border border-[#0affd8]/10 bg-white/5 shadow-lg
              hover:shadow-[0_0_25px_rgba(0,255,255,0.35)]
              hover:border-[#0affd8]
              dark:bg-white/5 dark:border-[#0affd8]/20
            "
            onClick={() => setActive(proj)}
          >
            <motion.img
              src={proj.image}
              alt={proj.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-extrabold text-[#0affd8]">
                {proj.title}
              </h3>
              <p className="text-sm opacity-80 mt-2 leading-relaxed text-gray-300">
                {proj.desc}
              </p>
              <span
                className="
                  inline-block mt-3 px-3 py-1 text-[11px] font-semibold rounded-full
                  bg-[#0affd8]/20 text-[#0affd8]
                  border border-[#0affd8]/40
                "
              >
                {proj.tech}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 bg-black/80 backdrop-blur-xl
              z-[999] flex justify-center items-center p-6
            "
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative bg-[#02040a] text-white
                rounded-2xl p-6 max-w-xl w-full max-h-[85vh] overflow-y-auto no-scrollbar
                shadow-[0_0_40px_rgba(0,255,255,0.45)]
                border border-[#0affd8]/40
              "
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
              >
                <X size={24} />
              </button>

              <img
                src={active.image}
                className="rounded-xl mb-4 object-cover w-full max-h-64"
              />
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#0affd8] to-[#6a5cff] bg-clip-text text-transparent">
                {active.title}
              </h3>
              <p className="text-sm opacity-80 mt-3">{active.desc}</p>
              <p className="mt-2 text-xs font-semibold text-[#0affd8]">
                {active.tech}
              </p>
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2 mt-6
                  bg-[#0affd8] text-[#02040a]
                  px-6 py-3 rounded-full font-bold hover:scale-105 transition shadow-md
                "
              >
                View Code <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
