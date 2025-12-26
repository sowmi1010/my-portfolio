import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import { useState } from "react";

const textStagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section
      id="about"
      className="
        py-28 md:py-36 px-6 md:px-10
        overflow-hidden
        bg-gradient-to-b from-white to-[#f1e5ff]
        dark:from-[#05030a] dark:via-[#0f001c] dark:to-[#080012]
      "
      onMouseMove={(e)=>setMousePos({ x:e.clientX, y:e.clientY })}
    >

      {/* 🎯 Neon Spotlight FOLLOW CURSOR */}
      <motion.div
        animate={{ x: mousePos.x - 250, y: mousePos.y - 250 }}
        transition={{ type:"spring", stiffness:60, damping:22 }}
        className="
          pointer-events-none fixed z-0
          w-[420px] h-[420px] rounded-full 
          bg-white/10 dark:bg-purple-500/10
          blur-[130px] opacity-20
        "
      />

      {/* 🟣 Cyber-Glass Floating RINGS (Responsive controlled %) */}
      <motion.div
        animate={{ scale:[1,1.1,1], opacity:[0.15,0.35,0.15] }}
        transition={{ duration:14, repeat:Infinity }}
        className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] bg-purple-600/30 dark:bg-purple-600/20 blur-[130px] rounded-full"
      />
      <motion.div
        animate={{ scale:[1,1.2,1], opacity:[0.1,0.4,0.1] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-pink-500/30 dark:bg-pink-500/20 blur-[150px] rounded-full"
      />

      {/* 🧊 MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* 🖼️ Profile Neon-Glass Card */}
        <motion.div
          initial={{ opacity:0, x:-50 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true, amount:0.4 }}
          transition={{ duration:0.6 }}
          className="lg:w-1/2 flex justify-center"
        >
          <motion.div
            whileHover={{ y:-10, scale:1.02 }}
            transition={{ type:"spring", stiffness:120 }}
            className="
              relative p-[3px] rounded-[2rem]
              bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300
              shadow-[0_0_25px_rgba(255,0,255,0.45)]
            "
          >
            <div className="
              rounded-[1.8rem] overflow-hidden
              bg-white/40 dark:bg-[#00000040]
              backdrop-blur-xl border border-white/30
              shadow-xl
            ">
              <img
                src={profileImage}
                className="w-56 md:w-72 lg:w-80 h-auto object-cover rounded-[1.8rem]"
                alt="Sowmiya"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 📝 Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.3 }}
          className="lg:w-1/2 max-w-xl text-center lg:text-left dark:text-gray-100"
        >
          <motion.h2
            variants={textStagger}
            custom={1}
            className="
              text-4xl md:text-5xl font-bold mb-6
              bg-gradient-to-r from-purple-800 via-fuchsia-500 to-pink-500
              dark:from-yellow-200 dark:to-yellow-400
              bg-clip-text text-transparent
            "
          >
            About Me
          </motion.h2>

          <motion.p
            variants={textStagger}
            custom={2}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            I build digital products with <span className="font-semibold text-purple-600 dark:text-yellow-300">MERN Stack</span> and mentor students to enter tech with confidence.
          </motion.p>

          <motion.p
            variants={textStagger}
            custom={3}
            className="text-sm dark:text-gray-400 mb-6"
          >
            Diploma in Computer Science — Dharmambal Women’s Polytechnic College, Chennai.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={textStagger}
            custom={4}
            className="flex justify-center lg:justify-start gap-8 mb-6"
          >
            {[
              { num:"5+", label:"Years Experience" },
              { num:"100+", label:"Students Mentored" },
              { num:"10+", label:"Projects Done" }
            ].map((item, i)=>(
              <motion.div key={i} whileHover={{ scale:1.1 }} className="text-center">
                <p className="text-3xl font-bold text-purple-700 dark:text-yellow-300">{item.num}</p>
                <p className="text-xs opacity-60 dark:opacity-70">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            variants={textStagger}
            custom={5}
            href="#skills"
            whileHover={{ scale:1.05 }}
            className="
              inline-block px-8 py-3 rounded-full font-semibold
              bg-purple-600 text-white dark:bg-yellow-400 dark:text-black
              shadow-md transition
            "
          >
            View Skills →
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
