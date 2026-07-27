import { motion } from "framer-motion";
import { Code, Database, GraduationCap, Users } from "lucide-react";
import experienceData from "../data/experience.json";

const iconMap = { Users, GraduationCap, Code, Database };

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f4e8ff] to-white px-6 py-28 dark:from-[#050009] dark:via-[#0c0017] dark:to-[#000]"
    >
      <motion.div
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute left-1/2 top-0 h-[28vh] w-[75vw] -translate-x-1/2 bg-purple-600/20 blur-[120px] dark:bg-yellow-300/12"
      />

      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-0 right-1/2 h-[24vh] w-[70vw] translate-x-1/2 bg-pink-600/15 blur-[120px] dark:bg-purple-500/12"
      />

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative z-10 mb-4 bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-center text-5xl font-extrabold text-transparent dark:from-yellow-300 dark:to-yellow-500"
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 mx-auto mb-20 max-w-2xl text-center text-sm leading-relaxed text-purple-900 dark:text-gray-200 md:text-base"
      >
        My background combines product development and technical training, with a
        focus on practical full-stack execution.
      </motion.p>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.1 }}
          className="absolute left-6 top-0 w-[3px] rounded-full bg-gradient-to-b from-purple-500 via-pink-400 to-yellow-300 shadow-[0_0_14px_rgba(255,255,255,0.2)] md:left-1/2 md:-translate-x-1/2"
        />

        <div className="relative z-10 space-y-20">
          {experienceData.map((experience, index) => {
            const Icon = iconMap[experience.icon] || Users;

            return (
              <motion.article
                key={`${experience.title}-${experience.time}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative flex w-full flex-col md:w-[48%] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="absolute -left-12 top-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white/30 bg-gradient-to-br from-purple-600 to-pink-600 shadow-[0_0_12px_rgba(255,255,255,0.2)] md:left-[-2.8rem] dark:border-black/50 dark:from-yellow-400 dark:to-yellow-200"
                >
                  <Icon className="h-5 w-5 text-white dark:text-black" />
                </motion.div>

                <div className="rounded-xl border border-white/25 bg-white/65 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-purple-300/20 dark:border-purple-700/30 dark:bg-white/10 dark:hover:border-yellow-300/50">
                  <h3 className="mb-1 text-xl font-semibold text-purple-900 dark:text-yellow-300">
                    {experience.title}
                  </h3>
                  <p className="mb-3 text-sm italic text-gray-700 dark:text-gray-300">
                    {experience.company} - {experience.time}
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-purple-900 dark:text-yellow-100">
                    {experience.points.map((point) => (
                      <li key={`${experience.title}-${point}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
