import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";
import { filterProjectsBySkill } from "../data/filterProjects";
import SkillModal from "./SkillModal";
import TiltCard from "./interactive/TiltCard";

const tabs = ["Primary Skills", "Secondary Skills"];
const proficiencyStyles = {
  Strong:
    "border-emerald-300/45 bg-emerald-300/15 text-emerald-700 dark:text-emerald-200",
  Comfortable:
    "border-sky-300/45 bg-sky-300/15 text-sky-700 dark:text-sky-200",
  Familiar:
    "border-amber-300/45 bg-amber-300/15 text-amber-700 dark:text-amber-200",
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Primary Skills");
  const [modalSkill, setModalSkill] = useState(null);

  const filteredSkills = useMemo(
    () => skills.filter((skill) => skill.category === activeTab),
    [activeTab]
  );

  return (
    <section
      id="skills"
      className="relative overflow-visible bg-gradient-to-br from-[#faf7ff] via-[#efe4ff] to-[#e2d2ff] px-6 py-24 text-purple-900 transition-colors duration-500 dark:bg-gradient-to-br dark:from-[#07000e] dark:via-[#120027] dark:to-[#1b0040] dark:text-white"
    >
      <motion.div
        animate={{ opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[110px]"
      />

      <motion.div
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-600/15 blur-[120px]"
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-4 bg-gradient-to-r from-purple-700 via-fuchsia-500 to-pink-400 bg-clip-text text-center text-4xl font-extrabold text-transparent dark:from-yellow-300 dark:via-yellow-400 dark:to-yellow-200 md:text-5xl"
      >
        Skills I Use in Real Builds
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="relative z-10 mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-purple-800 dark:text-gray-200 md:text-base"
      >
        Primary skills reflect my MERN development direction. Secondary skills are
        supporting technologies I use when needed.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mb-12 flex flex-wrap justify-center gap-3"
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition md:text-base ${
              activeTab === tab
                ? "bg-purple-700 text-white shadow-lg shadow-purple-400/35 dark:bg-yellow-300 dark:text-black"
                : "bg-white/65 text-purple-700 hover:scale-105 dark:bg-white/10 dark:text-yellow-200"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="cursor-pointer"
            onClick={() => setModalSkill(skill)}
          >
            <TiltCard>
              <div className="group relative h-64 rounded-xl border border-purple-200 bg-white/90 p-6 text-purple-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-600 hover:shadow-lg dark:border-purple-500/30 dark:bg-white/10 dark:text-white dark:hover:border-yellow-300/50">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="mx-auto h-20 w-20 object-contain transition group-hover:scale-110"
                />

                <h3 className="mt-2 text-center text-xl font-bold tracking-wide">{skill.name}</h3>

                <div className="mt-2 flex justify-center">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${proficiencyStyles[skill.proficiency]}`}
                  >
                    {skill.proficiency}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {skill.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-purple-300 bg-purple-200 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-900 dark:border-purple-500/30 dark:bg-purple-700/40 dark:text-yellow-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/75 p-4 text-center text-xs text-white opacity-0 transition group-hover:opacity-100 dark:bg-black/80">
                  {skill.description}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <SkillModal
        skill={modalSkill}
        projects={modalSkill ? filterProjectsBySkill(modalSkill.tags) : []}
        onClose={() => setModalSkill(null)}
      />
    </section>
  );
}
