// src/components/Skills.jsx
import { useState } from "react";
import skills from "../data/skills";
import { filterProjectsBySkill } from "../data/filterProjects";
import SkillModal from "./SkillModal";
import TiltCard from "./interactive/TiltCard";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [modalSkill, setModalSkill] = useState(null);

  const filtered = skills.filter((s) => s.category === activeTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Auto scroll up
    window.scrollTo({
      top: document.querySelector("#skills")?.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="skills"
      className="
      relative py-24 px-6 transition-colors duration-500
      bg-gradient-to-br from-[#faf7ff] via-[#efe4ff] to-[#e2d2ff]
      dark:bg-gradient-to-br dark:from-[#07000e] dark:via-[#120027] dark:to-[#1b0040]
      text-purple-900 dark:text-white overflow-visible
      "
    >

      {/* 🫧 Floating Bubble Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [-20, -220],
              x: [0, Math.random() * 120 - 60]
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 4,
              delay: Math.random() * 3,
            }}
            className="absolute bottom-0 left-1/2 w-4 h-4 bg-purple-400/30 blur-lg rounded-full"
          />
        ))}
      </div>

      {/* 🔮 Background Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -top-28 left-0 w-80 h-80 bg-purple-600 blur-[130px] rounded-full opacity-30"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [1.1, 1.25, 1.1] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 blur-[160px] rounded-full opacity-25"
      />

      {/* 🌟 Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
        relative text-center text-5xl font-extrabold mb-14 z-10
        bg-gradient-to-r from-purple-700 via-fuchsia-500 to-pink-400
        bg-clip-text text-transparent dark:from-yellow-300 dark:via-yellow-400 dark:to-yellow-200
        "
      >
        My Skills
      </motion.h2>

      {/* 🟣 Tabs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex justify-center gap-3 mb-12 flex-wrap"
      >
        {["Frontend", "Backend", "Database", "Tools"].map((tab) => (
          <motion.button
            key={tab}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleTabClick(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition
              ${
                activeTab === tab
                  ? "bg-purple-700 text-white dark:bg-yellow-300 dark:text-black shadow-lg shadow-purple-400/40"
                  : "bg-white/60 text-purple-700 dark:bg-white/10 dark:text-yellow-200 hover:scale-105"
              }
            `}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* 🧊 Skill Cards Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
      >
        {filtered.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.055, duration: 0.6 }}
            viewport={{ once: true }}
            className="cursor-pointer"
            onClick={() => setModalSkill(skill)}
          >
            <TiltCard>
              <div
                className="
                  group relative p-6 h-64 rounded-xl border
                  backdrop-blur-xl bg-white/85 text-purple-900 border-purple-200 shadow-md
                  hover:shadow-2xl hover:border-purple-600 hover:-translate-y-1 transition duration-300
                  dark:bg-white/10 dark:text-white dark:border-purple-500/30 dark:hover:border-yellow-300/50
                "
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-20 mx-auto h-20 object-contain group-hover:scale-110 transition"
                />

                <h3 className="text-xl font-bold text-center mt-1 tracking-wide">
                  {skill.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-1">
                  {skill.tags?.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="
                        text-[10px] px-2 py-1 rounded-md uppercase tracking-wider font-bold
                        bg-purple-200 text-purple-900 border border-purple-300
                        dark:bg-purple-700/40 dark:text-yellow-200 dark:border-purple-500/30
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 h-[6px] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-yellow-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>

                <p className="text-xs text-center opacity-70">
                  {skill.percent}% Expertise
                </p>

                {/* Hover Description */}
                <div
                  className="
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition
                    bg-black/70 dark:bg-black/80 backdrop-blur-xl text-white
                    flex items-center justify-center p-4 text-center text-xs rounded-xl
                  "
                >
                  {skill.description}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      {/* 📱 Modal */}
      <SkillModal
        skill={modalSkill}
        projects={modalSkill ? filterProjectsBySkill(modalSkill.tags) : []}
        onClose={() => setModalSkill(null)}
      />
    </section>
  );
}
