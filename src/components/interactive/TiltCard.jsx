// src/components/interactive/TiltCard.jsx
import { motion } from "framer-motion";

export default function TiltCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
}
