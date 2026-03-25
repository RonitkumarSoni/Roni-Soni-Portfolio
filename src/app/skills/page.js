"use client";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import * as SiIcons from "react-icons/si";

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-accent text-3xl font-mono font-bold">
          &gt;_
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Skills & Arsenal</h1>
          <p className="text-white/50 mt-1">Technologies I work with.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-[2rem] border border-white/5 bg-[#151515] p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">{cat.name}</h2>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map(skill => {
                const Icon = SiIcons[skill.icon];
                return (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
                  >
                    {Icon && <Icon className="text-accent" />}
                    <span className="text-sm font-medium text-white/80">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
