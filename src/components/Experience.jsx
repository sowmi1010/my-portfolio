// src/components/Experience.jsx
import experienceData from "../data/experience.json";
import { motion } from "framer-motion";
import { Code, Database, GraduationCap, Users } from "lucide-react";

const iconMap = { Users, GraduationCap, Code, Database };

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative py-28 px-6
        bg-gradient-to-b from-white via-[#f4e8ff] to-white
        dark:from-[#050009] dark:via-[#0c0017] dark:to-[#000]
        overflow-hidden
      "
    >
      {/* Neon Particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -50, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 3 + Math.random() * 3, repeat: Infinity }}
          className="
            pointer-events-none absolute rounded-full blur-[6px]
            bg-purple-500/40 dark:bg-yellow-300/30
          "
          style={{
            width: 4 + Math.random() * 6,
            height: 4 + Math.random() * 6,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 60}px`,
          }}
        />
      ))}

      {/* Soft Neon Gradient Top & Bottom */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[35vh] bg-purple-600/25 dark:bg-yellow-300/15 blur-[140px]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-0 right-1/2 translate-x-1/2 w-[75vw] h-[30vh] bg-pink-600/25 dark:bg-purple-500/15 blur-[160px]"
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative z-10 text-center mb-20
          font-extrabold text-5xl
          bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent
          dark:from-yellow-300 dark:to-yellow-500
        "
      >
        Experience
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">

        {/* Neon vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2 }}
          className="
            absolute left-6 top-0 md:left-1/2 
            transform md:-translate-x-1/2
            w-[4px] rounded-full
            bg-gradient-to-b from-purple-500 via-pink-400 to-yellow-300
            dark:from-yellow-400 dark:via-purple-500 dark:to-pink-400
            shadow-[0_0_25px_rgba(255,255,255,0.3)]
          "
        />

        {/* Entries */}
        <div className="relative z-10 space-y-20">
          {experienceData.map((exp, i) => {
            const Icon = iconMap[exp.icon] || Users;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`
                  relative flex flex-col w-full md:w-[48%]
                  ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                `}
              >
                {/* Icon Bubble */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="
                    absolute -left-12 md:left-[-2.8rem] top-2
                    w-12 h-12 rounded-full
                    flex items-center justify-center
                    bg-gradient-to-br from-purple-600 to-pink-600
                    dark:from-yellow-400 dark:to-yellow-200
                    border-4 border-white/30 dark:border-black/50
                    shadow-[0_0_20px_rgba(255,255,255,0.25)]
                  "
                >
                  <Icon className="text-white dark:text-black w-5 h-5" />
                </motion.div>

                {/* Glass Card */}
                <div
                  className="
                    rounded-xl p-6 backdrop-blur-xl
                    bg-white/50 border border-white/25 shadow-lg
                    hover:shadow-purple-300/30 hover:-translate-y-1
                    transition-all
                    dark:bg-white/10 dark:border-purple-700/30 dark:hover:border-yellow-300/50
                  "
                >
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-yellow-300 mb-1">
                    {exp.title}
                  </h3>
                  <p className="italic text-gray-700 dark:text-gray-300 mb-3 text-sm">
                    {exp.company} • {exp.time}
                  </p>
                  <ul className="text-sm text-purple-900 dark:text-yellow-100 space-y-2 leading-relaxed">
                    {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
