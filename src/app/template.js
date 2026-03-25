"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, flex: 1, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, flex: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, flex: 1, transition: { duration: 0.5 } }}
      className="flex flex-col flex-1"
    >
      {children}
    </motion.div>
  );
}
