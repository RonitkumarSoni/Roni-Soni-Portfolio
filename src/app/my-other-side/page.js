"use client";
import { motion } from "framer-motion";
import { TbWorld } from "react-icons/tb";
import { interests } from "@/data/otherSide";

export default function OtherSidePage() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-accent text-3xl">
          <TbWorld />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Other Side</h1>
          <p className="text-white/50 mt-1">Hobbies, interests, and life beyond code.</p>
        </div>
      </motion.div>
      
      <p className="text-2xl font-bold text-accent px-2">Because a healthy mind writes better code.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, i) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-[2rem] border border-white/5 bg-[#151515] p-6 hover:border-white/10 transition-colors"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl transition-transform group-hover:scale-110 group-hover:rotate-6">
              {interest.emoji}
            </div>
            <h2 className="text-xl font-bold text-white mb-2">{interest.title}</h2>
            <p className="text-sm text-white/60 leading-relaxed">{interest.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
