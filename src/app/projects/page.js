"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { BiCodeAlt } from "react-icons/bi";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Frontend", "Full Stack", "Backend"];

  const filteredProjects = projects.filter(p => filter === "All" || p.type === filter);

  return (
    <div className="flex flex-col gap-8 pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-accent text-3xl">
          <BiCodeAlt />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Projects</h1>
          <p className="text-white/50 mt-1">Code, creations, and everything in between.</p>
        </div>
      </motion.div>

      <div className="flex flex-wrap gap-3">
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-6 py-2 transition-all ${filter === cat ? "border-accent bg-accent/10 text-accent" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"}`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p, i) => (
          <motion.a
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-[2rem] bg-[#151515] border border-white/5 hover:border-white/10"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-40 transition-transform duration-500 group-hover:scale-110`} />
            <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/20" />
            <div className="relative z-10 p-6">
              <h3 className="font-bold text-white text-xl">{p.title}</h3>
              <p className="text-sm text-white/70 mt-2">{p.tech.join(" • ")}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
