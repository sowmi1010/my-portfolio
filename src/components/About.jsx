import { motion } from "framer-motion";
import profileImage from "../assets/profile.webp";

const textStagger = {
  hidden: { opacity: 0, y: 36 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

const highlights = [
  "Build end-to-end MERN applications with clean API architecture.",
  "Design responsive, conversion-focused interfaces with React and Tailwind.",
  "Collaborate with teams to ship reliable features and faster releases.",
];

const stats = [
  { value: "3+", label: "Years in Tech" },
  { value: "2+", label: "Years in Development and Training" },
  { value: "10+", label: "Projects Built" },
  { value: "350+", label: "Students Guided" },
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-gradient-to-b from-white to-[#f1e5ff] px-6 py-24 dark:from-[#05030a] dark:via-[#0f001c] dark:to-[#080012] md:px-10 md:py-32"
    >
      <motion.div
        animate={{ opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute left-[6%] top-[14%] h-[26vw] w-[26vw] rounded-full bg-purple-600/20 blur-[90px] dark:bg-purple-600/15"
      />

      <motion.div
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-[12%] right-[8%] h-[28vw] w-[28vw] rounded-full bg-pink-500/20 blur-[95px] dark:bg-pink-500/15"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-start lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="flex justify-center lg:w-1/2"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 130 }}
            className="rounded-[2rem] bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 p-[3px] shadow-[0_0_14px_rgba(255,0,255,0.25)]"
          >
            <div className="overflow-hidden rounded-[1.8rem] border border-white/30 bg-white/40 backdrop-blur-xl shadow-xl dark:bg-[#00000040]">
              <img
                src={profileImage}
                alt="Sowmiya Thangadurai"
                className="h-auto w-56 rounded-[1.8rem] object-cover md:w-72 lg:w-80"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-xl text-center text-purple-900 dark:text-gray-100 lg:w-1/2 lg:text-left"
        >
          <motion.h2
            variants={textStagger}
            custom={1}
            className="mb-6 bg-gradient-to-r from-purple-800 via-fuchsia-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent dark:from-yellow-200 dark:to-yellow-400 md:text-5xl"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={textStagger}
            custom={2}
            className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg"
          >
            I am a MERN developer based in Chennai, focused on building
            practical web products that solve business problems, not just
            attractive interfaces.
          </motion.p>

          <motion.p
            variants={textStagger}
            custom={3}
            className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
          >
            Diploma in Computer Engineering, Dr Dharmambal government
            polytechnic college for Women Tharamani, Chennai. Currently working
            as Full Stack Developer and Technical Trainer at Quest Technologies.
          </motion.p>

          <motion.ul
            variants={textStagger}
            custom={4}
            className="mb-6 space-y-2"
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="list-inside list-disc text-left text-sm leading-relaxed text-purple-900 dark:text-yellow-100"
              >
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={textStagger}
            custom={5}
            className="mb-7 flex justify-center gap-7 lg:justify-start"
          >
            {stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.06 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-purple-700 dark:text-yellow-300">
                  {item.value}
                </p>
                <p className="text-xs opacity-70">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            variants={textStagger}
            custom={6}
            href="#projects"
            whileHover={{ scale: 1.03 }}
            className="inline-block rounded-full bg-purple-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-purple-700 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300"
          >
            Explore Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
