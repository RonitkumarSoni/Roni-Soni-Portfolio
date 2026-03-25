"use client";
import { motion } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import { TbDeviceMobile } from "react-icons/tb";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-accent text-3xl">
          <HiOutlineBriefcase />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Experience</h1>
          <p className="text-white/50 mt-1">My professional journey and work history.</p>
        </div>
      </motion.div>

      <div className="relative border-l border-white/10 ml-8 pl-8 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            {/* Timeline dot/icon */}
            <div className="absolute -left-[53px] flex h-10 w-10 items-center justify-center rounded-xl bg-[#111] border border-accent/30 text-accent shadow-[0_0_10px_var(--accent-rgb)] z-10">
              {exp.icon === "mobile" ? <TbDeviceMobile className="text-xl" /> : <HiOutlineBriefcase className="text-xl" />}
            </div>

            <div className="rounded-[2rem] border border-white/5 bg-[#151515] p-8 hover:border-white/10 transition-colors">
              <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
              <div className="mt-2 flex items-center justify-between text-white/50">
                <span className="font-medium text-white/70">{exp.company} • {exp.type}</span>
                <span className="text-sm border border-white/10 bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <p className="mt-6 text-white/70 leading-relaxed">
                {exp.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.skills.map(s => (
                  <span key={s} className="rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
