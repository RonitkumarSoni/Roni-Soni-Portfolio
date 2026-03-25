"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineCode, HiArrowRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import BentoCard from "../BentoCard";
import { projects } from "@/data/projects";

const categories = ["All", "Full Stack", "Frontend", "UI/UX", "Backend"];

export default function ProjectsCard() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter(p => activeTab === "All" || p.type.includes(activeTab));
  const marqueeProjects = [...filteredProjects, ...filteredProjects, ...filteredProjects, ...filteredProjects].slice(0, 10);

  return (
    <BentoCard className="flex flex-col h-full" delay={0.2}>
      <div className="mb-6 flex items-center justify-between z-10 relative">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white tracking-tight">
          <HiOutlineCode className="text-accent text-[32px]" />
          <span>Projects</span>
        </h2>
        <Link href="/projects" className="text-accent transition-all hover:scale-110 active:scale-90">
          <HiArrowRight className="text-2xl" />
        </Link>
      </div>

      <div className="mb-4 flex gap-2 z-10 relative overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveTab(cat)}
            className={`rounded-full border py-1.5 px-4 text-[11px] font-semibold tracking-wide uppercase transition-colors whitespace-nowrap ${
              activeTab === cat 
                ? "border-accent bg-accent/10 text-accent" 
                : "border-white/5 bg-[#141414] text-white/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative -mx-8 -mb-4 flex flex-1 overflow-hidden px-8 pb-4 pt-4">
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: ["0%", "-50%"] }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.3 },
              x: { duration: 40, ease: "linear", repeat: Infinity } 
            }}
            className="flex h-full w-max gap-4"
          >
            {marqueeProjects.map((p, i) => (
              <a
                key={`${p.id}-${i}`}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10 flex h-[180px] w-[280px] shrink-0 overflow-hidden rounded-2xl border-[1px] border-white/10 bg-[#1A1A1A] transition-transform hover:scale-[1.02] shadow-lg flex-col items-center justify-center"
              >
                {/* Image Placeholder Background Glow - Removed padding/colorful border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                
                <div className="relative w-full h-full overflow-hidden rounded-xl border-[1px] border-white/10 bg-black/80 flex items-center justify-center bg-cover bg-center">
                   {/* Dynamic Website Screenshot */}
                   <img 
                      src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(p.link)}?w=600`}
                      alt={`${p.title} screenshot`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                      onError={(e) => { 
                        e.currentTarget.style.display = 'none'; 
                      }}
                   />

                   {/* Solid Fallback Mock content if Image Fails or Loads */}
                   <div className="absolute inset-0 flex flex-col justify-end items-center p-4 text-center z-20 bg-gradient-to-t from-black/100 via-black/40 to-transparent">
                      <h3 className="text-[15px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{p.title}</h3>
                   </div>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-gradient-to-l from-black/80 to-transparent" />
      </div>
    </BentoCard>
  );
}
