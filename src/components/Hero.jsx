// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import profileImage from "../assets/profile.jpg";
import MagneticBtn from "./interactive/MagneticBtn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen w-full flex flex-col justify-center items-center
        overflow-hidden px-4 pt-28
        text-white
        bg-[#06000d]
        dark:bg-[#06000d]
      "
    >

      {/* 🌌 Galaxy gradient background */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_40%,#4b0082_0%,#12001f_35%,#06000d_100%)]
          opacity-90
        "
      />

      {/* ✨ Stars particle layer */}
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.6
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [-3, 3, -3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 4,
          }}
        />
      ))}

      {/* 🟢 Animated neon grid floor */}
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="
          pointer-events-none absolute bottom-[-5%] left-1/2 -translate-x-1/2
          w-[180vw] h-[60vh]
          bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00eaff33_25%,transparent_50%)]
          opacity-30
        "
      />
      <div
        className="
          absolute bottom-0 left-0 w-full h-[50vh]
          bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px)]
          bg-[length:100%_22px]
          opacity-[0.18]
        "
      />

      {/* 🧊 Floating Profile Avatar */}
      <motion.img
        src={profileImage}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.6, repeat: Infinity }}
        className="
          relative z-10
          w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover
          border-[5px] border-yellow-400 shadow-[0_0_25px_rgba(255,221,0,0.5)]
        "
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="
          relative z-10
          mt-6 text-3xl md:text-5xl font-black tracking-tight
          bg-gradient-to-r from-purple-500 to-pink-400
          dark:from-yellow-300 dark:to-yellow-500
          bg-clip-text text-transparent
        "
      >
        Sowmiya Thangadurai
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="relative z-10 text-yellow-300 italic font-medium mt-2 text-sm md:text-base"
      >
        MERN Stack Developer • UI/UX Designer • Coding Mentor
      </motion.p>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative z-10 flex gap-5 mt-6"
      >
        <a href="https://www.linkedin.com/in/sowmiya-thangadurai-206163233" target="_blank">
          <Linkedin className="w-7 h-7 text-yellow-300 hover:text-white transition" />
        </a>
        <a href="https://github.com/sowmi1010" target="_blank">
          <Github className="w-7 h-7 text-yellow-300 hover:text-white transition" />
        </a>
        <a href="mailto:tamilsowmi1010@gmail.com">
          <Mail className="w-7 h-7 text-yellow-300 hover:text-white transition" />
        </a>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative z-10"
      >
        <MagneticBtn
          className="
            mt-8 px-9 py-3 font-bold rounded-full
            bg-yellow-400 text-purple-900
            hover:bg-yellow-300 hover:shadow-yellow-500/60
            shadow-[0_0_25px_rgba(255,221,0,0.45)]
            transition-all duration-300
          "
        >
          Hire Me
        </MagneticBtn>
      </motion.div>

      {/* Scroll Hint */}
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4], y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 1.7 }}
        className="absolute bottom-8 z-10 text-yellow-300 text-sm font-semibold"
      >
        ↓ Scroll
      </motion.span>
    </section>
  );
}
