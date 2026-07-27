import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-200/40 bg-white/80 py-10 text-center dark:border-purple-800/40 dark:bg-[#050009]">
      <div className="absolute inset-0 hidden bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:28px_28px] opacity-[0.05] dark:block" />

      <div className="pointer-events-none absolute -top-24 left-1/2 h-[14rem] w-[14rem] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px] dark:bg-purple-700/18" />

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.1 }}
        className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 shadow-[0_0_10px_rgba(200,0,255,0.4)] dark:from-purple-400 dark:via-pink-400 dark:to-yellow-300"
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative z-10 text-sm tracking-wide text-purple-900 dark:text-gray-200"
      >
        Copyright {new Date().getFullYear()} {" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bold text-transparent dark:from-yellow-300 dark:to-yellow-400">
          Sowmiya Thangadurai
        </span>{" "}
        - MERN Developer Portfolio
      </motion.p>
    </footer>
  );
}
