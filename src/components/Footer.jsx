// src/components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
        relative py-10 text-center
        bg-white/70 dark:bg-[#050009]
        backdrop-blur-xl
        border-t border-purple-200/40 dark:border-purple-800/40
        overflow-hidden
      "
    >

      {/* 🎯 Subtle grid (dark mode only) */}
      <div
        className="
          absolute inset-0 pointer-events-none
          hidden dark:block opacity-[0.08]
          bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]
          bg-[length:26px_26px]
        "
      />

      {/* ✨ Neon top glow (softened for dark mode) */}
      <motion.div
        animate={{ opacity: [0.18, 0.33, 0.18], scale: [1, 1.25, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="
          pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2
          w-[18rem] h-[18rem] rounded-full
          bg-purple-500/50 dark:bg-purple-700/25
          blur-[150px]
        "
      />

      {/* ▬▬ Clean neon divider line ▬▬ */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2 }}
        className="
          absolute top-0 left-0 h-[2px]
          bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400
          dark:from-purple-400 dark:via-pink-400 dark:to-yellow-300
          shadow-[0_0_10px_rgba(200,0,255,0.45)]
        "
      />

      {/* 📝 Text */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10 text-sm tracking-wide
          text-purple-900 dark:text-gray-200
        "
      >
        © {new Date().getFullYear()}{" "}
        <span
          className="
            font-bold
            bg-gradient-to-r from-purple-600 to-pink-500
            dark:from-yellow-300 dark:to-yellow-400
            bg-clip-text text-transparent
          "
        >
          Sowmiya Thangadurai
        </span>{" "}
        — All Rights Reserved
      </motion.p>
    </footer>
  );
}
